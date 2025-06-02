import { SET_CALENDAR_DATA } from "../state/actions";
import { FormInfo } from "./types";
import { formatData } from "./utils";

export const postEvent = async (formData: FormInfo, dispatch) => {
    try {
        const res = await fetch('/api/entries', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: { 'Content-Type': 'application/json' }
        });
        if (!res.ok) throw new Error('Failed to fetch entries')
        const data = await res.json()
        dispatch({ type: SET_CALENDAR_DATA, payload: [data] })
    } catch (error) {
        console.error('Error:', error)
    }
}

export const getEvents = async (dispatch) => {
    try {
        const res = await fetch('/api/entries')
        if (!res.ok) throw new Error('Failed to fetch entries')
        const data = await res.json()
        dispatch({ type: SET_CALENDAR_DATA, payload: data })
    } catch (error) {
        console.error('Error:', error)
    }
}