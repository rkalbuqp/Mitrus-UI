import type { Meta, StoryObj } from "@storybook/react";

import { Button, Text } from "../../atoms";
import { CardFooter, ProfileSummary, UserBadge } from "../../molecules";
import ProfileTemplate from "./ProfileTemplate";

const meta = {
  title: "Components/Templates/ProfileTemplate",
  component: ProfileTemplate,
  tags: ["autodocs"],
  args: {
    breadcrumbItems: [
      { label: "Home", href: "/" },
      { label: "Usuarios", href: "/usuarios" },
      { label: "Perfil", current: true },
    ],
    title: "Perfil profissional",
    description: "Template para paginas de usuario com resumo, secoes e sidebar.",
    summary: (
      <ProfileSummary
        action={<Button size="sm">Seguir</Button>}
        avatarProps={{ name: "Ana Souza", size: "lg", status: "online" }}
        badge={<UserBadge label="Verificada" variant="success" />}
        bordered
        description="Especialista em produto digital e acessibilidade."
        handle="@anasouza"
        name="Ana Souza"
      />
    ),
    sections: [
      {
        title: "Sobre",
        content: (
          <Text as="p" size="sm" tone="secondary">
            Atua com discovery, sistemas de design e definicao de estrategia de produto.
          </Text>
        ),
      },
      {
        title: "Atividade recente",
        content: (
          <CardFooter
            meta={<Text as="span">12 artigos publicados</Text>}
            supportingText="Ultima atualizacao hoje."
          />
        ),
      },
    ],
    sidebar: (
      <div className="rounded-lg border border-border-neutral-default bg-background-primary p-4">
        <Text as="h2" size="lg" weight="semibold">
          Informacoes extras
        </Text>
        <Text as="p" size="sm" tone="secondary">
          Disponivel para mentorias e consultorias.
        </Text>
      </div>
    ),
  },
  argTypes: {
    breadcrumbItems: { control: false },
    summary: { control: false },
    sections: { control: false },
    sidebar: { control: false },
    footer: { control: false },
    children: { control: false },
  },
} satisfies Meta<typeof ProfileTemplate>;

type Story = StoryObj<typeof meta>;

const Default: Story = {};

export default meta;
export { Default };
