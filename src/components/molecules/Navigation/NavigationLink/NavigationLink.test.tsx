import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import NavigationLink from "./NavigationLink";

describe("NavigationLink", () => {
  it("renderiza um link de navegacao quando href e informado", () => {
    render(<NavigationLink href="/dashboard" label="Dashboard" />);

    expect(screen.getByRole("link", { name: "Dashboard" })).toHaveAttribute("href", "/dashboard");
  });

  it("marca o item atual com aria-current", () => {
    render(<NavigationLink current href="/pedidos" label="Pedidos" />);

    expect(screen.getByRole("link", { name: "Pedidos" })).toHaveAttribute("aria-current", "page");
  });

  it("renderiza icone quando informado", () => {
    render(<NavigationLink href="/relatorios" iconName="analytics" label="Relatorios" />);

    expect(screen.getByText("analytics")).toBeInTheDocument();
  });

  it("usa botao quando nao ha href", async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();

    render(<NavigationLink label="Abrir painel" onClick={handleClick} />);

    await user.click(screen.getByRole("button", { name: "Abrir painel" }));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("respeita o estado disabled", () => {
    render(<NavigationLink disabled label="Configuracoes" onClick={() => undefined} />);

    expect(screen.getByRole("button", { name: "Configuracoes" })).toBeDisabled();
  });
});
