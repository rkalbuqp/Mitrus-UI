import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import Checkbox from "./Checkbox";

describe("Checkbox", () => {
  it("renderiza um checkbox semântico com label associado", () => {
    render(<Checkbox>Eu aceito os termos</Checkbox>);

    expect(screen.getByRole("checkbox", { name: "Eu aceito os termos" })).toBeInTheDocument();
  });

  it("associa a descrição ao checkbox", () => {
    render(<Checkbox description="Receber novidades por e-mail">Newsletter</Checkbox>);

    expect(screen.getByRole("checkbox", { name: "Newsletter" })).toHaveAccessibleDescription(
      "Receber novidades por e-mail",
    );
  });

  it("respeita o estado checked inicial", () => {
    render(<Checkbox defaultChecked>Lembrar de mim</Checkbox>);

    expect(screen.getByRole("checkbox", { name: "Lembrar de mim" })).toBeChecked();
  });

  it("dispara onChange ao clicar", async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();

    render(<Checkbox onChange={handleChange}>Ativar</Checkbox>);

    await user.click(screen.getByRole("checkbox", { name: "Ativar" }));

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("aplica classes de size e invalid", () => {
    render(
      <Checkbox invalid size="lg">
        Campo obrigatório
      </Checkbox>,
    );

    const checkbox = screen.getByRole("checkbox", { name: "Campo obrigatório" });

    expect(checkbox.className).toContain("h-6");
    expect(checkbox.className).toContain("border-border-critical");
  });

  it("respeita o estado disabled", () => {
    render(<Checkbox disabled>Desabilitado</Checkbox>);

    expect(screen.getByRole("checkbox", { name: "Desabilitado" })).toBeDisabled();
  });
});
