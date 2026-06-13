import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "../../../atoms";
import FormField from "./FormField";

const meta = {
  title: "Components/Molecules/Formulary/FormField",
  component: FormField,
  tags: ["autodocs"],
  args: {
    label: "Nome completo",
    description: "Digite como aparece no cadastro.",
    size: "md",
    disabled: false,
    invalid: false,
    required: false,
  },
} satisfies Meta<typeof FormField>;


type Story = StoryObj<typeof meta>;

const Default: Story = {
  render: (args) => (
    <FormField {...args}>
      {(fieldProps) => <Input {...fieldProps} className="gap-0" inputClassName="" placeholder="Digite aqui" />}
    </FormField>
  ),
};

const Invalid: Story = {
  args: {
    invalid: true,
    errorMessage: "Este campo é obrigatório.",
  },
  render: (args) => (
    <FormField {...args}>
      {(fieldProps) => <Input {...fieldProps} className="gap-0" inputClassName="" placeholder="Digite aqui" />}
    </FormField>
  ),
};

const Optional: Story = {
  args: {
    optional: true,
    label: "Complemento",
  },
  render: (args) => (
    <FormField {...args}>
      {(fieldProps) => <Input {...fieldProps} className="gap-0" inputClassName="" placeholder="Opcional" />}
    </FormField>
  ),
};

export default meta;
export { Default, Invalid, Optional };
