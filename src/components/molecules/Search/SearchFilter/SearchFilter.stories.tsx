import type { Meta, StoryObj } from "@storybook/react";

import SearchFilter from "./SearchFilter";

const meta = {
  title: "Components/Molecules/Search/SearchFilter",
  component: SearchFilter,
  tags: ["autodocs"],
  args: {
    label: "Filtrar resultados",
    description: "Selecione um recorte para refinar a listagem apresentada.",
    size: "md",
    fullWidth: true,
    placeholder: "Todos os filtros",
    options: [
      { label: "Mais recentes", value: "recentes" },
      { label: "Mais relevantes", value: "relevantes" },
      { label: "Menor preco", value: "preco-asc" },
      { label: "Maior preco", value: "preco-desc" },
    ],
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    iconName: {
      control: "text",
    },
    onChange: {
      action: "changed",
    },
  },
} satisfies Meta<typeof SearchFilter>;

type Story = StoryObj<typeof meta>;

const Default: Story = {};

const WithValue: Story = {
  args: {
    defaultValue: "relevantes",
  },
};

const Invalid: Story = {
  args: {
    invalid: true,
    errorMessage: "Selecione um filtro valido para continuar.",
  },
};

const Optional: Story = {
  args: {
    optional: true,
  },
};

export default meta;
export { Default, Invalid, Optional, WithValue };
