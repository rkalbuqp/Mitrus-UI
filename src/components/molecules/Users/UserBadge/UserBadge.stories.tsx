import type { Meta, StoryObj } from "@storybook/react";

import UserBadge from "./UserBadge";

const meta = {
  title: "Components/Molecules/Users/UserBadge",
  component: UserBadge,
  tags: ["autodocs"],
  args: {
    label: "Verificado",
    variant: "success",
    appearance: "subtle",
    dot: true,
    iconName: "verified",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["neutral", "accent", "success", "warning", "critical"],
    },
    appearance: {
      control: "select",
      options: ["subtle", "solid", "outline"],
    },
  },
} satisfies Meta<typeof UserBadge>;

type Story = StoryObj<typeof meta>;

const Default: Story = {};

const AsLink: Story = {
  args: {
    href: "/perfil/ana-souza",
    label: "Perfil publico",
    iconName: "person",
    dot: false,
    variant: "accent",
  },
};

export default meta;
export { AsLink, Default };
