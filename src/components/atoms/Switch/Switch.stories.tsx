import type { Meta, StoryObj } from "@storybook/react";

import Switch from "./Switch";

const meta = {
  title: "Components/Atoms/Switch",
  component: Switch,
  tags: ["autodocs"],
  args: {
    children: "Ativar opção",
    size: "md",
    disabled: false,
    invalid: false,
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
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Checked: Story = {
  args: {
    children: "Modo escuro",
    defaultChecked: true,
  },
};

export const WithDescription: Story = {
  args: {
    children: "Notificações",
    description: "Recebe avisos importantes diretamente na interface.",
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

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Switch size="sm">Small</Switch>
      <Switch size="md">Medium</Switch>
      <Switch size="lg">Large</Switch>
    </div>
  ),
};
