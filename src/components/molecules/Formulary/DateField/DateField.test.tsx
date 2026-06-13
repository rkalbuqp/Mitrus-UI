import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import DateField from "./DateField";

describe("DateField", () => {
  it("renderiza um campo de data semântico com label associado", () => {
    render(<DateField label="Data de nascimento" />);

    const input = screen.getByLabelText("Data de nascimento");

    expect(input).toHaveAttribute("type", "date");
  });

  it("associa a descrição ao campo quando não há erro", () => {
    render(<DateField description="Use o formato do navegador." label="Data de entrega" />);

    expect(screen.getByLabelText("Data de entrega")).toHaveAccessibleDescription("Use o formato do navegador.");
  });

  it("prioriza a mensagem de erro na descrição acessível", () => {
    render(
      <DateField
        description="Escolha a melhor data."
        errorMessage="A data informada é inválida."
        invalid
        label="Data de agendamento"
      />,
    );

    const input = screen.getByLabelText("Data de agendamento");

    expect(input).toHaveAccessibleDescription("A data informada é inválida.");
    expect(input).toHaveAttribute("aria-invalid", "true");
  });

  it("permite alteração do valor", async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();

    render(<DateField label="Data da consulta" onChange={handleChange} />);

    const input = screen.getByLabelText("Data da consulta");

    await user.type(input, "2026-06-13");

    expect(handleChange).toHaveBeenCalled();
  });

  it("respeita os estados disabled e required", () => {
    render(<DateField disabled label="Data limite" required />);

    const input = screen.getByLabelText(/Data limite/);

    expect(input).toBeDisabled();
    expect(input).toBeRequired();
  });
});
