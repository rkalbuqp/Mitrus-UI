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


type Story = StoryObj<typeof meta>;

const Default: Story = {};

const Invalid: Story = {
  args: {
    invalid: true,
    errorMessage: "A senha precisa ter ao menos 8 caracteres.",
  },
};

const Optional: Story = {
  args: {
    label: "Senha secundária",
    optional: true,
  },
};

export default meta;
export { Default, Invalid, Optional };
