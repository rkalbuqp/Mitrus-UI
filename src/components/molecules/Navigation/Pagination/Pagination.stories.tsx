import type { Meta, StoryObj } from "@storybook/react";

import Pagination from "./Pagination";

const meta = {
  title: "Components/Molecules/Navigation/Pagination",
  component: Pagination,
  tags: ["autodocs"],
  args: {
    currentPage: 3,
    totalPages: 10,
    siblingCount: 1,
    boundaryCount: 1,
  },
} satisfies Meta<typeof Pagination>;

type Story = StoryObj<typeof meta>;

const Default: Story = {};

const FewPages: Story = {
  args: {
    currentPage: 2,
    totalPages: 4,
  },
};

const ManyPages: Story = {
  args: {
    currentPage: 8,
    totalPages: 20,
  },
};

const WithLinks: Story = {
  args: {
    getPageHref: (page) => `/catalogo?page=${page}`,
  },
};

export default meta;
export { Default, FewPages, ManyPages, WithLinks };
