"use client"
import { useState } from 'react'
import message from '../../utils/messages'

type Props = {
    label: string
    type: string
    inputType: string
    responsive?: string
}

const Input = ({ label, type, inputType='textarea', responsive='md:w-48' }: Props) => {
    const [error, setError] = useState<Record<string, string>>({})
    const [value, setValue] = useState({})

    const nameRegex = /^[\p{L}\p{M} \-']+$/u;
    
    const validateNameFiled = (name: string, type: string) => {
        if (name && !nameRegex.test(name)) {
            setError({
                [`${type}`]: 'No numbers allowed'
            })
        } else {
            setError({})
        }
       
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault()
        const { name, value } = event.target;
       
        if(type == name && validateNameFiled(value, name)) {
            setValue({
                [`${name}`]: value
            })
        }
    }

    const validationType = (inputType: string) => {
        return (
            <>
                <div className='text-red-500'>{message.form.errors.textarea}</div>
            </>
       )

    }

    return (
        <div className={`grid grid-cols-1 grid-rows-2 gap-1 ${responsive}`}>
              <>
                <label  htmlFor={type}>{label}</label>
                <input 
                    className='outline-gray-500 outline-solid outline-offset-2 outline-1 rounded-xs' 
                    type={inputType} 
                    id={type} 
                    name={type}
                    value={inputType ? "2018-07-22" : ''}
                    onChange={handleChange}
                />
                {validationType(inputType)}
                </>
        </div>
    )
}

export default Input