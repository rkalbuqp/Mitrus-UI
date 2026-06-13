import type { Meta, StoryObj } from "@storybook/react";

import TabGroup from "./TabGroup";

const meta = {
  title: "Components/Molecules/Navigation/TabGroup",
  component: TabGroup,
  tags: ["autodocs"],
  args: {
    items: [
      {
        value: "overview",
        label: "Visao geral",
        content: "Conteudo principal da visao geral.",
      },
      {
        value: "details",
        label: "Detalhes",
        content: "Conteudo detalhado da aba.",
      },
      {
        value: "history",
        label: "Historico",
        content: "Conteudo historico da aba.",
      },
    ],
  },
} satisfies Meta<typeof TabGroup>;

type Story = StoryObj<typeof meta>;

const Default: Story = {};

const WithDefaultValue: Story = {
  args: {
    defaultValue: "details",
  },
};

const WithDisabledTab: Story = {
  args: {
    items: [
      {
        value: "overview",
        label: "Visao geral",
        content: "Conteudo principal da visao geral.",
      },
      {
        value: "details",
        label: "Detalhes",
        content: "Conteudo detalhado da aba.",
        disabled: true,
      },
      {
        value: "history",
        label: "Historico",
        content: "Conteudo historico da aba.",
      },
    ],
  },
};

export default meta;
export { Default, WithDefaultValue, WithDisabledTab };
