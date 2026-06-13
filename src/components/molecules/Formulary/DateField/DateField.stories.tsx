import type { Meta, StoryObj } from "@storybook/react";

import DateField from "./DateField";

const meta = {
  title: "Components/Molecules/Formulary/DateField",
  component: DateField,
  tags: ["autodocs"],
  args: {
    label: "Data de nascimento",
    description: "Selecione uma data valida.",
    size: "md",
    disabled: false,
    invalid: false,
    fullWidth: false,
  },
} satisfies Meta<typeof DateField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithValue: Story = {
  args: {
    defaultValue: "2026-06-13",
    label: "Data da consulta",
  },
};

export const Invalid: Story = {
  args: {
    invalid: true,
    errorMessage: "Informe uma data futura.",
    label: "Data de entrega",
  },
};

export const Optional: Story = {
  args: {
    label: "Data complementar",
    optional: true,
  },
};
