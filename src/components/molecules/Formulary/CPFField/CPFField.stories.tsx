import type { Meta, StoryObj } from "@storybook/react";

import CPFField from "./CPFField";

const meta = {
  title: "Components/Molecules/Formulary/CPFField",
  component: CPFField,
  tags: ["autodocs"],
  args: {
    label: "CPF",
    description: "Digite o CPF com 11 números.",
    size: "md",
    disabled: false,
    invalid: false,
    fullWidth: false,
  },
} satisfies Meta<typeof CPFField>;


type Story = StoryObj<typeof meta>;

const Default: Story = {};

const WithValue: Story = {
  args: {
    defaultValue: "12345678901",
  },
};

const Invalid: Story = {
  args: {
    invalid: true,
    errorMessage: "Informe um CPF válido.",
  },
};

const Optional: Story = {
  args: {
    optional: true,
  },
};

export default meta;
export { Default, WithValue, Invalid, Optional };
