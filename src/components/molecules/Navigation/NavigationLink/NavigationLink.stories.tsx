import type { Meta, StoryObj } from "@storybook/react";

import NavigationLink from "./NavigationLink";

const meta = {
  title: "Components/Molecules/Navigation/NavigationLink",
  component: NavigationLink,
  tags: ["autodocs"],
  args: {
    label: "Dashboard",
    href: "/dashboard",
    iconName: "dashboard",
    current: false,
    disabled: false,
  },
} satisfies Meta<typeof NavigationLink>;

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
    label: "Abrir painel",
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
