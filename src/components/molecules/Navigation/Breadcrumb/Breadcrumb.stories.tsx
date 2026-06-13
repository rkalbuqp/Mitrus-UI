import type { Meta, StoryObj } from "@storybook/react";

import Breadcrumb from "./Breadcrumb";

const meta = {
  title: "Components/Molecules/Navigation/Breadcrumb",
  component: Breadcrumb,
  tags: ["autodocs"],
  args: {
    items: [
      { label: "Home", href: "/" },
      { label: "Produtos", href: "/produtos" },
      { label: "Notebooks", href: "/produtos/notebooks" },
      { label: "Notebook Gamer", current: true },
    ],
  },
} satisfies Meta<typeof Breadcrumb>;

type Story = StoryObj<typeof meta>;

const Default: Story = {};

const WithoutExplicitCurrent: Story = {
  args: {
    items: [
      { label: "Home", href: "/" },
      { label: "Blog", href: "/blog" },
      { label: "Artigo" },
    ],
  },
};

const CustomAriaLabel: Story = {
  args: {
    ariaLabel: "Navegacao hierarquica",
  },
};

export default meta;
export { CustomAriaLabel, Default, WithoutExplicitCurrent };
