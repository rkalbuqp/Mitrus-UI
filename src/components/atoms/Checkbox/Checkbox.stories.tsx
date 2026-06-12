import type { Meta, StoryObj } from "@storybook/react";

import Checkbox from "./Checkbox";

const meta = {
  title: "Components/Atoms/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  args: {
    children: "Aceito os termos",
    size: "md",
    disabled: false,
    invalid: false,
    indeterminate: false,
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    onChange: {
      action: "changed",
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Checked: Story = {
  args: {
    children: "Receber comunicados",
    defaultChecked: true,
  },
};

export const WithDescription: Story = {
  args: {
    children: "Newsletter",
    description: "Quero receber atualizações e novidades no meu e-mail.",
  },
};

export const Disabled: Story = {
  args: {
    children: "Opção desabilitada",
    disabled: true,
  },
};

export const Invalid: Story = {
  args: {
    children: "Campo obrigatório",
    invalid: true,
  },
};

export const Indeterminate: Story = {
  args: {
    children: "Selecionar grupo",
    indeterminate: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Checkbox size="sm">Small</Checkbox>
      <Checkbox size="md">Medium</Checkbox>
      <Checkbox size="lg">Large</Checkbox>
    </div>
  ),
};
