import type { Meta, StoryObj } from "@storybook/react";

import Label from "./Label";

const meta = {
  title: "Components/Atoms/Label",
  component: Label,
  tags: ["autodocs"],
  args: {
    children: "Label",
    size: "md",
    disabled: false,
    srOnly: false,
    required: false,
    optional: false,
    htmlFor: "field-id",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
} satisfies Meta<typeof Label>;


type Story = StoryObj<typeof meta>;

const Default: Story = {};

const Required: Story = {
  args: {
    children: "Senha",
    required: true,
  },
};

const Optional: Story = {
  args: {
    children: "Complemento",
    optional: true,
  },
};

const Disabled: Story = {
  args: {
    children: "Campo desabilitado",
    disabled: true,
  },
};

const SrOnly: Story = {
  args: {
    children: "Busca",
    srOnly: true,
  },
};

const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Label size="sm">Small</Label>
      <Label size="md">Medium</Label>
      <Label size="lg">Large</Label>
    </div>
  ),
};

export default meta;
export { Default, Required, Optional, Disabled, SrOnly, Sizes };
