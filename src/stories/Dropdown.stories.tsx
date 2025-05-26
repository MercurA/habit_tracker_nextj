import type { Meta, StoryObj } from '@storybook/react';
import Dropdown from '@/app/components/dropdown/Dropdown';

const MENU_ITEMS: Record<string, string>[] = [
    { name: 'Cravigs', color: '#ef476f' },
    { name: 'Takeouts', color: '#06d6a0' },
    { name: 'Sport', color: '#26547c' },
    { name: 'Gaming', color: '#ffd166' },
    { name: 'Gamedev', color: '#f26419' }
]

const meta = {
    component: Dropdown,
    title: 'Dropdown',
    tags: ['autodocs'],
    args: {
        ...{}
    }
} satisfies Meta<typeof Dropdown>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        menuItems: MENU_ITEMS,
        size: 'medium'
    }
}