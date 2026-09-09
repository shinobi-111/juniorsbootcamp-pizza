import type {Meta, StoryObj} from "@storybook/vue3-vite";
import {VButton} from "@/shared/ui/v-button";

const meta = {
  title: 'VButton',
  component: VButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      defaultValue: 'primary',
      options: ['primary', 'secondary'],
    },

  },
  args: {
    variant: 'primary',
  },
  render: (args) => {
    return {
      components: { VButton: VButton },
      setup() {
        return () => <VButton {...args}>Button</VButton>
      },
    }
  },
} satisfies Meta<typeof VButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'primary',
  }
}
