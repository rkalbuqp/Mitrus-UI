import type { Meta, StoryObj } from "@storybook/react";

import Button from "../Button";
import Icon from "../Icon";
import Tooltip from "./Tooltip";

const meta = {
  title: "Components/Atoms/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  args: {
    children: <button type="button">Passe o mouse</button>,
    content: "Informação adicional",
    placement: "top",
    size: "md",
    open: false,
  },
  argTypes: {
    children: {
      control: false,
    },
    placement: {
      control: "select",
      options: ["top", "bottom", "left", "right"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
} satisfies Meta<typeof Tooltip>;

type Story = StoryObj<typeof meta>;

const Default: Story = {
  render: (args) => (
    <Tooltip {...args}>
      <button type="button">Passe o mouse</button>
    </Tooltip>
  ),
};

const WithButton: Story = {
  render: (args) => (
    <Tooltip {...args} content="Ação primária">
      <Button>Ação</Button>
    </Tooltip>
  ),
};

const WithIconTrigger: Story = {
  render: (args) => (
    <Tooltip {...args} content="Mais informações">
      <button
        aria-label="Informações"
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border-neutral-default"
        type="button"
      >
        <Icon decorative name="info" />
      </button>
    </Tooltip>
  ),
};

const Open: Story = {
  args: {
    children: <button type="button">Sempre aberto</button>,
    open: true,
    content: "Tooltip visível sem hover",
  },
  render: (args) => (
    <Tooltip {...args}>
      <button type="button">Sempre aberto</button>
    </Tooltip>
  ),
};

const Placements: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-10 p-10">
      <Tooltip content="Topo" placement="top" open>
        <button type="button">Top</button>
      </Tooltip>
      <Tooltip content="Direita" placement="right" open>
        <button type="button">Right</button>
      </Tooltip>
      <Tooltip content="Base" placement="bottom" open>
        <button type="button">Bottom</button>
      </Tooltip>
      <Tooltip content="Esquerda" placement="left" open>
        <button type="button">Left</button>
      </Tooltip>
    </div>
  ),
};

export default meta;
export { Default, Open, Placements, WithButton, WithIconTrigger };
