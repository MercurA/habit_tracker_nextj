"use client"
import styles from './styles.module.css'

const NAV_ITEMS = ['Calendar', 'Charts', 'Tables']

const NavMenu = () => {
    return (
        <div className={styles.container}>
            {NAV_ITEMS.map((item) => (<div className={styles.item}>{item}</div>))}
        </div>
    )
}

export default NavMenu 