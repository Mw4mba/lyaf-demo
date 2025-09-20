import React, { useState } from 'react';
import { Calendar } from 'lucide-react';

interface ScheduleTourProps {
    // Optionally, you can pass property info here
}

const ScheduleTour: React.FC<ScheduleTourProps> = () => {
        const [selectedDate, setSelectedDate] = useState<Date | null>(null);
        const [selectedTime, setSelectedTime] = useState<string>('');
        const [isConfirmed, setIsConfirmed] = useState<boolean>(false);

    // Generate the next 7 days starting from a fixed date for consistency.
    const tourDates = Array.from({ length: 7 }, (_, i) => {
        const date = new Date('2025-09-21T00:00:00');
        date.setDate(date.getDate() + i);
        return date;
    });

    const timeSlots = ['09:00', '11:00', '14:00', '16:00'];

    const handleSchedule = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (selectedDate && selectedTime) {
            setIsConfirmed(true);
        }
    };

    if (isConfirmed) {
        return (
            <div className="bg-[#1240a0] p-6 md:p-8 rounded-xl border text-center">
                 <h2 className="text-2xl font-bold mb-4 flex items-center justify-center text-white"><Calendar className="mr-3 text-[#ff9138]" />Tour Confirmed!</h2>
                 <div className="bg-white/10 p-6 rounded-lg">
                    <p className="text-lg font-semibold text-white">Your tour has been scheduled.</p>
                    <p className="text-white/80 mt-2">
                        An agent will meet you at the property on <span className="font-bold">{selectedDate ? selectedDate.toLocaleDateString('en-ZA', { weekday: 'long', day: 'numeric', month: 'long' }) : ''}</span> at <span className="font-bold">{selectedTime}</span>.
                    </p>
                 </div>
            </div>
        )
    }

    return (
        <div className="bg-[#1240a0] p-6 md:p-8 rounded-xl border">
            <h2 className="text-2xl font-bold mb-4 flex items-center text-white"><Calendar className="mr-3 text-[#ff9138]" />Schedule a Tour</h2>
            <form onSubmit={handleSchedule}>
                <div className="mb-6">
                    <h3 className="font-semibold text-lg mb-3 text-white">1. Select a Date</h3>
                    <div className="grid grid-cols-4 md:grid-cols-7 gap-2">
                        {tourDates.map(date => (
                            <button 
                                key={date.toISOString()} 
                                type="button"
                                onClick={() => setSelectedDate(date)}
                                className={`p-2 border rounded-lg text-center transition-colors ${selectedDate?.toISOString() === date.toISOString() ? 'bg-[#ff9138] text-white border-[#ff9138]' : 'bg-white/10 text-white hover:bg-white/20 border-white/30'}`}
                            >
                                <div className="text-xs font-bold">{date.toLocaleDateString('en-ZA', { weekday: 'short' })}</div>
                                <div className="text-xl font-semibold">{date.getDate()}</div>
                            </button>
                        ))}
                    </div>
                </div>
                {selectedDate && (
                    <div className="mb-6">
                         <h3 className="font-semibold text-lg mb-3 text-white">2. Select a Time</h3>
                         <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                             {timeSlots.map(time => (
                                 <button
                                    key={time}
                                    type="button"
                                    onClick={() => setSelectedTime(time)}
                                    className={`p-3 border rounded-lg transition-colors ${selectedTime === time ? 'bg-[#ff9138] text-white border-[#ff9138]' : 'bg-white/10 text-white hover:bg-white/20 border-white/30'}`}
                                 >
                                     {time}
                                 </button>
                             ))}
                         </div>
                    </div>
                )}
                <button 
                    type="submit" 
                    disabled={!selectedDate || !selectedTime}
                    className="w-full bg-[#ff9138] text-white p-3 rounded-lg hover:bg-white hover:text-[#1240a0] transition-colors font-bold disabled:bg-white/20 disabled:text-white/50 disabled:cursor-not-allowed"
                >
                    Confirm Tour
                </button>
            </form>
        </div>
    );
};

export default ScheduleTour;