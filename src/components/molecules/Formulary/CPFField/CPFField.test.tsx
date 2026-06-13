import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import CPFField from "./CPFField";

describe("CPFField", () => {
  it("renderiza um campo de CPF com placeholder mascarado", () => {
    render(<CPFField label="CPF" />);

    const input = screen.getByRole("textbox", { name: "CPF" });

    expect(input).toHaveAttribute("placeholder", "000.000.000-00");
    expect(input).toHaveAttribute("inputmode", "numeric");
  });

  it("formata o CPF durante a digitação", async () => {
    const user = userEvent.setup();

    render(<CPFField label="CPF" />);

    const input = screen.getByRole("textbox", { name: "CPF" });

    await user.type(input, "12345678901");

    expect(input).toHaveValue("123.456.789-01");
  });

  it("prioriza a mensagem de erro na descrição acessível", () => {
    render(
      <CPFField
        description="Digite apenas os números."
        errorMessage="O CPF é obrigatório."
        invalid
        label="CPF"
      />,
    );

    const input = screen.getByRole("textbox", { name: "CPF" });

    expect(input).toHaveAccessibleDescription("O CPF é obrigatório.");
    expect(input).toHaveAttribute("aria-invalid", "true");
  });

  it("respeita os estados disabled e required", () => {
    render(<CPFField disabled label="CPF" required />);

    const input = screen.getByRole("textbox", { name: /CPF/ });

    expect(input).toBeDisabled();
    expect(input).toBeRequired();
  });

  it("dispara onValueChange com o valor formatado e os dígitos limpos", async () => {
    const user = userEvent.setup();
    const handleValueChange = vi.fn();

    render(<CPFField label="CPF" onValueChange={handleValueChange} />);

    await user.type(screen.getByRole("textbox", { name: "CPF" }), "12345678901");

    expect(handleValueChange).toHaveBeenCalled();
    expect(handleValueChange).toHaveBeenLastCalledWith(
      "123.456.789-01",
      expect.objectContaining({
        digits: "12345678901",
        isComplete: true,
      }),
    );
  });
});
