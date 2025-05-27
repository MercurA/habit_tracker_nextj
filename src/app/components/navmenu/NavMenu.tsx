"use client"
import Link from 'next/link'
import styles from './styles.module.css'
import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

const NAV_ITEMS: Record<string, string>[] = [
    {
        name: 'Calendar',
        path: '/calendar'
    },
    {
        name: 'Charts',
        path: '/charts'
    },
    {
        name: 'Tables',
        path: '/tables'
    },
]

const NavMenu = () => {
    const path = usePathname()
    const [currentPage, setCurrentPage] = useState('')

    useEffect(() => {
        if (path) {
            setCurrentPage(path)
        }
    }, [])

    useEffect(() => {
        if (path !== currentPage) {
            setCurrentPage(path)
        }
    }, [path])

    return (
        <div className={styles.container}>
            {NAV_ITEMS.map((item, index) => (
                <Link
                    key={index}
                    href={item.path}
                    data-path={item.path}
                    className={`${styles.item} ${item.path === currentPage && styles.underline}`}
                >
                    {item.name}
                </Link>
            ))}
        </div>
    )
}

export default NavMenu 