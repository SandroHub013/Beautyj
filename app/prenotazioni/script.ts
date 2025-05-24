document.addEventListener('DOMContentLoaded', function() {
    // Variabili globali
    const today = new Date();
    let currentMonth: number = today.getMonth();
    let currentYear: number = today.getFullYear();
    let selectedDate: Date | null = null;
    let selectedTimeSlot: string | null = null;
    
    // Orari del centro estetico
    const businessHours: Record<number, { start: string; end: string; } | null> = {
        0: null, // Domenica: chiuso
        1: { start: '13:00', end: '20:00' }, // Lunedì
        2: { start: '9:30', end: '19:00' }, // Martedì
        3: { start: '9:30', end: '19:00' }, // Mercoledì
        4: { start: '9:30', end: '19:00' }, // Giovedì
        5: { start: '9:30', end: '19:00' }, // Venerdì
        6: { start: '9:00', end: '14:00' }  // Sabato
    };
    
    // Elementi DOM
    const calendarDays = document.getElementById('calendarDays');
    const currentMonthElement = document.getElementById('currentMonth');
    const prevMonthButton = document.getElementById('prevMonth');
    const nextMonthButton = document.getElementById('nextMonth');
    const timeSlotContainer = document.getElementById('timeSlotContainer');
    const selectedDateDisplay = document.getElementById('selectedDateDisplay');
    const businessHoursElement = document.getElementById('businessHours');
    const timeSlotsElement = document.getElementById('timeSlots');
    const bookingModal = document.getElementById('bookingModal');
    const modalDate = document.getElementById('modalDate');
    const modalTime = document.getElementById('modalTime');
    const cancelBookingButton = document.getElementById('cancelBooking');
    const confirmBookingButton = document.getElementById('confirmBooking');
    const confirmationModal = document.getElementById('confirmationModal');
    const confirmationDetails = document.getElementById('confirmationDetails');
    const closeConfirmationButton = document.getElementById('closeConfirmation');
    
    // Simulazione di prenotazioni esistenti (in un'app reale, questi dati verrebbero dal server)
    const bookings: Record<string, string[]> = {};
    
    // Funzione per generare il calendario
    function generateCalendar(month: number, year: number): void {
        if (!calendarDays || !currentMonthElement) return;
        
        calendarDays.innerHTML = '';
        
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const daysInMonth = lastDay.getDate();
        
        // Calcola il giorno della settimana del primo giorno del mese (0 = Domenica, 1 = Lunedì, ecc.)
        let firstDayOfWeek = firstDay.getDay();
        // Converti da 0-6 (Dom-Sab) a 1-7 (Lun-Dom)
        firstDayOfWeek = firstDayOfWeek === 0 ? 7 : firstDayOfWeek;
        
        // Aggiorna l'intestazione del mese
        const monthNames = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
        currentMonthElement.textContent = `${monthNames[month]} ${year}`;
        
        // Aggiungi celle vuote per i giorni prima del primo giorno del mese
        for (let i = 1; i < firstDayOfWeek; i++) {
            const emptyCell = document.createElement('div');
            calendarDays.appendChild(emptyCell);
        }
        
        // Aggiungi celle per ogni giorno del mese
        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(year, month, day);
            const dayOfWeek = date.getDay(); // 0 = Domenica, 1 = Lunedì, ecc.
            
            const dayCell = document.createElement('div');
            dayCell.classList.add('day-cell', 'p-2', 'rounded-lg', 'text-center', 'cursor-pointer');
            
            // Verifica se il giorno è nel passato o è una domenica
            const isPast = date < new Date(today.setHours(0, 0, 0, 0));
            const isSunday = dayOfWeek === 0;
            const isToday = date.toDateString() === new Date().toDateString();
            
            // Applica stili in base allo stato del giorno
            if (isPast || isSunday) {
                dayCell.classList.add('bg-gray-200', 'text-gray-400', 'disabled');
            } else {
                dayCell.classList.add('bg-rose-100', 'text-gray-800', 'hover:bg-rose-200');
                dayCell.setAttribute('data-date', `${year}-${month + 1}-${day}`);
                dayCell.addEventListener('click', handleDateClick);
            }
            
            if (isToday) {
                dayCell.classList.add('ring-2', 'ring-rose-500');
            }
            
            dayCell.textContent = day.toString();
            calendarDays.appendChild(dayCell);
        }
    }
    
    // Funzione per gestire il click su una data
    function handleDateClick(event: MouseEvent): void {
        const target = event.currentTarget as HTMLElement;
        
        // Rimuovi la selezione precedente
        const previouslySelected = document.querySelector('.day-cell.bg-rose-300');
        if (previouslySelected) {
            previouslySelected.classList.remove('bg-rose-300');
            previouslySelected.classList.add('bg-rose-100');
        }
        
        // Seleziona la nuova data
        target.classList.remove('bg-rose-100');
        target.classList.add('bg-rose-300');
        
        // Ottieni la data selezionata
        const dateString = target.getAttribute('data-date');
        if (!dateString) return;
        
        const [year, month, day] = dateString.split('-').map(Number);
        selectedDate = new Date(year, month - 1, day);
        
        // Mostra gli orari disponibili
        showTimeSlots(selectedDate);
    }
    
    // Funzione per mostrare gli orari disponibili
    function showTimeSlots(date: Date): void {
        if (!selectedDateDisplay || !businessHoursElement || !timeSlotsElement || !timeSlotContainer) return;
        
        const dayOfWeek = date.getDay(); // 0 = Domenica, 1 = Lunedì, ecc.
        const hours = businessHours[dayOfWeek];
        
        // Formatta la data in italiano
        const options: Intl.DateTimeFormatOptions = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
        const formattedDate = date.toLocaleDateString('it-IT', options);
        selectedDateDisplay.textContent = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
        
        // Mostra gli orari di apertura per il giorno selezionato
        if (hours) {
            businessHoursElement.textContent = `Orari di apertura: ${hours.start} - ${hours.end}`;
            generateTimeSlots(date, hours);
            timeSlotContainer.classList.remove('hidden');
        } else {
            businessHoursElement.textContent = 'Chiuso';
            timeSlotsElement.innerHTML = '';
            timeSlotContainer.classList.remove('hidden');
        }
    }
    
    // Funzione per generare gli slot orari
    function generateTimeSlots(date: Date, hours: { start: string; end: string }): void {
        if (!timeSlotsElement) return;
        
        timeSlotsElement.innerHTML = '';
        
        // Converti gli orari di apertura e chiusura in minuti dall'inizio della giornata
        const [startHour, startMinute] = hours.start.split(':').map(Number);
        const [endHour, endMinute] = hours.end.split(':').map(Number);
        const startMinutes = startHour * 60 + startMinute;
        const endMinutes = endHour * 60 + endMinute;
        
        // Crea slot di 30 minuti
        const slotDuration = 30;
        const dateString = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
        
        for (let minutes = startMinutes; minutes < endMinutes; minutes += slotDuration) {
            const hour = Math.floor(minutes / 60);
            const minute = minutes % 60;
            const timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
            
            const timeSlot = document.createElement('button');
            timeSlot.classList.add('time-slot', 'p-2', 'rounded-lg', 'text-center', 'border');
            
            // Verifica se lo slot è già prenotato
            const isBooked = bookings[dateString] && bookings[dateString].includes(timeString);
            
            if (isBooked) {
                timeSlot.classList.add('bg-gray-200', 'text-gray-400', 'cursor-not-allowed', 'disabled');
                timeSlot.textContent = `${timeString} - Occupato`;
            } else {
                timeSlot.classList.add('bg-white', 'border-rose-200', 'text-gray-800', 'hover:bg-rose-100');
                timeSlot.textContent = timeString;
                timeSlot.setAttribute('data-time', timeString);
                timeSlot.addEventListener('click', () => handleTimeSlotClick(dateString, timeString));
            }
            
            timeSlotsElement.appendChild(timeSlot);
        }
    }
    
    // Funzione per gestire il click su uno slot orario
    function handleTimeSlotClick(dateString: string, timeString: string): void {
        if (!bookingModal || !modalDate || !modalTime) return;
        
        selectedTimeSlot = timeString;
        
        // Rimuovi la selezione precedente
        const previouslySelected = document.querySelector('.time-slot.bg-rose-300');
        if (previouslySelected) {
            previouslySelected.classList.remove('bg-rose-300');
            previouslySelected.classList.add('bg-white');
        }
        
        // Seleziona il nuovo slot
        const target = event?.currentTarget as HTMLElement;
        if (target) {
            target.classList.remove('bg-white');
            target.classList.add('bg-rose-300');
        }
        
        // Mostra il modal di conferma
        modalDate.textContent = formatDateString(dateString);
        modalTime.textContent = timeString;
        bookingModal.classList.remove('hidden');
    }
    
    // Funzione per formattare la data
    function formatDateString(dateString: string): string {
        const [year, month, day] = dateString.split('-').map(Number);
        const date = new Date(year, month - 1, day);
        const options: Intl.DateTimeFormatOptions = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
        return date.toLocaleDateString('it-IT', options).charAt(0).toUpperCase() + date.toLocaleDateString('it-IT', options).slice(1);
    }
    
    // Gestione dei pulsanti del mese precedente e successivo
    prevMonthButton?.addEventListener('click', () => {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        generateCalendar(currentMonth, currentYear);
        timeSlotContainer?.classList.add('hidden');
    });
    
    nextMonthButton?.addEventListener('click', () => {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        generateCalendar(currentMonth, currentYear);
        timeSlotContainer?.classList.add('hidden');
    });
    
    // Gestione del modal di prenotazione
    cancelBookingButton?.addEventListener('click', () => {
        bookingModal?.classList.add('hidden');
    });
    
    confirmBookingButton?.addEventListener('click', () => {
        const nameInput = document.getElementById('name') as HTMLInputElement;
        const phoneInput = document.getElementById('phone') as HTMLInputElement;
        const serviceSelect = document.getElementById('service') as HTMLSelectElement;
        
        if (!nameInput || !phoneInput || !serviceSelect || !selectedDate || !selectedTimeSlot || !bookingModal || !confirmationModal || !confirmationDetails || !modalDate || !modalTime) return;
        
        const name = nameInput.value;
        const phone = phoneInput.value;
        const service = serviceSelect.value;
        
        if (!name || !phone || !service) {
            alert('Per favore, compila tutti i campi.');
            return;
        }
        
        // Salva la prenotazione (in un'app reale, questi dati verrebbero inviati al server)
        const dateString = `${selectedDate.getFullYear()}-${selectedDate.getMonth() + 1}-${selectedDate.getDate()}`;
        if (!bookings[dateString]) {
            bookings[dateString] = [];
        }
        bookings[dateString].push(selectedTimeSlot);
        
        // Chiudi il modal di prenotazione
        bookingModal.classList.add('hidden');
        
        // Mostra il modal di conferma
        confirmationDetails.innerHTML = `
            <p class="mb-1"><strong>Nome:</strong> ${name}</p>
            <p class="mb-1"><strong>Telefono:</strong> ${phone}</p>
            <p class="mb-1"><strong>Servizio:</strong> ${serviceSelect.options[serviceSelect.selectedIndex].text}</p>
            <p class="mb-1"><strong>Data:</strong> ${modalDate.textContent}</p>
            <p><strong>Orario:</strong> ${modalTime.textContent}</p>
        `;
        confirmationModal.classList.remove('hidden');
        
        // Resetta il form
        nameInput.value = '';
        phoneInput.value = '';
        serviceSelect.value = '';
        
        // Aggiorna gli slot orari
        showTimeSlots(selectedDate);
    });
    
    closeConfirmationButton?.addEventListener('click', () => {
        confirmationModal?.classList.add('hidden');
    });
    
    // Inizializza il calendario
    generateCalendar(currentMonth, currentYear);
}); 