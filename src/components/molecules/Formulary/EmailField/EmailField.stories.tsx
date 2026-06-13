import type { Meta, StoryObj } from "@storybook/react";

import EmailField from "./EmailField";

const meta = {
  title: "Components/Molecules/Formulary/EmailField",
  component: EmailField,
  tags: ["autodocs"],
  args: {
    label: "E-mail",
    description: "Informe um e-mail valido para contato com @ obrigatorio.",
    placeholder: "nome@empresa.com",
    size: "md",
    disabled: false,
    invalid: false,
    fullWidth: false,
  },
} satisfies Meta<typeof EmailField>;


type Story = StoryObj<typeof meta>;

const Default: Story = {};

const WithValue: Story = {
  args: {
    defaultValue: "contato@mitrus.com",
    label: "E-mail de contato",
  },
};

const Invalid: Story = {
  args: {
    invalid: true,
    errorMessage: "Informe um e-mail valido.",
    label: "E-mail corporativo",
  },
};

const Optional: Story = {
  args: {
    label: "E-mail secundario",
    optional: true,
  },
};

export default meta;
export { Default, WithValue, Invalid, Optional };
