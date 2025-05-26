"use client"
import { ChangeEvent } from "react"
import styles from './styles.module.css'

type Props = {
    handleTextInput?: (e: ChangeEvent<HTMLTextAreaElement>) => void
    label: string
    size: string
}

const TextArea = ({ handleTextInput, label, size = 'medium' }: Props) => {
    var title = label.charAt(0).toUpperCase() + label.substring(1)

    return (
        <div className={`${styles.container} ${styles[size]}`}>
            <label htmlFor="thought" className={styles.labelTitle}>{title}</label>
            <textarea className={styles.textContainer} onChange={handleTextInput} cols={33} rows={5} maxLength={100} name={label} />
        </div>
    )
}

export default TextArea