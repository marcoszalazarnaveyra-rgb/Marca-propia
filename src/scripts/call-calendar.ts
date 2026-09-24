type Period = { days: number[]; start: string; end: string };

const calendar = document.querySelector<HTMLElement>('.call-calendar');

if (calendar) {
  const phone = calendar.dataset.phone ?? '';
  const timezone = calendar.dataset.timezone ?? 'Europe/Madrid';
  const periods = JSON.parse(calendar.dataset.periods ?? '[]') as Period[];
  const rangeLabel = calendar.querySelector<HTMLElement>('#calendar-range')!;
  const days = calendar.querySelector<HTMLElement>('#calendar-days')!;
  const times = calendar.querySelector<HTMLElement>('#calendar-times')!;
  const selection = calendar.querySelector<HTMLElement>('#calendar-selection')!;
  const submit = calendar.querySelector<HTMLButtonElement>('#calendar-submit')!;

  // Use the business timezone even when a visitor is browsing from another country.
  const todayInSpain = () => {
    const parts = new Intl.DateTimeFormat('en-GB', {
      timeZone: timezone, year: 'numeric', month: '2-digit', day: '2-digit',
    }).formatToParts(new Date());
    const part = (type: string) => parts.find(item => item.type === type)?.value ?? '';
    return `${part('year')}-${part('month')}-${part('day')}`;
  };
  const utcDate = (iso: string) => new Date(`${iso}T12:00:00Z`);
  const addDays = (iso: string, count: number) =>
    new Date(utcDate(iso).getTime() + count * 86400000).toISOString().slice(0, 10);
  const dateLabel = (iso: string) => new Intl.DateTimeFormat('es-ES', {
    timeZone: 'UTC', weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
  }).format(utcDate(iso));
  const shortDateLabel = (iso: string) => new Intl.DateTimeFormat('es-ES', {
    timeZone: 'UTC', day: 'numeric', month: 'short', year: 'numeric',
  }).format(utcDate(iso));
  const toMinutes = (time: string) => {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  };
  const toTime = (minutes: number) =>
    `${String(Math.floor(minutes / 60)).padStart(2, '0')}:${String(minutes % 60).padStart(2, '0')}`;
  const periodsFor = (iso: string) => periods.filter(period => period.days.includes(utcDate(iso).getUTCDay()));

  let selectedDate: string | null = null;
  let selectedTime: string | null = null;

  function renderTimes() {
    times.replaceChildren();
    submit.disabled = !selectedDate || !selectedTime;
    if (!selectedDate) {
      selection.textContent = 'Primero elige un día disponible.';
      return;
    }
    selection.textContent = dateLabel(selectedDate);
    for (const period of periodsFor(selectedDate)) {
      for (let minute = toMinutes(period.start); minute + 30 <= toMinutes(period.end); minute += 30) {
        const time = toTime(minute);
        const button = document.createElement('button');
        button.type = 'button';
        button.textContent = time;
        button.setAttribute('aria-label', `${time}, hora de España peninsular`);
        button.setAttribute('aria-pressed', String(selectedTime === time));
        button.addEventListener('click', () => {
          selectedTime = time;
          times.querySelectorAll('button').forEach(item =>
            item.setAttribute('aria-pressed', String(item === button)));
          submit.disabled = false;
        });
        times.append(button);
      }
    }
  }

  function renderDates() {
    const today = todayInSpain();
    const earliest = addDays(today, 1);
    const latest = addDays(today, 14);
    if (selectedDate && (selectedDate < earliest || selectedDate > latest)) {
      selectedDate = null;
      selectedTime = null;
    }
    rangeLabel.textContent = `${shortDateLabel(earliest)} — ${shortDateLabel(latest)}`;
    days.replaceChildren();
    const weekdayInitials = ['D', 'L', 'M', 'X', 'J', 'V', 'S'];
    for (let offset = 0; offset < 14; offset++) {
      const iso = addDays(earliest, offset);
      const button = document.createElement('button');
      button.type = 'button';
      const weekday = document.createElement('span');
      weekday.textContent = weekdayInitials[utcDate(iso).getUTCDay()];
      const day = document.createElement('strong');
      day.textContent = String(utcDate(iso).getUTCDate());
      button.append(weekday, day);
      button.setAttribute('aria-label', dateLabel(iso));
      button.setAttribute('aria-pressed', String(selectedDate === iso));
      button.disabled = periodsFor(iso).length === 0;
      button.addEventListener('click', () => {
        const currentToday = todayInSpain();
        if (iso < addDays(currentToday, 1) || iso > addDays(currentToday, 14)) {
          renderDates();
          return;
        }
        selectedDate = iso;
        selectedTime = null;
        days.querySelectorAll('button').forEach(item =>
          item.setAttribute('aria-pressed', String(item === button)));
        renderTimes();
      });
      days.append(button);
    }
    renderTimes();
  }

  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) renderDates();
  });
  submit.addEventListener('click', () => {
    if (!selectedDate || !selectedTime) return;
    const today = todayInSpain();
    if (selectedDate < addDays(today, 1) || selectedDate > addDays(today, 14) || !periodsFor(selectedDate).some(period =>
      toMinutes(selectedTime!) >= toMinutes(period.start) &&
      toMinutes(selectedTime!) + 30 <= toMinutes(period.end))) {
      selectedDate = null;
      selectedTime = null;
      renderDates();
      return;
    }
    const message = `Hola Marcos, quiero hablar sobre mi proyecto el ${dateLabel(selectedDate)} a las ${selectedTime} (hora de España peninsular). ¿Te viene bien?`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  });

  renderDates();
}
