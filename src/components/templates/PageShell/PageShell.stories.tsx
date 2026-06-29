import type { Meta, StoryObj } from "@storybook/react";

import { Button, Text } from "../../atoms";
import PageShell from "./PageShell";

const meta = {
  title: "Components/Templates/PageShell",
  component: PageShell,
  tags: ["autodocs"],
  args: {
    breadcrumbItems: [
      { label: "Home", href: "/" },
      { label: "Catalogo", href: "/catalogo" },
      { label: "Pagina atual", current: true },
    ],
    title: "Pagina de exemplo",
    description: "Estrutura base para layouts com header, main, aside e footer.",
    headerActions: <Button size="sm">Nova acao</Button>,
    sidebar: (
      <div className="rounded-lg border border-border-neutral-default bg-background-primary p-4">
        <Text as="h2" size="lg" weight="semibold">
          Sidebar
        </Text>
        <Text as="p" size="sm" tone="secondary">
          Conteudo complementar da pagina.
        </Text>
      </div>
    ),
    footer: (
      <Text as="p" size="sm" tone="secondary">
        Rodape da pagina.
      </Text>
    ),
    children: (
      <section className="rounded-lg border border-border-neutral-default bg-background-primary p-4">
        <Text as="h2" size="lg" weight="semibold">
          Conteudo principal
        </Text>
        <Text as="p" size="sm" tone="secondary">
          Area principal do template.
        </Text>
      </section>
    ),
  },
  argTypes: {
    breadcrumbItems: { control: false },
    headerActions: { control: false },
    sidebar: { control: false },
    footer: { control: false },
    children: { control: false },
    topBar: { control: false },
  },
} satisfies Meta<typeof PageShell>;

type Story = StoryObj<typeof meta>;

const Default: Story = {};

export default meta;
export { Default };
