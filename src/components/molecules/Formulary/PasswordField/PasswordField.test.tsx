import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import PasswordField from "./PasswordField";

describe("PasswordField", () => {
  it("renderiza o campo com senha oculta por padrão", () => {
    render(<PasswordField label="Senha" />);

    const input = screen.getByLabelText("Senha");

    expect(input).toHaveAttribute("type", "password");
    expect(screen.getByRole("button", { name: "Mostrar senha" })).toBeInTheDocument();
  });

  it("alterna entre ocultar e mostrar senha", async () => {
    const user = userEvent.setup();

    render(<PasswordField label="Senha de acesso" />);

    const input = screen.getByLabelText("Senha de acesso");
    const toggleButton = screen.getByRole("button", { name: "Mostrar senha" });

    await user.click(toggleButton);

    expect(input).toHaveAttribute("type", "text");
    expect(screen.getByRole("button", { name: "Ocultar senha" })).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Ocultar senha" }));

    expect(input).toHaveAttribute("type", "password");
  });

  it("associa a descrição ao campo quando não há erro", () => {
    render(<PasswordField description="Use ao menos 8 caracteres." label="Senha" />);

    expect(screen.getByLabelText("Senha")).toHaveAccessibleDescription("Use ao menos 8 caracteres.");
  });

  it("prioriza a mensagem de erro na descrição acessível", () => {
    render(
      <PasswordField
        description="Use uma senha forte."
        errorMessage="A senha é obrigatória."
        invalid
        label="Senha"
      />,
    );

    const input = screen.getByLabelText("Senha");

    expect(input).toHaveAccessibleDescription("A senha é obrigatória.");
    expect(input).toHaveAttribute("aria-invalid", "true");
  });

  it("desabilita o campo e o botão de alternância quando necessário", () => {
    render(<PasswordField disabled label="Senha" />);

    expect(screen.getByLabelText("Senha")).toBeDisabled();
    expect(screen.getByRole("button", { name: "Mostrar senha" })).toBeDisabled();
  });
});
