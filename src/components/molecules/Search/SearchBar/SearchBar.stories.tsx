import type { Meta, StoryObj } from "@storybook/react";

import SearchBar from "./SearchBar";

const meta = {
  title: "Components/Molecules/Search/SearchBar",
  component: SearchBar,
  tags: ["autodocs"],
  args: {
    label: "Buscar produtos",
    description: "Use a barra para localizar itens pelo nome, codigo ou categoria.",
    placeholder: "Digite sua busca",
    buttonLabel: "Buscar",
    size: "md",
    fullWidth: true,
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    buttonVariant: {
      control: "select",
      options: ["primary", "secondary", "outline", "ghost", "link", "danger", "success"],
    },
    onValueChange: {
      action: "value changed",
    },
    onSearch: {
      action: "searched",
    },
  },
} satisfies Meta<typeof SearchBar>;

type Story = StoryObj<typeof meta>;

const Default: Story = {};

const WithInitialValue: Story = {
  args: {
    defaultValue: "notebook gamer",
  },
};

const Invalid: Story = {
  args: {
    invalid: true,
    errorMessage: "Refine a busca para encontrar resultados validos.",
  },
};

const HiddenLabel: Story = {
  args: {
    hideLabel: true,
  },
};

export default meta;
export { Default, HiddenLabel, Invalid, WithInitialValue };
