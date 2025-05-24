document.addEventListener('DOMContentLoaded', function() {
    // Variabili globali
    const today = new Date();
    let currentMonth = today.getMonth();
    let currentYear = today.getFullYear();
    let selectedDate = null;
    let selectedTimeSlot = null;
    
    // Orari del centro estetico
    const businessHours = {
        0: null, // Domenica: chiuso
        1: { start: '13:00', end: '20:00' }, // Lunedì
        2: { start: '9:30', end: '19:00' }, // Martedì
        3: { start: '9:30', end: '19:00' }, // Mercoledì
        4: { start: '9:30', end: '19:00' }, // Giovedì
        5: { start: '9:30', end: '19:00' }, // Venerdì
        6: { start: '9:00', end: '14:00' }  // Sabato
    };
    
    // Elementi DOM
    const elements = {
        calendarDays: document.getElementById('calendarDays'),
        currentMonth: document.getElementById('currentMonth'),
        prevMonth: document.getElementById('prevMonth'),
        nextMonth: document.getElementById('nextMonth'),
        timeSlotContainer: document.getElementById('timeSlotContainer'),
        selectedDateDisplay: document.getElementById('selectedDateDisplay'),
        businessHours: document.getElementById('businessHours'),
        timeSlots: document.getElementById('timeSlots'),
        bookingModal: document.getElementById('bookingModal'),
        modalDate: document.getElementById('modalDate'),
        modalTime: document.getElementById('modalTime'),
        cancelBooking: document.getElementById('cancelBooking'),
        confirmBooking: document.getElementById('confirmBooking'),
        confirmationModal: document.getElementById('confirmationModal'),
        confirmationDetails: document.getElementById('confirmationDetails'),
        closeConfirmation: document.getElementById('closeConfirmation')
    };

    // Verifica che tutti gli elementi necessari siano presenti
    const missingElements = Object.entries(elements)
        .filter(([_, element]) => !element)
        .map(([name]) => name);

    if (missingElements.length > 0) {
        console.error('Elementi DOM mancanti:', missingElements);
        return;
    }
    
    // Simulazione di prenotazioni esistenti (in un'app reale, questi dati verrebbero dal server)
    const bookings = {};
    
    // Funzione per generare il calendario
    function generateCalendar(month, year) {
        elements.calendarDays.innerHTML = '';
        
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const daysInMonth = lastDay.getDate();
        
        // Calcola il giorno della settimana del primo giorno del mese (0 = Domenica, 1 = Lunedì, ecc.)
        let firstDayOfWeek = firstDay.getDay();
        // Converti da 0-6 (Dom-Sab) a 1-7 (Lun-Dom)
        firstDayOfWeek = firstDayOfWeek === 0 ? 7 : firstDayOfWeek;
        
        // Aggiorna l'intestazione del mese
        const monthNames = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
        elements.currentMonth.textContent = `${monthNames[month]} ${year}`;
        
        // Aggiungi celle vuote per i giorni prima del primo giorno del mese
        for (let i = 1; i < firstDayOfWeek; i++) {
            const emptyCell = document.createElement('div');
            elements.calendarDays.appendChild(emptyCell);
        }
        
        // Aggiungi celle per ogni giorno del mese
        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(year, month, day);
            const dayOfWeek = date.getDay();
            
            const dayCell = document.createElement('div');
            dayCell.classList.add('day-cell', 'p-2', 'rounded-lg', 'text-center', 'cursor-pointer', 'transition-colors');
            
            // Verifica se il giorno è nel passato o è una domenica
            const isPast = date < new Date(today.setHours(0, 0, 0, 0));
            const isSunday = dayOfWeek === 0;
            const isToday = date.toDateString() === new Date().toDateString();
            
            // Applica stili in base allo stato del giorno
            if (isPast || isSunday) {
                dayCell.classList.add('bg-gray-200', 'text-gray-400', 'cursor-not-allowed');
            } else {
                dayCell.classList.add('bg-rose-100', 'text-gray-800', 'hover:bg-rose-200');
                dayCell.setAttribute('data-date', `${year}-${month + 1}-${day}`);
                dayCell.addEventListener('click', handleDateClick);
            }
            
            if (isToday) {
                dayCell.classList.add('ring-2', 'ring-rose-500');
            }
            
            dayCell.textContent = day.toString();
            elements.calendarDays.appendChild(dayCell);
        }
    }
    
    // Funzione per gestire il click su una data
    function handleDateClick(event) {
        const target = event.currentTarget;
        
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
    function showTimeSlots(date) {
        const dayOfWeek = date.getDay();
        const hours = businessHours[dayOfWeek];
        
        // Formatta la data in italiano
        const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
        const formattedDate = date.toLocaleDateString('it-IT', options);
        elements.selectedDateDisplay.textContent = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
        
        // Mostra gli orari di apertura per il giorno selezionato
        if (hours) {
            elements.businessHours.textContent = `Orari di apertura: ${hours.start} - ${hours.end}`;
            generateTimeSlots(date, hours);
            elements.timeSlotContainer.classList.remove('hidden');
        } else {
            elements.businessHours.textContent = 'Chiuso';
            elements.timeSlots.innerHTML = '';
            elements.timeSlotContainer.classList.remove('hidden');
        }
    }
    
    // Funzione per generare gli slot orari
    function generateTimeSlots(date, hours) {
        elements.timeSlots.innerHTML = '';
        
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
            timeSlot.classList.add('time-slot', 'p-3', 'rounded-lg', 'text-center', 'border', 'transition-colors');
            
            // Verifica se lo slot è già prenotato
            const isBooked = bookings[dateString] && bookings[dateString].includes(timeString);
            
            if (isBooked) {
                timeSlot.classList.add('bg-gray-200', 'text-gray-400', 'cursor-not-allowed');
                timeSlot.textContent = `${timeString} - Occupato`;
            } else {
                timeSlot.classList.add('bg-white', 'border-rose-200', 'text-gray-800', 'hover:bg-rose-100');
                timeSlot.textContent = timeString;
                timeSlot.setAttribute('data-time', timeString);
                timeSlot.addEventListener('click', () => handleTimeSlotClick(dateString, timeString));
            }
            
            elements.timeSlots.appendChild(timeSlot);
        }
    }
    
    // Funzione per gestire il click su uno slot orario
    function handleTimeSlotClick(dateString, timeString) {
        selectedTimeSlot = timeString;
        
        // Rimuovi la selezione precedente
        const previouslySelected = document.querySelector('.time-slot.bg-rose-300');
        if (previouslySelected) {
            previouslySelected.classList.remove('bg-rose-300');
            previouslySelected.classList.add('bg-white');
        }
        
        // Seleziona il nuovo slot
        const target = event?.currentTarget;
        if (target) {
            target.classList.remove('bg-white');
            target.classList.add('bg-rose-300');
        }
        
        // Mostra il modal di conferma
        elements.modalDate.textContent = formatDateString(dateString);
        elements.modalTime.textContent = timeString;
        elements.bookingModal.classList.remove('hidden');
    }
    
    // Funzione per formattare la data
    function formatDateString(dateString) {
        const [year, month, day] = dateString.split('-').map(Number);
        const date = new Date(year, month - 1, day);
        const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
        return date.toLocaleDateString('it-IT', options).charAt(0).toUpperCase() + date.toLocaleDateString('it-IT', options).slice(1);
    }
    
    // Event Listeners
    elements.prevMonth.addEventListener('click', () => {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        generateCalendar(currentMonth, currentYear);
        elements.timeSlotContainer.classList.add('hidden');
    });
    
    elements.nextMonth.addEventListener('click', () => {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        generateCalendar(currentMonth, currentYear);
        elements.timeSlotContainer.classList.add('hidden');
    });
    
    elements.cancelBooking.addEventListener('click', () => {
        elements.bookingModal.classList.add('hidden');
    });
    
    elements.confirmBooking.addEventListener('click', () => {
        const nameInput = document.getElementById('name');
        const phoneInput = document.getElementById('phone');
        const serviceSelect = document.getElementById('service');
        
        if (!nameInput || !phoneInput || !serviceSelect) {
            console.error('Elementi del form mancanti');
            return;
        }
        
        const name = nameInput.value.trim();
        const phone = phoneInput.value.trim();
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
        elements.bookingModal.classList.add('hidden');
        
        // Mostra il modal di conferma
        elements.confirmationDetails.innerHTML = `
            <p class="mb-1"><strong>Nome:</strong> ${name}</p>
            <p class="mb-1"><strong>Telefono:</strong> ${phone}</p>
            <p class="mb-1"><strong>Servizio:</strong> ${serviceSelect.options[serviceSelect.selectedIndex].text}</p>
            <p class="mb-1"><strong>Data:</strong> ${elements.modalDate.textContent}</p>
            <p><strong>Orario:</strong> ${elements.modalTime.textContent}</p>
        `;
        elements.confirmationModal.classList.remove('hidden');
        
        // Resetta il form
        nameInput.value = '';
        phoneInput.value = '';
        serviceSelect.value = '';
        
        // Aggiorna gli slot orari
        showTimeSlots(selectedDate);
    });
    
    elements.closeConfirmation.addEventListener('click', () => {
        elements.confirmationModal.classList.add('hidden');
    });
    
    // Inizializza il calendario
    generateCalendar(currentMonth, currentYear);
}); 