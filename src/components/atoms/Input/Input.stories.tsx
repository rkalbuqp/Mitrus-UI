import type { Meta, StoryObj } from "@storybook/react";

import Input from "./Input";

const meta = {
  title: "Components/Atoms/Input",
  component: Input,
  tags: ["autodocs"],
  args: {
    label: "Nome completo",
    description: "Informe como aparece no seu cadastro.",
    placeholder: "Digite aqui",
    size: "md",
    disabled: false,
    invalid: false,
    fullWidth: false,
    type: "text",
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    type: {
      control: "select",
      options: ["text", "email", "date", "password", "tel", "search"],
    },
    onChange: {
      action: "changed",
    },
  },
} satisfies Meta<typeof Input>;


type Story = StoryObj<typeof meta>;

const Default: Story = {};

const Invalid: Story = {
  args: {
    invalid: true,
  },
};

const Disabled: Story = {
  args: {
    disabled: true,
  },
};

const WithAdornment: Story = {
  args: {
    endAdornment: <button type="button">OK</button>,
  },
};

export default meta;
export { Default, Invalid, Disabled, WithAdornment };
