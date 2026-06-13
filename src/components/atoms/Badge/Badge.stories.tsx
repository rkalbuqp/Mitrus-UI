import type { Meta, StoryObj } from "@storybook/react";

import Icon from "../Icon";
import Badge from "./Badge";

const meta = {
  title: "Components/Atoms/Badge",
  component: Badge,
  tags: ["autodocs"],
  args: {
    children: "Badge",
    variant: "neutral",
    appearance: "subtle",
    size: "md",
    rounded: true,
    dot: false,
  },
  argTypes: {
    children: {
      control: "text",
    },
  },
} satisfies Meta<typeof Badge>;


type Story = StoryObj<typeof meta>;

const Default: Story = {};

const SolidSuccess: Story = {
  args: {
    children: "Ativo",
    variant: "success",
    appearance: "solid",
  },
};

const WithDot: Story = {
  args: {
    children: "Online",
    variant: "success",
    dot: true,
  },
};

const WithIcons: Story = {
  args: {
    children: "Novo",
    variant: "accent",
    appearance: "subtle",
    leftIcon: <Icon name="sell" size="sm" />,
    rightIcon: <Icon name="arrow_forward" size="sm" />,
  },
};

const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
  ),
};

const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Badge variant="neutral">Neutral</Badge>
      <Badge variant="accent">Accent</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="critical">Critical</Badge>
      <Badge appearance="solid" variant="inverse">
        Inverse
      </Badge>
    </div>
  ),
};

export default meta;
export { Default, SolidSuccess, WithDot, WithIcons, Sizes, Variants };
