import type { Meta, StoryObj } from "@storybook/react";

import UserAvatar from "./UserAvatar";

const meta = {
  title: "Components/Molecules/Users/UserAvatar",
  component: UserAvatar,
  tags: ["autodocs"],
  args: {
    avatarProps: {
      name: "Ana Souza",
      src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
      size: "lg",
      status: "online",
    },
  },
  argTypes: {
    avatarProps: {
      control: false,
    },
  },
} satisfies Meta<typeof UserAvatar>;

type Story = StoryObj<typeof meta>;

const Default: Story = {};

const WithCaption: Story = {
  args: {
    caption: "Disponivel para novos projetos.",
  },
};

export default meta;
export { Default, WithCaption };
