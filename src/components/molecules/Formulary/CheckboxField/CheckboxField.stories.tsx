import type { Meta, StoryObj } from "@storybook/react";

import CheckboxField from "./CheckboxField";

const items = [
  { id: "analytics", label: "Analytics" },
  { id: "marketing", label: "Marketing" },
  { id: "updates", label: "Atualizacoes do produto", disabled: true },
];

const meta = {
  title: "Components/Molecules/Formulary/CheckboxField",
  component: CheckboxField,
  tags: ["autodocs"],
  args: {
    label: "Preferencias de notificacao",
    description: "Escolha quais categorias deseja acompanhar.",
    items,
    size: "md",
    disabled: false,
    invalid: false,
  },
} satisfies Meta<typeof CheckboxField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Indeterminate: Story = {
  args: {
    defaultValue: ["analytics"],
  },
};

export const AllChecked: Story = {
  args: {
    defaultValue: ["analytics", "marketing"],
  },
};

export const Standalone: Story = {
  args: {
    label: "Aceito os termos de uso",
    description: "Necessario para continuar.",
    items: [],
  },
};
