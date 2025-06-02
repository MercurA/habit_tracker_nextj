import { FormCollection, FormInfo } from "./types";

export const formatData = (formData: FormInfo): FormCollection[] => {
    const uuid = `env-${Date.now()}`
    let formatedData = [{
        id: uuid,
        date: formData.date,
        habit: formData.form.habit,
        mood: formData.form.mood
    }]
    const collection = []
    collection.push(...formatedData)
    return collection
}

