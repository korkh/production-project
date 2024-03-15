import StoreDecorator from "@/shared/config/storybook/StoreDecorator/StoreDecorator";
import type { Meta, StoryObj } from "@storybook/react";

import { Code } from "./Code";

const meta = {
  title: "shared/Code",
  component: Code,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  args: {},
  argTypes: {},
  decorators: [
    (Story) => (
      <StoreDecorator state={{}}>
        <Story />
      </StoreDecorator>
    ),
  ],
} satisfies Meta<typeof Code>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    text:
      "export default {\n" +
      "    title: 'shared/Code',\n" +
      "    component: Code,\n" +
      "    argTypes: {\n" +
      "        backgroundColor: { control: 'color' },\n" +
      "    },\n" +
      "} as ComponentMeta<typeof Code>;\n" +
      "\n" +
      "const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;\n" +
      "\n" +
      "export const Normal = Template.bind({});",
  },
};

export const Done: Story = {
  args: {
    text:
      "export default {\n" +
      "    title: 'shared/Code',\n" +
      "    component: Code,\n" +
      "    argTypes: {\n" +
      "        backgroundColor: { control: 'color' },\n" +
      "    },\n" +
      "} as ComponentMeta<typeof Code>;\n" +
      "\n" +
      "const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;\n" +
      "\n" +
      "export const Normal = Template.bind({});",
    copied: true,
  },
};
