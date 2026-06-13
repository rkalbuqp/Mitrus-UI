import type { Meta, StoryObj } from "@storybook/react";

import QuantitySelector from "./QuantitySelector";

const meta = {
  title: "Components/Molecules/Formulary/QuantitySelector",
  component: QuantitySelector,
  tags: ["autodocs"],
  args: {
    label: "Quantidade",
    description: "Use os controles para ajustar a quantidade.",
    size: "md",
    min: 1,
    step: 1,
    disabled: false,
    invalid: false,
    fullWidth: false,
  },
} satisfies Meta<typeof QuantitySelector>;

type Story = StoryObj<typeof meta>;

const Default: Story = {};

const WithValue: Story = {
  args: {
    defaultValue: 3,
  },
};

const WithLimit: Story = {
  args: {
    defaultValue: 2,
    max: 5,
  },
};

const Invalid: Story = {
  args: {
    invalid: true,
    errorMessage: "A quantidade máxima permitida para este item é 5.",
  },
};

export default meta;
export { Default, WithValue, WithLimit, Invalid };
