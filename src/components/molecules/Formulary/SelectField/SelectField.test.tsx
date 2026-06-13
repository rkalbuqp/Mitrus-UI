import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import SelectField from "./SelectField";

const OPTIONS = [
  { label: "Brasil", value: "br" },
  { label: "Argentina", value: "ar" },
  { label: "Chile", value: "cl" },
];

describe("SelectField", () => {
  it("renderiza um campo de selecao semantico com label associado", () => {
    render(<SelectField label="Pais" options={OPTIONS} />);

    expect(screen.getByRole("combobox", { name: "Pais" })).toBeInTheDocument();
  });

  it("associa a descricao ao campo quando nao ha erro", () => {
    render(<SelectField description="Escolha o pais de residencia." label="Pais" options={OPTIONS} />);

    expect(screen.getByRole("combobox", { name: "Pais" })).toHaveAccessibleDescription(
      "Escolha o pais de residencia.",
    );
  });

  it("prioriza a mensagem de erro na descricao acessivel", () => {
    render(
      <SelectField
        description="Selecione uma opcao."
        errorMessage="Voce precisa escolher um pais."
        invalid
        label="Pais"
        options={OPTIONS}
      />,
    );

    const select = screen.getByRole("combobox", { name: "Pais" });

    expect(select).toHaveAccessibleDescription("Voce precisa escolher um pais.");
    expect(select).toHaveAttribute("aria-invalid", "true");
  });

  it("permite alterar o valor selecionado", async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();

    render(<SelectField label="Pais" onChange={handleChange} options={OPTIONS} />);

    const select = screen.getByRole("combobox", { name: "Pais" });

    await user.selectOptions(select, "ar");

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(select).toHaveValue("ar");
  });

  it("renderiza o placeholder quando informado", () => {
    render(<SelectField label="Pais" options={OPTIONS} placeholder="Selecione um pais" />);

    expect(screen.getByRole("option", { name: "Selecione um pais" })).toBeInTheDocument();
  });

  it("respeita os estados disabled e required", () => {
    render(<SelectField disabled label="Pais" options={OPTIONS} required />);

    const select = screen.getByRole("combobox", { name: "Pais" });

    expect(select).toBeDisabled();
    expect(select).toBeRequired();
  });
});
