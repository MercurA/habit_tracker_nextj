import type { Meta, StoryObj } from '@storybook/react';
import Input from '../app/components/input/Input'

const meta = {
    component: Input,
    title: 'Input',
    tags: ['autodocs'],
    args: {
        ...{}
    }
} satisfies Meta<typeof Input>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        label: 'Name',
        type: 'name',
        inputType: 'text',
        responsive: 'md:w-48'
    }
}