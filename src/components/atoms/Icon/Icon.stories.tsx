import type { Meta, StoryObj } from "@storybook/react";

import Icon from "./Icon";

const meta = {
  title: "Atoms/Icon",
  component: Icon,
  tags: ["autodocs"],
  args: {
    name: "home",
    variant: "outlined",
    size: "md",
    filled: false,
    decorative: true,
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["outlined", "rounded", "sharp"],
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    filled: {
      control: "boolean",
    },
    decorative: {
      control: "boolean",
    },
  },
} satisfies Meta<typeof Icon>;


type Story = StoryObj<typeof meta>;

const Default: Story = {};

const Rounded: Story = {
  args: {
    name: "favorite",
    variant: "rounded",
  },
};

const Sharp: Story = {
  args: {
    name: "bolt",
    variant: "sharp",
  },
};

const Filled: Story = {
  args: {
    name: "star",
    filled: true,
  },
};

const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4 text-content-neutral-primary">
      <Icon name="home" size="xs" />
      <Icon name="home" size="sm" />
      <Icon name="home" size="md" />
      <Icon name="home" size="lg" />
      <Icon name="home" size="xl" />
    </div>
  ),
};

const CommonIcons: Story = {
  render: () => (
    <div className="flex items-center gap-4 text-content-neutral-primary">
      <Icon name="arrow_back" />
      <Icon name="arrow_forward" />
      <Icon name="add" />
      <Icon name="close" />
      <Icon name="search" />
      <Icon name="menu" />
    </div>
  ),
};

export default meta;
export { Default, Rounded, Sharp, Filled, Sizes, CommonIcons };
