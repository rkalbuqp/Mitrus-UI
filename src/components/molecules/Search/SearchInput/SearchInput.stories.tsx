import type { Meta, StoryObj } from "@storybook/react";

import SearchInput from "./SearchInput";

const meta = {
  title: "Components/Molecules/Search/SearchInput",
  component: SearchInput,
  tags: ["autodocs"],
  args: {
    label: "Buscar itens",
    description: "Digite um termo para localizar rapidamente o conteudo desejado.",
    placeholder: "Buscar por nome ou codigo",
    size: "md",
    fullWidth: true,
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    onValueChange: {
      action: "value changed",
    },
    onChange: {
      action: "changed",
    },
  },
} satisfies Meta<typeof SearchInput>;

type Story = StoryObj<typeof meta>;

const Default: Story = {};

const WithInitialValue: Story = {
  args: {
    defaultValue: "notebook",
  },
};

const Invalid: Story = {
  args: {
    invalid: true,
    errorMessage: "Informe um termo de busca valido.",
  },
};

const HiddenLabel: Story = {
  args: {
    hideLabel: true,
  },
};

export default meta;
export { Default, HiddenLabel, Invalid, WithInitialValue };
