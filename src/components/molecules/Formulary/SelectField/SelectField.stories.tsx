import type { Meta, StoryObj } from "@storybook/react";

import SelectField from "./SelectField";

const meta = {
  title: "Components/Molecules/Formulary/SelectField",
  component: SelectField,
  tags: ["autodocs"],
  args: {
    label: "Pais",
    description: "Selecione uma opcao valida.",
    size: "md",
    disabled: false,
    invalid: false,
    fullWidth: false,
    placeholder: "Selecione um pais",
    options: [
      { label: "Brasil", value: "br" },
      { label: "Argentina", value: "ar" },
      { label: "Chile", value: "cl" },
    ],
  },
} satisfies Meta<typeof SelectField>;

type Story = StoryObj<typeof meta>;

const Default: Story = {};

const WithValue: Story = {
  args: {
    defaultValue: "br",
    label: "Pais de residencia",
  },
};

const Invalid: Story = {
  args: {
    invalid: true,
    errorMessage: "Selecione um pais para continuar.",
    label: "Pais",
  },
};

const Optional: Story = {
  args: {
    label: "Pais secundario",
    optional: true,
  },
};

export default meta;
export { Default, Invalid, Optional, WithValue };
