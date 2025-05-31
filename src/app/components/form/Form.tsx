"use client"
import React, { useEffect, useState } from 'react';
import styles from './styles.module.css'
import messages from '@/app/utils/messages';
import Button from '../button/Button';
import Dropdown from '../dropdown/Dropdown';
import { HABITS, MOODS } from './misc';
import TextArea from '../input/TextArea';

type Props = {
    handleFormSubmit: (selection: FormSelection | {}) => void
    handleCloseForm: () => void
    dateInfo: string
}

type FormSelection = {
    habit: Record<string, string>
    moods: Record<string, string>
}

const errorMessages = {
    name: 'Name must containe only letters',
    email: 'Emails should have this format: name@[gmail].[com]'
}

const Form = ({ handleFormSubmit, dateInfo, handleCloseForm }: Props) => {
    const [formSelections, setFormSelection] = useState<FormSelection | {}>({})
    const [ctaDisabled, setCtaDIsabled] = useState(true)

    useEffect(() => {
        if (formSelections.hasOwnProperty('mood') && formSelections.hasOwnProperty('habit')) {
            setCtaDIsabled(false)
        } else {
            setCtaDIsabled(true)
        }
    }, [formSelections])

    const handleHabitSelection = (item: Record<string, string>) => {
        setFormSelection({
            ...formSelections,
            habit: item
        })
    }

    const handleMoodSelection = (item: Record<string, string>) => {
        setFormSelection({
            ...formSelections,
            mood: item
        })
    }

    const handleSubmit = () => {
        return handleFormSubmit(formSelections)
    }

    const handleTextInput = (text: string) => {
        setFormSelection({
            ...formSelections,
            text
        })
    }

    return (
        <div className={styles.backdrop}>
            <div className={styles.container} >
                <div className={styles.closeIcon} onClick={handleCloseForm}></div>
                <div className={styles.formContainer}>
                    <div className={styles.formTitle}>{messages.form.title}</div>
                    <div className={styles.dateText}>
                        <div>Date:</div>
                        <div>{dateInfo}</div>
                    </div>
                    <Dropdown menuItems={HABITS} size='medium' label={'habit'} handleSelection={handleHabitSelection} />
                    <Dropdown menuItems={MOODS} size='medium' label={'mood'} handleSelection={handleMoodSelection} />
                    <TextArea handleTextInput={handleTextInput} label={"thought"} size={'medium'} />
                    <Button name={messages.form.cta} size='medium' handleClick={handleSubmit} disabled={ctaDisabled} />
                </div>
            </div>
        </div>
    )
}

export default Form;