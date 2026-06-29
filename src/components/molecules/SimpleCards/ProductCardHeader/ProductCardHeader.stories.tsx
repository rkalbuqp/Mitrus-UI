import type { Meta, StoryObj } from "@storybook/react";

import { Badge, Tag } from "../../../atoms";
import ProductCardHeader from "./ProductCardHeader";

const meta = {
  title: "Components/Molecules/SimpleCards/ProductCardHeader",
  component: ProductCardHeader,
  tags: ["autodocs"],
  args: {
    eyebrow: "Eletronicos",
    title: "Fone Bluetooth Pro",
    subtitle: "Cancelamento de ruido e bateria de longa duracao.",
    description: "Ideal para trabalho, musica e deslocamentos diarios.",
    badge: <Badge variant="success">Novo</Badge>,
    tag: <Tag label="Frete gratis" variant="accent" />,
  },
  argTypes: {
    badge: {
      control: false,
    },
    tag: {
      control: false,
    },
  },
} satisfies Meta<typeof ProductCardHeader>;

type Story = StoryObj<typeof meta>;

const Default: Story = {};

const WithLink: Story = {
  args: {
    titleHref: "/produtos/fone-bluetooth-pro",
  },
};

export default meta;
export { Default, WithLink };
