import type { Meta, StoryObj } from '@storybook/react';
import Button from '../app/components/button/Button'

const meta = {
    component: Button,
    title: 'Button',
    tags: ['autodocs'],
    args: {
        ...{}
    }
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        name: 'Name',
        size: 'medium',
        handleClick() {
            return null
        },
    }
}