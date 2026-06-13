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

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithValue: Story = {
  args: {
    defaultValue: "12345678901",
  },
};

export const Invalid: Story = {
  args: {
    invalid: true,
    errorMessage: "Informe um CPF válido.",
  },
};

export const Optional: Story = {
  args: {
    optional: true,
  },
};
