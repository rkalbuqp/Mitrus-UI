import type { Meta, StoryObj } from "@storybook/react";

import PhoneField from "./PhoneField";

const meta = {
  title: "Components/Molecules/Formulary/PhoneField",
  component: PhoneField,
  tags: ["autodocs"],
  args: {
    label: "Telefone",
    description: "Selecione o país e informe o número.",
    size: "md",
    disabled: false,
    invalid: false,
    fullWidth: true,
    defaultCountry: "BR",
  },
} satisfies Meta<typeof PhoneField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Brazil: Story = {
  args: {
    defaultCountry: "BR",
    defaultValue: "11912345678",
  },
};

export const UnitedStates: Story = {
  args: {
    defaultCountry: "US",
    defaultValue: "2025550123",
  },
};

export const Invalid: Story = {
  args: {
    invalid: true,
    errorMessage: "Informe um telefone válido.",
  },
};
