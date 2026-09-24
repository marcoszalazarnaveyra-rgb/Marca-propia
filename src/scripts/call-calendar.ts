type Period = { days: number[]; start: string; end: string };

const calendar = document.querySelector<HTMLElement>('.call-calendar');

if (calendar) {
  const phone = calendar.dataset.phone ?? '';
  const timezone = calendar.dataset.timezone ?? 'Europe/Madrid';
  const periods = JSON.parse(calendar.dataset.periods ?? '[]') as Period[];
  const monthLabel = calendar.querySelector<HTMLElement>('#calendar-month')!;
  const previousButton = calendar.querySelector<HTMLButtonElement>('#calendar-prev')!;
  const nextButton = calendar.querySelector<HTMLButtonElement>('#calendar-next')!;
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
  const addDay = (iso: string) => new Date(utcDate(iso).getTime() + 86400000).toISOString().slice(0, 10);
  const isoDate = (year: number, month: number, day: number) =>
    `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  const dateLabel = (iso: string) => new Intl.DateTimeFormat('es-ES', {
    timeZone: 'UTC', weekday: 'long', day: 'numeric', month: 'long', year: 'numeric',
  }).format(utcDate(iso));
  const monthName = (year: number, month: number) => {
    const label = new Intl.DateTimeFormat('es-ES', {
      timeZone: 'UTC', month: 'long', year: 'numeric',
    }).format(new Date(Date.UTC(year, month, 1)));
    return label[0].toUpperCase() + label.slice(1);
  };
  const toMinutes = (time: string) => {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  };
  const toTime = (minutes: number) =>
    `${String(Math.floor(minutes / 60)).padStart(2, '0')}:${String(minutes % 60).padStart(2, '0')}`;
  const periodsFor = (iso: string) => periods.filter(period => period.days.includes(utcDate(iso).getUTCDay()));

  const firstDay = addDay(todayInSpain());
  const [initialYear, initialMonth] = firstDay.split('-').map(Number);
  let displayedYear = initialYear;
  let displayedMonth = initialMonth - 1;
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

  function renderMonth() {
    const earliest = addDay(todayInSpain());
    if (selectedDate && selectedDate < earliest) {
      selectedDate = null;
      selectedTime = null;
    }
    monthLabel.textContent = monthName(displayedYear, displayedMonth);
    previousButton.disabled = isoDate(displayedYear, displayedMonth, 1) <= earliest.slice(0, 7) + '-01';
    days.replaceChildren();
    const offset = (new Date(Date.UTC(displayedYear, displayedMonth, 1)).getUTCDay() + 6) % 7;
    for (let index = 0; index < offset; index++) {
      const blank = document.createElement('span');
      blank.className = 'calendar-empty';
      blank.setAttribute('aria-hidden', 'true');
      days.append(blank);
    }
    const count = new Date(Date.UTC(displayedYear, displayedMonth + 1, 0)).getUTCDate();
    for (let day = 1; day <= count; day++) {
      const iso = isoDate(displayedYear, displayedMonth, day);
      const button = document.createElement('button');
      button.type = 'button';
      button.textContent = String(day);
      button.setAttribute('aria-label', dateLabel(iso));
      button.setAttribute('aria-pressed', String(selectedDate === iso));
      button.disabled = iso < earliest || periodsFor(iso).length === 0;
      button.addEventListener('click', () => {
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

  function changeMonth(change: number) {
    const month = new Date(Date.UTC(displayedYear, displayedMonth + change, 1));
    displayedYear = month.getUTCFullYear();
    displayedMonth = month.getUTCMonth();
    selectedDate = null;
    selectedTime = null;
    renderMonth();
  }

  previousButton.addEventListener('click', () => changeMonth(-1));
  nextButton.addEventListener('click', () => changeMonth(1));
  submit.addEventListener('click', () => {
    if (!selectedDate || !selectedTime) return;
    if (selectedDate < addDay(todayInSpain()) || !periodsFor(selectedDate).some(period =>
      toMinutes(selectedTime!) >= toMinutes(period.start) &&
      toMinutes(selectedTime!) + 30 <= toMinutes(period.end))) {
      selectedDate = null;
      selectedTime = null;
      renderMonth();
      return;
    }
    const message = `Hola Marcos, quiero hablar sobre mi proyecto el ${dateLabel(selectedDate)} a las ${selectedTime} (hora de España peninsular). ¿Te viene bien?`;
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  });

  renderMonth();
}
