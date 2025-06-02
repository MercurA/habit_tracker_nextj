"use client"

import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
import { createPortal } from "react-dom";
import { use, useEffect, useRef, useState } from "react";
import Form from "../components/form/Form";
import styles from './styles.module.css'
import { CssDimValue } from "@fullcalendar/core/index.js";
import { formatData } from "./utils";
import { FormCollection, FormInfo } from "./types";
import { useAppContext } from "../context/AppContext";
import { SET_CALENDAR_DATA } from "../state/actions";

const CalendatPage = () => {
    const { state, dispatch } = useAppContext()

    const calendarRef = useRef(null)
    const [openForm, setOpenForm] = useState(false)
    const [formData, setFormData] = useState<FormInfo>({})
    const [dateInfo, setDateInfo] = useState('')
    const [width, setWidth] = useState<number>(0);

    useEffect(() => {
        if (state.calendarData.length) {
            const calendarApi = calendarRef?.current?.getApi();
            state.calendarData.map(data => {
                calendarApi.addEvent({
                    id: data.id,
                    title: data?.mood?.name,
                    start: data?.date,
                    color: data?.mood?.color,
                });
            })
        }

        const handleResize = () => setWidth(window.innerWidth);

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [])

    useEffect(() => {
        if (calendarRef && formData.hasOwnProperty('form')) {

            dispatch({ type: SET_CALENDAR_DATA, payload: formatData(formData) })
            setFormData({})
        }
    }, [formData])

    useEffect(() => {
        const calendarApi = calendarRef?.current?.getApi();
        state.calendarData.map(data => {
            if (!checkIfDateIsPresent(data.id)) {
                calendarApi.addEvent({
                    id: data.id,
                    title: data?.mood?.name,
                    start: data?.date,
                    color: data?.mood?.color,
                });
            }
        })
    }, [state.calendarData])

    const checkIfDateIsPresent = (id: string) => {
        const calendarApi = calendarRef.current?.getApi();
        const existingEvents = calendarApi.getEvents();
        return existingEvents.some((event) => {
            return event.id === id
        })
    }

    const handleCLick = (info: DateClickArg) => {
        setDateInfo(info.dateStr)
        setFormData({
            ...formData,
            date: info.dateStr,
            allDay: info.allDay
        })
        setOpenForm(true)
    }

    const handleFormSubmit = (formSelections: any) => {
        setFormData({
            ...formData,
            form: formSelections
        })
        setOpenForm(false)
    }

    const handleCloseForm = () => setOpenForm(false)

    const adjustContentHeight = (): CssDimValue | undefined => width < 500 ? width : width / 2

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