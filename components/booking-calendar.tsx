'use client';

import { useState, useEffect } from 'react';
import { Montserrat, Playfair_Display } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });
const playfair = Playfair_Display({ subsets: ['latin'] });

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedDate: string;
  selectedTime: string;
  onConfirm: (bookingData: BookingData) => void;
}

interface BookingData {
  name: string;
  phone: string;
  service: string;
}

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookingDetails: BookingData & {
    date: string;
    time: string;
  };
}

interface BusinessHours {
  start: string;
  end: string;
}

type BusinessHoursMap = {
  [key: number]: BusinessHours | null;
}

const businessHours: BusinessHoursMap = {
  0: null, // Domenica: chiuso
  1: { start: '13:00', end: '20:00' }, // Lunedì
  2: { start: '9:30', end: '19:00' }, // Martedì
  3: { start: '9:30', end: '19:00' }, // Mercoledì
  4: { start: '9:30', end: '19:00' }, // Giovedì
  5: { start: '9:30', end: '19:00' }, // Venerdì
  6: { start: '9:00', end: '14:00' }  // Sabato
};

export function BookingCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [bookingDetails, setBookingDetails] = useState<any>(null);
  const [bookings, setBookings] = useState<Record<string, string[]>>({});

  const monthNames = [
    'Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno',
    'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'
  ];

  const generateCalendar = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    let firstDayOfWeek = firstDay.getDay();
    firstDayOfWeek = firstDayOfWeek === 0 ? 7 : firstDayOfWeek;

    const days = [];
    for (let i = 1; i < firstDayOfWeek; i++) {
      days.push(null);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }

    return days;
  };

  const handleDateClick = (day: number) => {
    if (!day) return;
    
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    const dateString = `${date.getFullYear()}-${date.getMonth() + 1}-${day}`;
    setSelectedDate(dateString);
    setSelectedTime(null);
  };

  const handleTimeClick = (time: string) => {
    setSelectedTime(time);
    setShowBookingModal(true);
  };

  const handleBookingConfirm = (data: BookingData) => {
    if (!selectedDate || !selectedTime) return;

    const newBooking = {
      ...data,
      date: selectedDate,
      time: selectedTime
    };

    setBookingDetails(newBooking);
    setShowBookingModal(false);
    setShowConfirmationModal(true);

    // Update bookings state
    setBookings(prev => ({
      ...prev,
      [selectedDate]: [...(prev[selectedDate] || []), selectedTime]
    }));
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <header className="text-center mb-10">
        <h1 className={`${playfair.className} text-4xl md:text-5xl font-bold text-gold-500 mb-2`}>
          Prenotazioni
        </h1>
        <p className="text-neutral-400 text-lg">
          Scegli una data e un orario per il tuo trattamento
        </p>
      </header>

      <div className="bg-neutral-900 rounded-xl shadow-lg p-6 mb-8 border border-gold-500/30">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="flex items-center mb-4 md:mb-0">
            <button
              onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)))}
              className="bg-neutral-950 hover:bg-gold-500/20 text-gold-500 rounded-full p-2 mr-4 border border-gold-500/50"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <h2 className={`${playfair.className} text-2xl font-bold text-neutral-50`}>
              {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
            </h2>
            <button
              onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)))}
              className="bg-neutral-950 hover:bg-gold-500/20 text-gold-500 rounded-full p-2 ml-4 border border-gold-500/50"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <div className="flex items-center">
            <div className="flex items-center mr-4">
              <div className="w-3 h-3 bg-gold-500 rounded-full mr-2"></div>
              <span className="text-sm text-neutral-400">Disponibile</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-neutral-700 rounded-full mr-2"></div>
              <span className="text-sm text-neutral-400">Non disponibile</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-2 mb-4 text-center">
          {['Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab', 'Dom'].map((day) => (
            <div key={day} className="font-medium text-neutral-400">{day}</div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-2">
          {generateCalendar().map((day, index) => {
            if (!day) return <div key={index}></div>;

            const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
            const isPast = date < new Date(new Date().setHours(0, 0, 0, 0));
            const isSunday = date.getDay() === 0;
            const isToday = date.toDateString() === new Date().toDateString();
            const isSelected = selectedDate === `${date.getFullYear()}-${date.getMonth() + 1}-${day}`;

            return (
              <button
                key={index}
                onClick={() => handleDateClick(day)}
                disabled={isPast || isSunday}
                className={`
                  p-2 rounded-lg text-center transition-all duration-300
                  ${isPast || isSunday
                    ? 'bg-neutral-800 text-neutral-500 cursor-not-allowed'
                    : 'bg-neutral-950 text-neutral-50 hover:bg-gold-500/20 border border-gold-500/30'
                  }
                  ${isToday ? 'ring-2 ring-gold-500' : ''}
                  ${isSelected ? 'bg-gold-500/40' : ''}
                `}
              >
                {day}
              </button>
            );
          })}
        </div>
      </div>

      {selectedDate && (
        <div className="bg-neutral-900 rounded-xl shadow-lg p-6 mb-8 border border-gold-500/30">
          <h3 className={`${playfair.className} text-xl font-bold text-gold-500 mb-4`}>
            {new Date(selectedDate).toLocaleDateString('it-IT', {
              weekday: 'long',
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            })}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
            {generateTimeSlots(selectedDate).map((time) => (
              <button
                key={time}
                onClick={() => handleTimeClick(time)}
                disabled={bookings[selectedDate]?.includes(time)}
                className={`
                  p-2 rounded-lg text-center border transition-all duration-300
                  ${bookings[selectedDate]?.includes(time)
                    ? 'bg-neutral-800 text-neutral-500 cursor-not-allowed border-neutral-700'
                    : 'bg-neutral-950 border-gold-500/30 text-neutral-50 hover:bg-gold-500/20'
                  }
                `}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="bg-neutral-900 rounded-xl shadow-lg p-6 border border-gold-500/30">
        <h3 className={`${playfair.className} text-xl font-bold text-gold-500 mb-4`}>
          Orari di apertura
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(businessHours).map(([day, hours]) => (
            <div
              key={day}
              className={`bg-neutral-950 rounded-lg p-4 border ${
                hours ? 'border-gold-500/20' : ''
              }`}
            >
              <h4 className={`font-semibold ${hours ? 'text-gold-500' : 'text-neutral-400'} mb-2`}>
                {getDayName(parseInt(day))}
              </h4>
              <p className={hours ? 'text-neutral-50' : 'text-neutral-400'}>
                {hours ? `${hours.start} - ${hours.end}` : 'Chiuso'}
              </p>
            </div>
          ))}
        </div>
      </div>

      {showBookingModal && (
        <BookingModal
          isOpen={showBookingModal}
          onClose={() => setShowBookingModal(false)}
          selectedDate={selectedDate!}
          selectedTime={selectedTime!}
          onConfirm={handleBookingConfirm}
        />
      )}

      {showConfirmationModal && bookingDetails && (
        <ConfirmationModal
          isOpen={showConfirmationModal}
          onClose={() => setShowConfirmationModal(false)}
          bookingDetails={bookingDetails}
        />
      )}
    </div>
  );
}

function BookingModal({ isOpen, onClose, selectedDate, selectedTime, onConfirm }: BookingModalProps) {
  const [formData, setFormData] = useState<BookingData>({
    name: '',
    phone: '',
    service: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onConfirm(formData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="bg-neutral-900 rounded-xl p-6 max-w-md w-full mx-4 border border-gold-500/50">
        <h3 className={`${playfair.className} text-2xl font-bold text-gold-500 mb-4`}>
          Conferma prenotazione
        </h3>
        <p className="text-neutral-400 mb-2">
          Data: <span className="font-medium text-neutral-50">{formatDate(selectedDate)}</span>
        </p>
        <p className="text-neutral-400 mb-4">
          Orario: <span className="font-medium text-neutral-50">{selectedTime}</span>
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-neutral-400 mb-2">Nome e Cognome</label>
            <input
              type="text"
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 bg-neutral-950 border border-gold-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 text-neutral-50"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block text-neutral-400 mb-2">Telefono</label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-2 bg-neutral-950 border border-gold-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 text-neutral-50"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="service" className="block text-neutral-400 mb-2">Servizio</label>
            <select
              id="service"
              value={formData.service}
              onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              className="w-full px-4 py-2 bg-neutral-950 border border-gold-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold-500 text-neutral-50"
              required
            >
              <option value="">Seleziona un servizio</option>
              <option value="manicure">Manicure</option>
              <option value="pedicure">Pedicure</option>
              <option value="facial">Trattamento viso</option>
              <option value="massage">Massaggio</option>
              <option value="waxing">Ceretta</option>
            </select>
          </div>

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-50 rounded-lg transition-colors"
            >
              Annulla
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-gold-500 hover:bg-gold-600 text-neutral-950 font-medium rounded-lg transition-colors"
            >
              Conferma
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function ConfirmationModal({ isOpen, onClose, bookingDetails }: ConfirmationModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="bg-neutral-900 rounded-xl p-6 max-w-md w-full mx-4 text-center border border-gold-500/50">
        <div className="w-16 h-16 bg-gold-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className={`${playfair.className} text-2xl font-bold text-gold-500 mb-2`}>
          Prenotazione confermata!
        </h3>
        <p className="text-neutral-400 mb-6">
          La tua prenotazione è stata registrata con successo.
        </p>
        <div className="bg-neutral-950 rounded-lg p-4 mb-6 text-left border border-gold-500/20">
          <p className="mb-1 text-neutral-400">
            <strong className="text-gold-500">Nome:</strong>{' '}
            <span className="text-neutral-50">{bookingDetails.name}</span>
          </p>
          <p className="mb-1 text-neutral-400">
            <strong className="text-gold-500">Telefono:</strong>{' '}
            <span className="text-neutral-50">{bookingDetails.phone}</span>
          </p>
          <p className="mb-1 text-neutral-400">
            <strong className="text-gold-500">Servizio:</strong>{' '}
            <span className="text-neutral-50">{bookingDetails.service}</span>
          </p>
          <p className="mb-1 text-neutral-400">
            <strong className="text-gold-500">Data:</strong>{' '}
            <span className="text-neutral-50">{formatDate(bookingDetails.date)}</span>
          </p>
          <p className="text-neutral-400">
            <strong className="text-gold-500">Orario:</strong>{' '}
            <span className="text-neutral-50">{bookingDetails.time}</span>
          </p>
        </div>
        <button
          onClick={onClose}
          className="px-6 py-2 bg-gold-500 hover:bg-gold-600 text-neutral-950 font-medium rounded-lg transition-colors"
        >
          Chiudi
        </button>
      </div>
    </div>
  );
}

// Utility functions
function getDayName(day: number): string {
  const days = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'];
  return days[day];
}

function formatDate(dateString: string): string {
  const [year, month, day] = dateString.split('-').map(Number);
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString('it-IT', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
}

function generateTimeSlots(dateString: string): string[] {
  const [year, month, day] = dateString.split('-').map(Number);
  const date = new Date(year, month - 1, day);
  const dayOfWeek = date.getDay();
  const hours = businessHours[dayOfWeek];

  if (!hours) return [];

  const [startHour, startMinute] = hours.start.split(':').map(Number);
  const [endHour, endMinute] = hours.end.split(':').map(Number);
  const startMinutes = startHour * 60 + startMinute;
  const endMinutes = endHour * 60 + endMinute;
  const slotDuration = 30;

  const slots: string[] = [];
  for (let minutes = startMinutes; minutes < endMinutes; minutes += slotDuration) {
    const hour = Math.floor(minutes / 60);
    const minute = minutes % 60;
    slots.push(`${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`);
  }

  return slots;
} 