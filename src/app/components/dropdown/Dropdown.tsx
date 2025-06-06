// components/Dropdown.js
'use client';
import { useState, useRef, useEffect } from 'react';
import styles from './styles.module.css'
import messages from '@/app/utils/messages';

type Props = {
  menuItems: Record<string, string>[]
  size: string
  label: string
  handleSelection: (item: Record<string, string>) => void
}

const Dropdown = ({ menuItems, size = 'medium', handleSelection, label }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(menuItems[0])
  var title = label.charAt(0).toUpperCase() + label.substring(1)

  const handleSelected = (item: Record<string, string>) => {
    handleSelection(item)
    setSelected(item)
  }

  return (
    <div>
      <label htmlFor={label} className={styles.labelTitle}>{title}</label>
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