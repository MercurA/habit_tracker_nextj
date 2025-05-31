export type FormInfo = {
    allDay: boolean
    date: string
    form: {
        habit: Record<string, string>
        mood: Record<string, string>
    }
}

export type FormCollection = {
    date: string
    habit: Record<string, string>
    mood: Record<string, string>
}