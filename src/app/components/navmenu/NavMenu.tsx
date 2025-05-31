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
    const [open, setOpen] = useState(false)
    const [animating, setAnimating] = useState(false)

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

    const handleOpen = () => {
        if (open) {
            setAnimating(true);
            setOpen(false);
            setTimeout(() => {
                setAnimating(false);
            }, 400);
        } else {
            setOpen(true);
        }
    }

    const handleCloseMenu = () => {
        setAnimating(true);
        setOpen(false);
        setTimeout(() => {
            setAnimating(false);
        }, 400);
    }

    return (
        <div>
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
            <div className={styles.mobContainer}>
                <div className={styles.menuBurger} onClick={handleOpen}>
                    <span className={styles.menuLine}></span>
                    <span className={styles.menuLine}></span>
                    <span className={styles.menuLine}></span>
                </div>
                <div className={styles.title}>{currentPage.charAt(1).toUpperCase() + currentPage.substring(2)}</div>
                {(open || animating) &&
                    <div className={`${styles.menu} ${open ? styles.slideIn : styles.slideOut}`}>
                        {NAV_ITEMS.map((item, index) => (
                            <Link
                                key={index}
                                href={item.path}
                                data-path={item.path}
                                className={`${styles.item} ${item.path === currentPage && styles.underline}`}
                                onClick={handleCloseMenu}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                }
            </div>
        </div>
    )
}

export default NavMenu 