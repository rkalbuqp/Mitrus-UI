import type { Meta, StoryObj } from "@storybook/react";

import TextArea from "./TextArea";

const meta = {
  title: "Components/Atoms/TextArea",
  component: TextArea,
  tags: ["autodocs"],
  args: {
    label: "Mensagem",
    description: "Escreva uma mensagem detalhada.",
    placeholder: "Digite aqui...",
    size: "md",
    invalid: false,
    fullWidth: false,
    disabled: false,
    resize: "vertical",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    resize: {
      control: "select",
      options: ["none", "vertical", "horizontal", "both"],
    },
    onChange: {
      action: "changed",
    },
  },
} satisfies Meta<typeof TextArea>;


type Story = StoryObj<typeof meta>;

const Default: Story = {};

const WithValue: Story = {
  args: {
    defaultValue: "Mensagem inicial do campo.",
  },
};

const Invalid: Story = {
  args: {
    invalid: true,
  },
};

const Disabled: Story = {
  args: {
    disabled: true,
  },
};

const FullWidth: Story = {
  args: {
    fullWidth: true,
  },
  render: (args) => (
    <div className="w-96">
      <TextArea {...args} />
    </div>
  ),
};

const ResizeModes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <TextArea label="No resize" placeholder="Sem resize" resize="none" />
      <TextArea label="Vertical resize" placeholder="Resize vertical" resize="vertical" />
      <TextArea label="Horizontal resize" placeholder="Resize horizontal" resize="horizontal" />
      <TextArea label="Both resize" placeholder="Resize livre" resize="both" />
    </div>
  ),
};

export default meta;
export { Default, WithValue, Invalid, Disabled, FullWidth, ResizeModes };
