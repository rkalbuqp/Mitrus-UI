import type { Meta, StoryObj } from "@storybook/react";

import Skeleton from "./Skeleton";

const meta = {
  title: "Components/Atoms/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  args: {
    variant: "line",
    size: "md",
    animated: true,
    fullWidth: false,
    decorative: true,
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["line", "rectangle", "circle"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
} satisfies Meta<typeof Skeleton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Rectangle: Story = {
  args: {
    variant: "rectangle",
    size: "lg",
  },
};

export const Circle: Story = {
  args: {
    variant: "circle",
    size: "md",
  },
};

export const WithoutAnimation: Story = {
  args: {
    animated: false,
  },
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    width: "100%",
  },
  render: (args) => (
    <div className="w-80">
      <Skeleton {...args} />
    </div>
  ),
};

export const ContentPreview: Story = {
  render: () => (
    <div className="flex max-w-sm flex-col gap-3">
      <Skeleton variant="rectangle" width={320} height={180} />
      <Skeleton variant="line" width={220} />
      <Skeleton variant="line" width={180} />
      <div className="flex items-center gap-3">
        <Skeleton size="md" variant="circle" />
        <div className="flex flex-col gap-2">
          <Skeleton size="sm" width={120} />
          <Skeleton size="sm" width={80} />
        </div>
      </div>
    </div>
  ),
};
