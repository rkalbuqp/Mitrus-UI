import type { Meta, StoryObj } from "@storybook/react";

import RadioGroup from "./RadioGroup";

const meta = {
  title: "Components/Molecules/Formulary/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
  args: {
    label: "Forma de pagamento",
    description: "Escolha apenas uma das opções abaixo.",
    orientation: "vertical",
    invalid: false,
    disabled: false,
    items: [
      {
        value: "pix",
        label: "Pix",
        description: "Pagamento instantaneo.",
      },
      {
        value: "card",
        label: "Cartao",
        description: "Credito ou debito.",
      },
      {
        value: "boleto",
        label: "Boleto",
      },
    ],
  },
} satisfies Meta<typeof RadioGroup>;

type Story = StoryObj<typeof meta>;

const Default: Story = {};

const WithValue: Story = {
  args: {
    defaultValue: "card",
  },
};

const Horizontal: Story = {
  args: {
    orientation: "horizontal",
  },
};

const Invalid: Story = {
  args: {
    invalid: true,
    errorMessage: "Selecione uma opção para continuar.",
  },
};

export default meta;
export { Default, WithValue, Horizontal, Invalid };
