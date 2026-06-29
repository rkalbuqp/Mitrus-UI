import type { Meta, StoryObj } from "@storybook/react";

import { Button, Text } from "../../../atoms";
import CardFooter from "../../SimpleCards/CardFooter";
import UserBadge from "../UserBadge";
import ProfileSummary from "./ProfileSummary";

const meta = {
  title: "Components/Molecules/Users/ProfileSummary",
  component: ProfileSummary,
  tags: ["autodocs"],
  args: {
    bordered: true,
    name: "Ana Souza",
    handle: "@anasouza",
    description: "Especialista em produto digital com foco em experiencia e acessibilidade.",
    meta: (
      <>
        <Text as="span" size="sm" tone="secondary">
          Sao Paulo, Brasil
        </Text>
        <Text as="span" size="sm" tone="secondary">
          Disponivel para freelas
        </Text>
      </>
    ),
    badge: <UserBadge label="Verificada" variant="success" />,
    avatarProps: {
      name: "Ana Souza",
      src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
      size: "lg",
      status: "online",
    },
    action: <Button size="sm">Seguir</Button>,
    footer: (
      <CardFooter
        divider
        meta={<Text as="span">124 projetos concluidos</Text>}
        supportingText="Responde em media em menos de 2 horas."
      />
    ),
  },
  argTypes: {
    meta: {
      control: false,
    },
    badge: {
      control: false,
    },
    avatarProps: {
      control: false,
    },
    action: {
      control: false,
    },
    footer: {
      control: false,
    },
    children: {
      control: false,
    },
  },
} satisfies Meta<typeof ProfileSummary>;

type Story = StoryObj<typeof meta>;

const Default: Story = {};

const WithoutFooter: Story = {
  args: {
    footer: undefined,
  },
};

export default meta;
export { Default, WithoutFooter };
