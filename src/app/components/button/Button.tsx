"use client"
import styles from './styles.module.css'

type Props = {
    name: string
    size: string
    handleClick?: () => void
    disabled?: boolean
}

const Button = ({ name, size = 'medium', handleClick, disabled = false }: Props) => {
    return (
        <button className={`${styles.cta} ${styles[size]}`} onClick={handleClick} disabled={disabled}>{name}</button>
    )
}

export default Button