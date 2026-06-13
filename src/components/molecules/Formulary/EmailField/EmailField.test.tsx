import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import EmailField from "./EmailField";

describe("EmailField", () => {
  it("renderiza um campo de e-mail semântico com label associado", () => {
    render(<EmailField label="E-mail" />);

    const input = screen.getByLabelText("E-mail") as HTMLInputElement;

    expect(input).toHaveAttribute("type", "email");
    expect(input).toHaveAttribute("autocomplete", "email");
    expect(input).toHaveAttribute("inputmode", "email");
    expect(input).toHaveAttribute("pattern", ".*@.*");
  });

  it("exige o caractere @ no valor informado", () => {
    render(<EmailField label="E-mail" />);

    const input = screen.getByLabelText("E-mail") as HTMLInputElement;
    const pattern = new RegExp(input.getAttribute("pattern") ?? "");

    expect(pattern.test("usuario@empresa.com")).toBe(true);
    expect(pattern.test("usuarioempresa.com")).toBe(false);
  });

  it("associa a descrição ao campo quando não há erro", () => {
    render(<EmailField description="Usaremos este e-mail para contato." label="E-mail profissional" />);

    expect(screen.getByLabelText("E-mail profissional")).toHaveAccessibleDescription(
      "Usaremos este e-mail para contato.",
    );
  });

  it("prioriza a mensagem de erro na descrição acessível", () => {
    render(
      <EmailField
        description="Digite um e-mail válido."
        errorMessage="O e-mail informado é inválido."
        invalid
        label="E-mail de cadastro"
      />,
    );

    const input = screen.getByLabelText("E-mail de cadastro");

    expect(input).toHaveAccessibleDescription("O e-mail informado é inválido.");
    expect(input).toHaveAttribute("aria-invalid", "true");
  });

  it("permite alteração do valor", async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();

    render(<EmailField label="E-mail de acesso" onChange={handleChange} />);

    const input = screen.getByLabelText("E-mail de acesso");

    await user.type(input, "user@example.com");

    expect(handleChange).toHaveBeenCalled();
  });

  it("respeita os estados disabled e required", () => {
    render(<EmailField disabled label="E-mail principal" required />);

    const input = screen.getByLabelText(/E-mail principal/);

    expect(input).toBeDisabled();
    expect(input).toBeRequired();
  });
});
