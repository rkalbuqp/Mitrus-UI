import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import RadioButton from "./RadioButton";

describe("RadioButton", () => {
  it("renderiza um input radio semântico com label associado", () => {
    render(
      <RadioButton name="status" value="ativo">
        Ativo
      </RadioButton>,
    );

    expect(screen.getByRole("radio", { name: "Ativo" })).toBeInTheDocument();
  });

  it("associa a descrição ao radio", () => {
    render(
      <RadioButton description="Opção recomendada" name="plano" value="pro">
        Plano Pro
      </RadioButton>,
    );

    expect(screen.getByRole("radio", { name: "Plano Pro" })).toHaveAccessibleDescription("Opção recomendada");
  });

  it("respeita o estado checked inicial", () => {
    render(
      <RadioButton defaultChecked name="status" value="ativo">
        Ativo
      </RadioButton>,
    );

    expect(screen.getByRole("radio", { name: "Ativo" })).toBeChecked();
  });

  it("dispara onChange ao clicar", async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();

    render(
      <RadioButton name="status" onChange={handleChange} value="ativo">
        Ativo
      </RadioButton>,
    );

    await user.click(screen.getByRole("radio", { name: "Ativo" }));

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("aplica classes de size e invalid no controle visual", () => {
    const { container } = render(
      <RadioButton invalid name="status" size="lg" value="ativo">
        Ativo
      </RadioButton>,
    );

    const control = container.querySelector('[data-slot="radio-control"]');

    expect(control?.className).toContain("h-6");
    expect(control?.className).toContain("border-border-critical");
  });

  it("respeita o estado disabled", () => {
    render(
      <RadioButton disabled name="status" value="ativo">
        Ativo
      </RadioButton>,
    );

    expect(screen.getByRole("radio", { name: "Ativo" })).toBeDisabled();
  });
});
