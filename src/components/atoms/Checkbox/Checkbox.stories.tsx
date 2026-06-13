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


type Story = StoryObj<typeof meta>;

const Default: Story = {};

const Checked: Story = {
  args: {
    children: "Receber comunicados",
    defaultChecked: true,
  },
};

const WithDescription: Story = {
  args: {
    children: "Newsletter",
    description: "Quero receber atualizações e novidades no meu e-mail.",
  },
};

const Disabled: Story = {
  args: {
    children: "Opção desabilitada",
    disabled: true,
  },
};

const Invalid: Story = {
  args: {
    children: "Campo obrigatório",
    invalid: true,
  },
};

const Indeterminate: Story = {
  args: {
    children: "Selecionar grupo",
    indeterminate: true,
  },
};

const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Checkbox size="sm">Small</Checkbox>
      <Checkbox size="md">Medium</Checkbox>
      <Checkbox size="lg">Large</Checkbox>
    </div>
  ),
};

export default meta;
export { Default, Checked, WithDescription, Disabled, Invalid, Indeterminate, Sizes };
