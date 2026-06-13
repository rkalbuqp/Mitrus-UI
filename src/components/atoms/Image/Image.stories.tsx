import type { Meta, StoryObj } from "@storybook/react";

import Image from "./Image";

const meta = {
  title: "Components/Atoms/Image",
  component: Image,
  tags: ["autodocs"],
  args: {
    src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    alt: "Paisagem montanhosa",
    size: "md",
    ratio: "auto",
    fit: "cover",
    rounded: "md",
    bordered: false,
    fullWidth: false,
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg", "full"],
    },
    ratio: {
      control: "select",
      options: ["auto", "square", "video", "portrait", "landscape"],
    },
    fit: {
      control: "select",
      options: ["cover", "contain", "fill", "none", "scaleDown"],
    },
    rounded: {
      control: "select",
      options: ["none", "sm", "md", "lg", "full"],
    },
  },
} satisfies Meta<typeof Image>;


type Story = StoryObj<typeof meta>;

const Default: Story = {};

const WithCaption: Story = {
  args: {
    caption: "Vista panorâmica em um dia ensolarado.",
  },
};

const Square: Story = {
  args: {
    ratio: "square",
    rounded: "lg",
  },
};

const Bordered: Story = {
  args: {
    bordered: true,
  },
};

const FullWidth: Story = {
  args: {
    fullWidth: true,
    size: "full",
    ratio: "video",
    caption: "Imagem em largura total com proporção de vídeo.",
  },
  render: (args) => (
    <div className="w-full max-w-3xl">
      <Image {...args} />
    </div>
  ),
};

const Fits: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <Image
        alt="Cover"
        fit="cover"
        ratio="square"
        src="https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=800&q=80"
      />
      <Image
        alt="Contain"
        fit="contain"
        ratio="square"
        src="https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=800&q=80"
      />
    </div>
  ),
};

export default meta;
export { Default, WithCaption, Square, Bordered, FullWidth, Fits };
