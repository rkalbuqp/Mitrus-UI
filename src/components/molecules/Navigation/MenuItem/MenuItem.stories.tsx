import type { Meta, StoryObj } from "@storybook/react";

import MenuItem from "./MenuItem";

const meta = {
  title: "Components/Molecules/Navigation/MenuItem",
  component: MenuItem,
  tags: ["autodocs"],
  args: {
    label: "Dashboard",
    description: "Resumo geral da operacao",
    href: "/dashboard",
    iconName: "dashboard",
    current: false,
    disabled: false,
  },
} satisfies Meta<typeof MenuItem>;

type Story = StoryObj<typeof meta>;

const Default: Story = {};

const Current: Story = {
  args: {
    current: true,
  },
};

const Action: Story = {
  args: {
    href: undefined,
    label: "Atualizar dados",
  },
};

const Disabled: Story = {
  args: {
    disabled: true,
    href: undefined,
    label: "Configuracoes",
  },
};

export default meta;
export { Action, Current, Default, Disabled };
