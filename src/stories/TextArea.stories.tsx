import type { Meta, StoryObj } from '@storybook/react';
import TextArea from '../app/components/input/TextArea'

const meta = {
    component: TextArea,
    title: 'TextArea',
    tags: ['autodocs'],
    args: {
        ...{}
    }
} satisfies Meta<typeof TextArea>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        label: 'Name',
        size: 'medium',
        handleTextInput(e) {
            return e.target.value
        },
    }
}