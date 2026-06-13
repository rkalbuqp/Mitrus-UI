import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import Pagination from "./Pagination";

describe("Pagination", () => {
  it("renderiza uma navegacao semantica com a pagina atual", () => {
    render(<Pagination currentPage={3} totalPages={8} />);

    expect(screen.getByRole("navigation", { name: "Paginacao" })).toBeInTheDocument();
    expect(screen.getByText("3").closest('[aria-current="page"]')).toHaveAttribute("aria-current", "page");
  });

  it("dispara onPageChange ao navegar para outra pagina", async () => {
    const user = userEvent.setup();
    const handlePageChange = vi.fn();

    render(<Pagination currentPage={2} onPageChange={handlePageChange} totalPages={5} />);

    await user.click(screen.getByRole("button", { name: "Ir para pagina 3" }));

    expect(handlePageChange).toHaveBeenCalledWith(3);
  });

  it("renderiza links quando getPageHref e informado", () => {
    render(
      <Pagination
        currentPage={2}
        getPageHref={(page) => `/produtos?page=${page}`}
        totalPages={4}
      />,
    );

    expect(screen.getByRole("link", { name: "Ir para pagina 1" })).toHaveAttribute("href", "/produtos?page=1");
    expect(screen.getByRole("link", { name: /Anterior/i })).toHaveAttribute("href", "/produtos?page=1");
  });

  it("mostra reticencias quando ha muitas paginas", () => {
    render(<Pagination boundaryCount={1} currentPage={6} siblingCount={1} totalPages={12} />);

    expect(screen.getAllByText("...")).toHaveLength(2);
  });

  it("desabilita a navegacao anterior e proxima nos extremos", () => {
    render(<Pagination currentPage={1} totalPages={1} />);

    expect(screen.getByText("Anterior").closest('[aria-disabled="true"]')).toHaveAttribute("aria-disabled", "true");
    expect(screen.getByText("Proxima").closest('[aria-disabled="true"]')).toHaveAttribute("aria-disabled", "true");
  });
});
