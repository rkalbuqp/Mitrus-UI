import type { Meta, StoryObj } from "@storybook/react";

import SearchField from "./SearchField";

const meta = {
  title: "Components/Molecules/Formulary/SearchField",
  component: SearchField,
  tags: ["autodocs"],
  args: {
    label: "Buscar produtos",
    description: "A busca aceita aproximacoes e encontra resultados de forma difusa.",
    placeholder: "Digite para buscar",
    size: "md",
    fullWidth: true,
    items: [
      {
        value: "notebook",
        label: "Notebook Gamer",
        description: "Performance para jogos e trabalho.",
        keywords: ["laptop", "portatil"],
      },
      {
        value: "monitor",
        label: "Monitor UltraWide",
        description: "Tela ampla para produtividade.",
      },
      {
        value: "mouse",
        label: "Mouse Sem Fio",
        description: "Precisao e mobilidade.",
      },
      {
        value: "teclado",
        label: "Teclado Mecanico",
        description: "Resposta tatil e digitacao confortavel.",
      },
      {
        value: "docs",
        label: "Documentacao",
        description: "Abre a pagina com conteudo de apoio.",
        href: "/docs",
      },
    ],
  },
} satisfies Meta<typeof SearchField>;

type Story = StoryObj<typeof meta>;

const Default: Story = {};

const WithInitialValue: Story = {
  args: {
    defaultValue: "ntbk",
  },
};

const Invalid: Story = {
  args: {
    invalid: true,
    errorMessage: "Nenhum item compativel foi encontrado.",
  },
};

const Optional: Story = {
  args: {
    label: "Buscar referencia secundaria",
    optional: true,
  },
};

export default meta;
export { Default, Invalid, Optional, WithInitialValue };
