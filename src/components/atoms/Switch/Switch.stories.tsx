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


type Story = StoryObj<typeof meta>;

const Default: Story = {};

const Checked: Story = {
  args: {
    children: "Modo escuro",
    defaultChecked: true,
  },
};

const WithDescription: Story = {
  args: {
    children: "Notificações",
    description: "Recebe avisos importantes diretamente na interface.",
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

const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Switch size="sm">Small</Switch>
      <Switch size="md">Medium</Switch>
      <Switch size="lg">Large</Switch>
    </div>
  ),
};

export default meta;
export { Default, Checked, WithDescription, Disabled, Invalid, Sizes };
