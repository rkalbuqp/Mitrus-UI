import type { Meta, StoryObj } from "@storybook/react";

import { Button, Text } from "../../atoms";
import { MediaCard, TabGroup } from "../../molecules";
import DashboardTemplate from "./DashboardTemplate";

const meta = {
  title: "Components/Templates/DashboardTemplate",
  component: DashboardTemplate,
  tags: ["autodocs"],
  args: {
    breadcrumbItems: [
      { label: "Home", href: "/" },
      { label: "Dashboard", current: true },
    ],
    title: "Painel operacional",
    description: "Template para dashboards com visao geral, navegacao e conteudo principal.",
    headerActions: <Button size="sm">Atualizar</Button>,
    overview: (
      <>
        <div className="rounded-lg border border-border-neutral-default bg-background-primary p-4">
          <Text as="p" size="sm" tone="secondary">
            Receita
          </Text>
          <Text as="p" size="lg" weight="semibold">
            R$ 42.000
          </Text>
        </div>
        <div className="rounded-lg border border-border-neutral-default bg-background-primary p-4">
          <Text as="p" size="sm" tone="secondary">
            Usuarios ativos
          </Text>
          <Text as="p" size="lg" weight="semibold">
            1.248
          </Text>
        </div>
      </>
    ),
    navigation: (
      <TabGroup
        items={[
          { label: "Resumo", value: "resumo", content: <Text>Visao consolidada.</Text> },
          { label: "Vendas", value: "vendas", content: <Text>Indicadores de vendas.</Text> },
        ]}
      />
    ),
    children: (
      <MediaCard
        description="Resumo de desempenho do periodo."
        mediaAlt="Grafico em tela de notebook"
        mediaSrc="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80"
        title="Indicadores principais"
      />
    ),
  },
  argTypes: {
    breadcrumbItems: { control: false },
    headerActions: { control: false },
    overview: { control: false },
    navigation: { control: false },
    sidebar: { control: false },
    footer: { control: false },
    children: { control: false },
  },
} satisfies Meta<typeof DashboardTemplate>;

type Story = StoryObj<typeof meta>;

const Default: Story = {};

export default meta;
export { Default };
