import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import Select from "./Select";

describe("Select", () => {
  it("renderiza um select semântico com label associado", () => {
    render(
      <Select label="País" options={[{ label: "Brasil", value: "br" }]} />,
    );

    expect(screen.getByRole("combobox", { name: "País" })).toBeInTheDocument();
  });

  it("associa a descrição ao select", () => {
    render(
      <Select
        description="Selecione o seu país de residência"
        label="País"
        options={[{ label: "Brasil", value: "br" }]}
      />,
    );

    expect(screen.getByRole("combobox", { name: "País" })).toHaveAccessibleDescription(
      "Selecione o seu país de residência",
    );
  });

  it("renderiza placeholder e opções", () => {
    render(
      <Select
        label="Idioma"
        options={[
          { label: "Português", value: "pt-BR" },
          { label: "English", value: "en-US" },
        ]}
        placeholder="Selecione um idioma"
      />,
    );

    expect(screen.getByRole("option", { name: "Selecione um idioma" })).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "Português" })).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "English" })).toBeInTheDocument();
  });

  it("dispara onChange ao selecionar uma opção", async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();

    render(
      <Select
        label="Idioma"
        onChange={handleChange}
        options={[
          { label: "Português", value: "pt-BR" },
          { label: "English", value: "en-US" },
        ]}
      />,
    );

    await user.selectOptions(screen.getByRole("combobox", { name: "Idioma" }), "en-US");

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(screen.getByRole("combobox", { name: "Idioma" })).toHaveValue("en-US");
  });

  it("aplica classes de size e invalid no campo visual", () => {
    const { container } = render(
      <Select
        invalid
        label="Categoria"
        options={[{ label: "Tecnologia", value: "tech" }]}
        size="lg"
      />,
    );

    const field = container.querySelector('[data-slot="select-field"]');

    expect(field?.className).toContain("min-h-11");
    expect(field?.className).toContain("border-border-critical");
  });

  it("respeita o estado disabled", () => {
    render(
      <Select disabled label="Categoria" options={[{ label: "Tecnologia", value: "tech" }]} />,
    );

    expect(screen.getByRole("combobox", { name: "Categoria" })).toBeDisabled();
  });
});
