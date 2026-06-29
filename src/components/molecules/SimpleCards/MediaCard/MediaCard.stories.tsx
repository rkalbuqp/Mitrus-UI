import type { Meta, StoryObj } from "@storybook/react";

import { Badge, Button, Tag, Text } from "../../../atoms";
import CardActions from "../CardActions";
import CardFooter from "../CardFooter";
import ProductCardHeader from "../ProductCardHeader";
import MediaCard from "./MediaCard";

const meta = {
  title: "Components/Molecules/SimpleCards/MediaCard",
  component: MediaCard,
  tags: ["autodocs"],
  args: {
    title: "Caixa de Som Portatil",
    description: "Audio potente com resistencia a agua e bateria para o dia inteiro.",
    eyebrow: "Audio",
    badge: <Badge variant="success">Destaque</Badge>,
    mediaSrc: "https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=900&q=80",
    mediaAlt: "Caixa de som portatil preta sobre uma mesa",
    fullWidth: true,
    footer: (
      <CardFooter
        action={<Button size="sm">Comprar</Button>}
        divider
        meta={
          <Text as="span" size="sm" weight="medium">
            R$ 399,90
          </Text>
        }
        supportingText="Em ate 10x sem juros."
      />
    ),
    actions: (
      <CardActions>
        <Button variant="secondary">Favoritar</Button>
        <Button variant="outline">Comparar</Button>
      </CardActions>
    ),
  },
  argTypes: {
    badge: {
      control: false,
    },
    footer: {
      control: false,
    },
    actions: {
      control: false,
    },
    header: {
      control: false,
    },
    children: {
      control: false,
    },
    orientation: {
      control: "select",
      options: ["vertical", "horizontal"],
    },
  },
} satisfies Meta<typeof MediaCard>;

type Story = StoryObj<typeof meta>;

const Default: Story = {};

const WithComposedHeader: Story = {
  args: {
    header: (
      <ProductCardHeader
        badge={<Badge variant="success">Novo</Badge>}
        description="Compacta, potente e pronta para levar em viagens."
        eyebrow="Audio"
        subtitle="Bluetooth 5.3 com emparelhamento rapido."
        tag={<Tag label="Mais vendido" variant="accent" />}
        title="Caixa de Som Portatil"
      />
    ),
    description: undefined,
    eyebrow: undefined,
    badge: undefined,
  },
};

export default meta;
export { Default, WithComposedHeader };
