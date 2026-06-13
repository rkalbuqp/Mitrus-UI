import type { Meta, StoryObj } from "@storybook/react";

import Select from "./Select";

const meta = {
  title: "Components/Atoms/Select",
  component: Select,
  tags: ["autodocs"],
  args: {
    label: "País",
    description: "Selecione uma opção da lista.",
    placeholder: "Selecione um país",
    options: [
      { label: "Brasil", value: "br" },
      { label: "Argentina", value: "ar" },
      { label: "Chile", value: "cl" },
    ],
    size: "md",
    invalid: false,
    fullWidth: false,
    disabled: false,
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    onChange: {
      action: "changed",
    },
  },
} satisfies Meta<typeof Select>;


type Story = StoryObj<typeof meta>;

const Default: Story = {};

const WithValue: Story = {
  args: {
    defaultValue: "br",
  },
};

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

const FullWidth: Story = {
  args: {
    fullWidth: true,
  },
  render: (args) => (
    <div className="w-80">
      <Select {...args} />
    </div>
  ),
};

const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Select
        label="Small"
        options={[{ label: "Brasil", value: "br" }]}
        placeholder="Selecione"
        size="sm"
      />
      <Select
        label="Medium"
        options={[{ label: "Brasil", value: "br" }]}
        placeholder="Selecione"
        size="md"
      />
      <Select
        label="Large"
        options={[{ label: "Brasil", value: "br" }]}
        placeholder="Selecione"
        size="lg"
      />
    </div>
  ),
};

export default meta;
export { Default, WithValue, Invalid, Disabled, FullWidth, Sizes };
