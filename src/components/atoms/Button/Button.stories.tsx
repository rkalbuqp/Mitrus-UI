import type { Meta, StoryObj } from "@storybook/react";

import Icon from "../Icon";
import Button from "./Button";

const meta = {
  title: "Atoms/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "Button",
    variant: "primary",
    size: "md",
    type: "button",
    disabled: false,
    loading: false,
    fullWidth: false,
    rounded: false,
    pressed: false,
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "outline", "ghost", "link", "danger", "success"],
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl", "icon"],
    },
    type: {
      control: "select",
      options: ["button", "submit", "reset"],
    },
    leftIcon: {
      control: false,
    },
    rightIcon: {
      control: false,
    },
    onClick: {
      action: "clicked",
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    children: "Link",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    children: "Delete",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    children: "Success",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button size="xs">Extra Small</Button>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">Extra Large</Button>
    </div>
  ),
};

export const Loading: Story = {
  args: {
    loading: true,
    children: "Loading",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled",
  },
};

export const WithIcons: Story = {
  args: {
    children: "Continue",
    leftIcon: <Icon name="arrow_back" />,
    rightIcon: <Icon name="arrow_forward" />,
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    children: "Full Width",
  },
  render: (args) => (
    <div className="w-80">
      <Button {...args} />
    </div>
  ),
};

export const Rounded: Story = {
  args: {
    rounded: true,
    children: "Rounded",
  },
};

export const Pressed: Story = {
  args: {
    pressed: true,
    children: "Pressed",
  },
};

export const IconOnly: Story = {
  args: {
    size: "icon",
    children: <span className="sr-only">Add item</span>,
    leftIcon: <Icon name="add" />,
    "aria-label": "Add item",
  },
};
