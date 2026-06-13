import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Breadcrumb from "./Breadcrumb";

describe("Breadcrumb", () => {
  it("renderiza uma navegacao semantica com links e pagina atual", () => {
    render(
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Produtos", href: "/produtos" },
          { label: "Notebook Gamer", current: true },
        ]}
      />,
    );

    expect(screen.getByRole("navigation", { name: "Breadcrumb" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute("href", "/");
    expect(screen.getByRole("link", { name: "Produtos" })).toHaveAttribute("href", "/produtos");
    expect(screen.getByText("Notebook Gamer")).toHaveAttribute("aria-current", "page");
  });

  it("usa o ultimo item como pagina atual quando nao ha item explicito", () => {
    render(
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Catalogo", href: "/catalogo" },
          { label: "Detalhes" },
        ]}
      />,
    );

    expect(screen.getByText("Detalhes")).toHaveAttribute("aria-current", "page");
  });

  it("respeita aria-label customizado", () => {
    render(
      <Breadcrumb
        ariaLabel="Navegacao estrutural"
        items={[
          { label: "Home", href: "/" },
          { label: "Blog", current: true },
        ]}
      />,
    );

    expect(screen.getByRole("navigation", { name: "Navegacao estrutural" })).toBeInTheDocument();
  });

  it("renderiza texto simples quando o item nao tem href e nao e o atual", () => {
    render(
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Categoria" },
          { label: "Produto Atual", current: true },
        ]}
      />,
    );

    expect(screen.queryByRole("link", { name: "Categoria" })).not.toBeInTheDocument();
    expect(screen.getByText("Categoria")).toBeInTheDocument();
  });
});
