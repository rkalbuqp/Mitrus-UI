import type { Meta, StoryObj } from "@storybook/react";

import UserBadge from "../UserBadge";
import UserInfo from "./UserInfo";

const meta = {
  title: "Components/Molecules/Users/UserInfo",
  component: UserInfo,
  tags: ["autodocs"],
  args: {
    name: "Ana Souza",
    handle: "@anasouza",
    description: "Product Designer focada em interfaces acessiveis e sistemas de design.",
    meta: "Sao Paulo, Brasil",
    badge: <UserBadge label="Verificada" variant="success" />,
  },
  argTypes: {
    badge: {
      control: false,
    },
  },
} satisfies Meta<typeof UserInfo>;

type Story = StoryObj<typeof meta>;

const Default: Story = {};

const WithLink: Story = {
  args: {
    nameHref: "/perfil/ana-souza",
  },
};

export default meta;
export { Default, WithLink };
