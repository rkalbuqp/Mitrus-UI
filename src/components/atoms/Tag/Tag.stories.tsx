import type { Meta, StoryObj } from "@storybook/react";

import Tag from "./Tag";

const meta = {
  title: "Components/Atoms/Tag",
  component: Tag,
  tags: ["autodocs"],
  args: {
    label: "Tag",
    variant: "neutral",
    size: "md",
    rounded: true,
    numeric: false,
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["neutral", "accent", "success", "warning", "critical", "inverse"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
} satisfies Meta<typeof Tag>;


type Story = StoryObj<typeof meta>;

const Default: Story = {};

const Numeric: Story = {
  args: {
    label: 12,
    numeric: true,
  },
};

const RoundedOff: Story = {
  args: {
    label: "Sem pill",
    rounded: false,
  },
};

const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Tag label="Neutral" variant="neutral" />
      <Tag label="Accent" variant="accent" />
      <Tag label="Success" variant="success" />
      <Tag label="Warning" variant="warning" />
      <Tag label="Critical" variant="critical" />
      <Tag label="Inverse" variant="inverse" />
    </div>
  ),
};

const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-3">
      <Tag label="Small" size="sm" />
      <Tag label="Medium" size="md" />
      <Tag label="Large" size="lg" />
    </div>
  ),
};

export default meta;
export { Default, Numeric, RoundedOff, Variants, Sizes };
