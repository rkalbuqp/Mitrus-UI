import type { Meta, StoryObj } from "@storybook/react";

import { Button, Text } from "../../../atoms";
import CardFooter from "./CardFooter";

const meta = {
  title: "Components/Molecules/SimpleCards/CardFooter",
  component: CardFooter,
  tags: ["autodocs"],
  args: {
    divider: true,
    meta: (
      <>
        <Text as="span" size="sm" weight="medium">
          Entrega em ate 2 dias
        </Text>
        <Text as="span" size="sm" tone="secondary">
          Frete gratis para capitais
        </Text>
      </>
    ),
    supportingText: "Atualizado ha 5 minutos.",
    action: <Button size="sm">Comprar</Button>,
  },
  argTypes: {
    meta: {
      control: false,
    },
    action: {
      control: false,
    },
    children: {
      control: false,
    },
  },
} satisfies Meta<typeof CardFooter>;

type Story = StoryObj<typeof meta>;

const Default: Story = {};

const CustomChildren: Story = {
  args: {
    children: (
      <div className="flex items-center justify-between gap-3">
        <Text as="span" size="sm" tone="secondary">
          Disponivel em estoque
        </Text>
        <Button size="sm" variant="secondary">
          Comparar
        </Button>
      </div>
    ),
    meta: undefined,
    action: undefined,
    supportingText: undefined,
  },
};

export default meta;
export { Default, CustomChildren };
