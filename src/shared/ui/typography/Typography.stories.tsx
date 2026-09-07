import type {Meta, StoryObj} from "@storybook/vue3-vite";
import {Typography} from "@/shared/ui";
import type {Variant} from "./types.ts";

const variants: Variant[] = [
  "title-lg", "title-md" , "body-lg" , "body-md" , "body-sm", "link" ,"caption"
]

const meta = {
  title: 'Typography',
  component: Typography,
  tags: ['autodocs'],
  argTypes: {
    tag: { control: 'select', options: ['div', 'span'] },
    variant: {
      control: { type: 'select' },
      defaultValue: 'title-lg',
      options: variants,
    },
  },
  args: {
    variant: 'title-lg'
  },
  render: (args) => {
    return {
      components: { Typography },
      setup() {
        return () => <Typography {...args}>Текст 1 2 3 4 5</Typography>
      },
    }
  },
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
}

export const AllVariants: Story = {
  args: {},
  render: (args) => {
    return {
      components: { Typography },
      setup() {
        return () => (
          <div style={{display: 'flex', flexDirection: 'column', gap: '2px'}}>
            {
              variants.map(variant => {
                return <Typography {...args} variant={variant}>Текст 1 2 3 4 5</Typography>
              })
            }
          </div>
        )
      },
    }
  },
}
