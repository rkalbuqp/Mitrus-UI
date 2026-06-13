import type { Meta, StoryObj } from "@storybook/react";

import Icon from "../Icon";
import Link from "./Link";

const meta = {
  title: "Components/Atoms/Link",
  component: Link,
  tags: ["autodocs"],
  args: {
    href: "#",
    children: "Saiba mais",
    variant: "primary",
    size: "md",
    underline: "hover",
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "neutral", "subtle", "inverse"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    underline: {
      control: "select",
      options: ["none", "hover", "always"],
    },
    leftIcon: {
      control: false,
    },
    rightIcon: {
      control: false,
    },
  },
} satisfies Meta<typeof Link>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Neutral: Story = {
  args: {
    children: "Ver detalhes",
    variant: "neutral",
  },
};

export const WithIcons: Story = {
  args: {
    children: "Abrir recurso",
    leftIcon: <Icon name="link" />,
    rightIcon: <Icon name="open_in_new" />,
  },
};

export const UnderlineAlways: Story = {
  args: {
    children: "Ler documentação",
    underline: "always",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Link href="#" size="sm">
        Small
      </Link>
      <Link href="#" size="md">
        Medium
      </Link>
      <Link href="#" size="lg">
        Large
      </Link>
    </div>
  ),
};

export const Inverse: Story = {
  render: () => (
    <div className="inline-flex rounded-md bg-fill-inverse-default p-4">
      <Link href="#" variant="inverse">
        Link inverso
      </Link>
    </div>
  ),
};
