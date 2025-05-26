// components/Dropdown.js
'use client';
import { useState, useRef, useEffect } from 'react';
import styles from './styles.module.css'
import messages from '@/app/utils/messages';

type Props = {
  menuItems: Record<string, string>[]
  size: string
  handleSelection: (item: Record<string, string>) => void
}

const Dropdown = ({ menuItems, size = 'medium', handleSelection }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(menuItems[0])


  const handleSelected = (item: Record<string, string>) => {
    handleSelection(item)
    setSelected(item)
  }

  return (
    <div>
      <label htmlFor='Habit' className={styles.labelTitle}>{messages.form.label}</label>
      <div className={`${styles.dropdownContainer} ${styles[size]}`} onClick={() => setIsOpen(!isOpen)}>
        <div className={styles.selectedItem}>
          <div style={{ backgroundColor: selected.color }}></div>
          {selected.name}
        </div>
        <div className={styles.triangle}></div>
        {isOpen &&
          <div className={styles.menuItemContainer}>
            {menuItems.map((item, index) => (
              <div
                onClick={() => handleSelected(item)}
                className={styles.item}
                key={index}
              >
                <div>
                  <div className={styles.itemColor} style={{ backgroundColor: item.color }}></div>
                  {item.name}
                </div>
              </div>
            ))}
          </div>
        }
      </div>
    </div>
  );
}

export default Dropdown