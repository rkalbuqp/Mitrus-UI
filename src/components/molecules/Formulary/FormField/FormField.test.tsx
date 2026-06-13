import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import { Input } from "../../../atoms";
import FormField from "./FormField";

describe("FormField", () => {
  it("conecta label e controle via render prop", () => {
    render(
      <FormField label="Nome completo">
        {(fieldProps) => <input {...fieldProps} type="text" />}
      </FormField>,
    );

    expect(screen.getByRole("textbox", { name: "Nome completo" })).toBeInTheDocument();
  });

  it("associa a descrição ao controle", () => {
    render(
      <FormField description="Digite seu nome como no documento." label="Nome">
        {(fieldProps) => <input {...fieldProps} type="text" />}
      </FormField>,
    );

    expect(screen.getByRole("textbox", { name: "Nome" })).toHaveAccessibleDescription(
      "Digite seu nome como no documento.",
    );
  });

  it("prioriza a mensagem de erro na descrição acessível", () => {
    render(
      <FormField description="Escolha um valor valido." errorMessage="Este campo é obrigatório." invalid label="Nome">
        {(fieldProps) => <input {...fieldProps} type="text" />}
      </FormField>,
    );

    const input = screen.getByRole("textbox", { name: "Nome" });

    expect(input).toHaveAccessibleDescription("Este campo é obrigatório.");
    expect(input).toHaveAttribute("aria-invalid", "true");
  });

  it("propaga disabled e required para o controle", () => {
    render(
      <FormField disabled label="E-mail" required>
        {(fieldProps) => <input {...fieldProps} type="email" />}
      </FormField>,
    );

    const input = screen.getByRole("textbox", { name: /E-mail/ });

    expect(input).toBeDisabled();
    expect(input).toBeRequired();
  });

  it("aceita um atom como controle usando os props injetados", async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();

    render(
      <FormField label="Cidade">
        {(fieldProps) => <Input {...fieldProps} className="gap-0" inputClassName="" onChange={handleChange} />}
      </FormField>,
    );

    await user.type(screen.getByRole("textbox", { name: "Cidade" }), "Recife");

    expect(handleChange).toHaveBeenCalled();
  });
});
