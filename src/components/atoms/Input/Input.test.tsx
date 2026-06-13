import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import Input from "./Input";

describe("Input", () => {
  it("renderiza um input semântico com label associado", () => {
    render(<Input label="Nome completo" />);

    expect(screen.getByRole("textbox", { name: "Nome completo" })).toBeInTheDocument();
  });

  it("associa a descrição ao input", () => {
    render(<Input description="Digite seu nome como no documento." label="Nome" />);

    expect(screen.getByRole("textbox", { name: "Nome" })).toHaveAccessibleDescription(
      "Digite seu nome como no documento.",
    );
  });

  it("dispara onChange ao digitar", async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();

    render(<Input label="Cidade" onChange={handleChange} />);

    await user.type(screen.getByRole("textbox", { name: "Cidade" }), "Sao Paulo");

    expect(handleChange).toHaveBeenCalled();
  });

  it("aplica classes de size e invalid", () => {
    render(<Input invalid label="CEP" size="lg" />);

    const input = screen.getByRole("textbox", { name: "CEP" });

    expect(input.className).toContain("min-h-11");
    expect(input.className).toContain("border-border-critical");
  });

  it("respeita o estado disabled", () => {
    render(<Input disabled label="Telefone" />);

    expect(screen.getByRole("textbox", { name: "Telefone" })).toBeDisabled();
  });
});
