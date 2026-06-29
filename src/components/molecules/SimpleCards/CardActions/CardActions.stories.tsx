import type { Meta, StoryObj } from "@storybook/react";

import { Button, Link } from "../../../atoms";
import CardActions from "./CardActions";

const meta = {
  title: "Components/Molecules/SimpleCards/CardActions",
  component: CardActions,
  tags: ["autodocs"],
  args: {
    direction: "horizontal",
    align: "start",
    fullWidth: false,
    children: (
      <>
        <Button variant="primary">Comprar</Button>
        <Button variant="secondary">Salvar</Button>
        <Link href="/produto" variant="neutral">
          Ver detalhes
        </Link>
      </>
    ),
  },
  argTypes: {
    children: {
      control: false,
    },
    direction: {
      control: "select",
      options: ["horizontal", "vertical"],
    },
    align: {
      control: "select",
      options: ["start", "center", "end", "between"],
    },
  },
} satisfies Meta<typeof CardActions>;

type Story = StoryObj<typeof meta>;

const Default: Story = {};

const Vertical: Story = {
  args: {
    direction: "vertical",
    fullWidth: true,
    children: (
      <>
        <Button fullWidth variant="primary">
          Assinar
        </Button>
        <Button fullWidth variant="outline">
          Saiba mais
        </Button>
      </>
    ),
  },
};

export default meta;
export { Default, Vertical };
