import type { Meta, StoryObj } from "@storybook/react";

import Text from "./Text";

const meta = {
  title: "Components/Atoms/Text",
  component: Text,
  tags: ["autodocs"],
  args: {
    children: "Texto do design system",
    as: "p",
    tone: "primary",
    size: "md",
    weight: "regular",
    align: "left",
    italic: false,
    truncate: false,
    srOnly: false,
  },
  argTypes: {
    as: {
      control: "select",
      options: ["p", "span", "strong", "small", "em", "label", "div"],
    },
    tone: {
      control: "select",
      options: ["primary", "secondary", "disabled", "accent", "success", "warning", "critical", "inverse"],
    },
    size: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    weight: {
      control: "select",
      options: ["regular", "medium", "semibold", "bold"],
    },
    align: {
      control: "select",
      options: ["left", "center", "right"],
    },
  },
} satisfies Meta<typeof Text>;


type Story = StoryObj<typeof meta>;

const Default: Story = {};

const SemanticVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <Text as="p">Parágrafo</Text>
      <Text as="span">Span</Text>
      <Text as="strong" weight="bold">
        Strong
      </Text>
      <Text as="small" size="xs">
        Small
      </Text>
      <Text as="em" italic>
        Emphasis
      </Text>
    </div>
  ),
};

const Tones: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Text tone="primary">Primary</Text>
      <Text tone="secondary">Secondary</Text>
      <Text tone="accent">Accent</Text>
      <Text tone="success">Success</Text>
      <Text tone="warning">Warning</Text>
      <Text tone="critical">Critical</Text>
    </div>
  ),
};

const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Text size="xs">Extra small</Text>
      <Text size="sm">Small</Text>
      <Text size="md">Medium</Text>
      <Text size="lg">Large</Text>
      <Text size="xl">Extra large</Text>
    </div>
  ),
};

const Truncated: Story = {
  render: () => (
    <div className="w-56">
      <Text truncate>
        Este e um texto bem longo para mostrar como o truncate funciona dentro do componente.
      </Text>
    </div>
  ),
};

const Inverse: Story = {
  render: () => (
    <div className="rounded-md bg-fill-inverse-default p-4">
      <Text tone="inverse">Texto inverso</Text>
    </div>
  ),
};

export default meta;
export { Default, SemanticVariants, Tones, Sizes, Truncated, Inverse };
