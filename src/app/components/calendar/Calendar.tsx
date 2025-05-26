'use client'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

export default function Calendar() {
  return (
    <FullCalendar
      plugins={[dayGridPlugin]}
      initialView="dayGridMonth"
      events={[
        { title: 'Meeting', date: '2025-04-28' },
        { title: 'Conference', date: '2025-04-29' }
      ]}
    />
  );
}
