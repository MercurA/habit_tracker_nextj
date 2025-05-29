"use client"

import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
import { createPortal } from "react-dom";
import { useEffect, useRef, useState } from "react";
import Form from "../components/form/Form";

const CalendatPage = () => {
    const calendarRef = useRef(null)
    const [openForm, setOpenForm] = useState(false)
    const [formData, setFormData] = useState({})
    const [dateInfo, setDateInfo] = useState('')

    useEffect(() => {
        if (calendarRef && formData.hasOwnProperty('form')) {
            console.log(1)
            const calendarApi = calendarRef?.current?.getApi();
            calendarApi.addEvent({
                title: formData?.form?.mood?.name,
                start: formData?.date,
                allDay: formData.allDay,
                color: formData?.form?.mood?.color,
            });
            setFormData({})
        }
    }, [formData])

    const handleCLick = (info: DateClickArg) => {
        console.log(info)
        setDateInfo(info.dateStr)
        setFormData({
            ...formData,
            date: info.dateStr,
            allDay: info.allDay
        })
        setOpenForm(true)
    }

    const handleFormSubmit = (formSelections: any) => {
        console.log(formSelections)
        setFormData({
            ...formData,
            form: formSelections
        })
        setOpenForm(false)
    }

    return (
        <div>
            <FullCalendar
                ref={calendarRef}
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                dateClick={handleCLick}
            />
            {openForm && createPortal(<Form handleFormSubmit={handleFormSubmit} dateInfo={dateInfo} />, document.body)}
        </div>
    )
}

export default CalendatPage