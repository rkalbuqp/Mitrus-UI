import type { Meta, StoryObj } from "@storybook/react";

import PasswordField from "./PasswordField";

const meta = {
  title: "Components/Molecules/Formulary/PasswordField",
  component: PasswordField,
  tags: ["autodocs"],
  args: {
    label: "Senha",
    description: "Use ao menos 8 caracteres.",
    placeholder: "Digite sua senha",
    size: "md",
    disabled: false,
    invalid: false,
    fullWidth: false,
  },
} satisfies Meta<typeof PasswordField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Invalid: Story = {
  args: {
    invalid: true,
    errorMessage: "A senha precisa ter ao menos 8 caracteres.",
  },
};

export const Optional: Story = {
  args: {
    label: "Senha secundária",
    optional: true,
  },
};
