import type { Meta, StoryObj } from "@storybook/react";

import Icon from "../Icon";
import Avatar from "./Avatar";

const meta = {
  title: "Atoms/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  args: {
    name: "Maria Silva",
    size: "md",
    shape: "circle",
    bordered: false,
  },
  argTypes: {
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl", "2xl"],
    },
    shape: {
      control: "select",
      options: ["circle", "rounded", "square"],
    },
    status: {
      control: "select",
      options: ["online", "away", "busy", "offline"],
    },
    fallback: {
      control: false,
    },
    icon: {
      control: false,
    },
    imgProps: {
      control: false,
    },
  },
} satisfies Meta<typeof Avatar>;


type Story = StoryObj<typeof meta>;

const Default: Story = {};

const WithImage: Story = {
  args: {
    src: "https://i.pravatar.cc/160?img=12",
    alt: "Maria Silva",
    name: "Maria Silva",
  },
};

const WithInitials: Story = {
  args: {
    name: "Ana Costa",
  },
};

const WithCustomFallback: Story = {
  args: {
    fallback: <span>AC</span>,
  },
};

const WithIcon: Story = {
  args: {
    icon: <Icon name="person" filled />,
  },
};

const WithStatus: Story = {
  args: {
    name: "Pedro Lima",
    status: "online",
  },
};

const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Avatar name="Ana Costa" size="xs" />
      <Avatar name="Ana Costa" size="sm" />
      <Avatar name="Ana Costa" size="md" />
      <Avatar name="Ana Costa" size="lg" />
      <Avatar name="Ana Costa" size="xl" />
      <Avatar name="Ana Costa" size="2xl" />
    </div>
  ),
};

const Shapes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar name="Ana Costa" shape="circle" />
      <Avatar name="Ana Costa" shape="rounded" />
      <Avatar name="Ana Costa" shape="square" />
    </div>
  ),
};

export default meta;
export { Default, WithImage, WithInitials, WithCustomFallback, WithIcon, WithStatus, Sizes, Shapes };
