"use client"

import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
import { createPortal } from "react-dom";
import { use, useEffect, useRef, useState } from "react";
import Form from "../components/form/Form";
import styles from './styles.module.css'

const CalendatPage = () => {
    const calendarRef = useRef(null)
    const [openForm, setOpenForm] = useState(false)
    const [formData, setFormData] = useState({})
    const [dateInfo, setDateInfo] = useState('')
    const [width, setWidth] = useState<number | null>(null);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [])

    useEffect(() => {
        if (calendarRef && formData.hasOwnProperty('form')) {
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

    const handleCloseForm = () => setOpenForm(false)

    const adjustContentHeight = () => width < 500 ? width : width / 2

    return (
        <div className={styles.container}>
            <FullCalendar
                ref={calendarRef}
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                dateClick={handleCLick}
                contentHeight={adjustContentHeight()}
            />
            {openForm && createPortal(<Form handleFormSubmit={handleFormSubmit} dateInfo={dateInfo} handleCloseForm={handleCloseForm} />, document.body)}
        </div>
    )
}

export default CalendatPage