export type FormInfo = {
    allDay: boolean
    date: string
    form: {
        habit: Record<string, string>
        mood: Record<string, string>
    }
}

export type FormCollection = {
    id: string
    date: string
    habit: {
        name: string,
        color: string
    }
    mood: {
        name: string,
        color: string
    }
}