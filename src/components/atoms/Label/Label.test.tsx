import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Label from "./Label";

describe("Label", () => {
  it("renderiza uma tag label semântica com o conteúdo informado", () => {
    render(<Label htmlFor="email">E-mail</Label>);

    const label = screen.getByText("E-mail").closest("label");

    expect(label?.tagName).toBe("LABEL");
    expect(label).toHaveAttribute("for", "email");
  });

  it("renderiza indicador de obrigatório", () => {
    render(<Label required>Senha</Label>);

    expect(screen.getByText("*")).toBeInTheDocument();
  });

  it("renderiza texto de opcional quando informado", () => {
    render(<Label optional>Complemento</Label>);

    expect(screen.getByText("(opcional)")).toBeInTheDocument();
  });

  it("permite customizar o texto de opcional", () => {
    render(<Label optional optionalText="facultativo">Telefone</Label>);

    expect(screen.getByText("facultativo")).toBeInTheDocument();
  });

  it("aplica classes de size e disabled", () => {
    render(
      <Label disabled size="lg">
        Nome
      </Label>,
    );

    const label = screen.getByText("Nome").closest("label");

    expect(label?.className).toContain("text-125");
    expect(label?.className).toContain("cursor-not-allowed");
  });

  it("aplica sr-only quando solicitado", () => {
    render(<Label srOnly>Busca</Label>);

    const label = screen.getByText("Busca").closest("label");

    expect(label?.className).toContain("sr-only");
  });
});
