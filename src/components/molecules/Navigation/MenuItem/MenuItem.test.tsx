import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import MenuItem from "./MenuItem";

describe("MenuItem", () => {
  it("renderiza um item de menu com link quando href e informado", () => {
    render(<MenuItem href="/dashboard" label="Dashboard" />);

    expect(screen.getByRole("link", { name: "Dashboard" })).toHaveAttribute("href", "/dashboard");
  });

  it("renderiza descricao e icone quando informados", () => {
    render(<MenuItem description="Resumo dos indicadores" iconName="dashboard" label="Painel" />);

    expect(screen.getByText("Resumo dos indicadores")).toBeInTheDocument();
    expect(screen.getByText("dashboard")).toBeInTheDocument();
  });

  it("marca o item atual com aria-current", () => {
    render(<MenuItem current href="/pedidos" label="Pedidos" />);

    expect(screen.getByRole("link", { name: "Pedidos" })).toHaveAttribute("aria-current", "page");
  });

  it("usa botao quando nao ha href", async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();

    render(<MenuItem label="Atualizar" onClick={handleClick} />);

    await user.click(screen.getByRole("button", { name: "Atualizar" }));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("respeita o estado disabled", () => {
    render(<MenuItem disabled label="Configuracoes" onClick={() => undefined} />);

    expect(screen.getByRole("button", { name: "Configuracoes" })).toBeDisabled();
  });
});
