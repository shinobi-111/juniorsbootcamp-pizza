import type {Meta, StoryObj} from "@storybook/vue3-vite";
import {VTypography} from "@/shared/ui";
import type {Variant} from "./types.ts";

const variants: Variant[] = [
  "title-lg", "title-md" , "body-lg" , "body-md" , "body-sm", "link" ,"caption"
]

const meta = {
  title: 'Typography',
  component: VTypography,
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
      components: { Typography: VTypography },
      setup() {
        return () => <VTypography {...args}>Текст 1 2 3 4 5</VTypography>
      },
    }
  },
} satisfies Meta<typeof VTypography>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
}

export const AllVariants: Story = {
  args: {},
  render: (args) => {
    return {
      components: { Typography: VTypography },
      setup() {
        return () => (
          <div style={{display: 'flex', flexDirection: 'column', gap: '2px'}}>
            {
              variants.map(variant => {
                return <VTypography {...args} variant={variant}>Текст 1 2 3 4 5</VTypography>
              })
            }
          </div>
        )
      },
    }
  },
}
