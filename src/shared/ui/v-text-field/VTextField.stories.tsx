import type {Meta, StoryObj} from "@storybook/vue3-vite";
import {VTextField} from "@/shared/ui";





const meta = {
  title: 'VTextField',
  component: VTextField,
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
    },

    type: {
      control: { type: 'select' },
      defaultValue: 'text',
      options: ['text', 'password'],
    },
  },
  args: {
    type: 'text',
    placeholder: 'placeholder'
  },

} satisfies Meta<typeof VTextField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
}


