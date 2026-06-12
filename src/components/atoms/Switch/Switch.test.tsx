import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import Switch from "./Switch";

describe("Switch", () => {
  it("renderiza um switch semântico com label associado", () => {
    render(<Switch>Modo escuro</Switch>);

    expect(screen.getByRole("switch", { name: "Modo escuro" })).toBeInTheDocument();
  });

  it("associa a descrição ao switch", () => {
    render(<Switch description="Ativa o tema escuro da interface">Tema</Switch>);

    expect(screen.getByRole("switch", { name: "Tema" })).toHaveAccessibleDescription(
      "Ativa o tema escuro da interface",
    );
  });

  it("respeita o estado checked inicial", () => {
    render(<Switch defaultChecked>Notificações</Switch>);

    expect(screen.getByRole("switch", { name: "Notificações" })).toBeChecked();
  });

  it("dispara onChange ao clicar", async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();

    render(<Switch onChange={handleChange}>Ativar</Switch>);

    await user.click(screen.getByRole("switch", { name: "Ativar" }));

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("aplica classes de size e invalid no controle visual", () => {
    const { container } = render(
      <Switch invalid size="lg">
        Campo obrigatório
      </Switch>,
    );

    const control = container.querySelector('[data-slot="switch-control"]');

    expect(control?.className).toContain("h-7");
    expect(control?.className).toContain("border-border-critical");
  });

  it("respeita o estado disabled", () => {
    render(<Switch disabled>Desabilitado</Switch>);

    expect(screen.getByRole("switch", { name: "Desabilitado" })).toBeDisabled();
  });
});
