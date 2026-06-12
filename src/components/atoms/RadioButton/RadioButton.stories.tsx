import type { Meta, StoryObj } from "@storybook/react";

import RadioButton from "./RadioButton";

const meta = {
  title: "Components/Atoms/RadioButton",
  component: RadioButton,
  tags: ["autodocs"],
  args: {
    children: "Opção",
    name: "radio-group",
    value: "opcao-1",
    size: "md",
    disabled: false,
    invalid: false,
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    onChange: {
      action: "changed",
    },
  },
} satisfies Meta<typeof RadioButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Checked: Story = {
  args: {
    children: "Selecionado",
    defaultChecked: true,
  },
};

export const WithDescription: Story = {
  args: {
    children: "Plano Pro",
    description: "Opção recomendada para times em crescimento.",
  },
};

export const Disabled: Story = {
  args: {
    children: "Desabilitado",
    disabled: true,
  },
};

export const Invalid: Story = {
  args: {
    children: "Campo obrigatório",
    invalid: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <RadioButton name="sizes" size="sm" value="sm">
        Small
      </RadioButton>
      <RadioButton name="sizes" size="md" value="md">
        Medium
      </RadioButton>
      <RadioButton name="sizes" size="lg" value="lg">
        Large
      </RadioButton>
    </div>
  ),
};

export const Group: Story = {
  render: () => (
    <fieldset className="flex flex-col gap-4">
      <legend className="text-100 font-medium text-content-neutral-primary">Escolha um plano</legend>
      <RadioButton defaultChecked description="Ideal para começar." name="plans" value="basic">
        Basic
      </RadioButton>
      <RadioButton description="Mais recursos para times." name="plans" value="pro">
        Pro
      </RadioButton>
      <RadioButton description="Solução para empresas grandes." name="plans" value="enterprise">
        Enterprise
      </RadioButton>
    </fieldset>
  ),
};
