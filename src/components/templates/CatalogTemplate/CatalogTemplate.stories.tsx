import type { Meta, StoryObj } from "@storybook/react";

import { Button, Text } from "../../atoms";
import { MediaCard, SearchBar, SearchFilter } from "../../molecules";
import CatalogTemplate from "./CatalogTemplate";

const meta = {
  title: "Components/Templates/CatalogTemplate",
  component: CatalogTemplate,
  tags: ["autodocs"],
  args: {
    breadcrumbItems: [
      { label: "Home", href: "/" },
      { label: "Catalogo", current: true },
    ],
    title: "Catalogo de produtos",
    description: "Explore os itens disponiveis com busca, filtros e cards de resultado.",
    search: <SearchBar buttonLabel="Buscar" fullWidth hideLabel placeholder="Buscar produtos" />,
    filter: (
      <SearchFilter
        hideLabel
        options={[
          { label: "Mais relevantes", value: "relevantes" },
          { label: "Menor preco", value: "preco-asc" },
          { label: "Maior preco", value: "preco-desc" },
        ]}
        placeholder="Ordenar por"
      />
    ),
    toolbarActions: <Button variant="secondary">Limpar filtros</Button>,
    resultsTitle: "Resultados encontrados",
    statusText: "24 itens",
    children: (
      <>
        <MediaCard
          description="Audio potente para uso diario."
          mediaAlt="Caixa de som preta sobre a mesa"
          mediaSrc="https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=900&q=80"
          title="Caixa de Som Portatil"
        />
        <MediaCard
          description="Som limpo com cancelamento de ruido."
          mediaAlt="Headphone branco em destaque"
          mediaSrc="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80"
          title="Headphone Sem Fio"
        />
      </>
    ),
  },
  argTypes: {
    breadcrumbItems: { control: false },
    search: { control: false },
    filter: { control: false },
    toolbarActions: { control: false },
    sidebar: { control: false },
    footer: { control: false },
    emptyState: { control: false },
    children: { control: false },
  },
} satisfies Meta<typeof CatalogTemplate>;

type Story = StoryObj<typeof meta>;

const Default: Story = {};

const Empty: Story = {
  args: {
    children: undefined,
    emptyState: (
      <Text as="p" size="md" tone="secondary">
        Nenhum item foi encontrado para os filtros aplicados.
      </Text>
    ),
  },
};

export default meta;
export { Default, Empty };
