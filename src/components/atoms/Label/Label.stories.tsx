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

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Required: Story = {
  args: {
    children: "Senha",
    required: true,
  },
};

export const Optional: Story = {
  args: {
    children: "Complemento",
    optional: true,
  },
};

export const Disabled: Story = {
  args: {
    children: "Campo desabilitado",
    disabled: true,
  },
};

export const SrOnly: Story = {
  args: {
    children: "Busca",
    srOnly: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Label size="sm">Small</Label>
      <Label size="md">Medium</Label>
      <Label size="lg">Large</Label>
    </div>
  ),
};
