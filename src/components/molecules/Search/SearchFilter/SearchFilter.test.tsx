import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import SearchFilter from "./SearchFilter";

const OPTIONS = [
  { label: "Mais recentes", value: "recentes" },
  { label: "Mais relevantes", value: "relevantes" },
  { label: "Maior preco", value: "preco-desc" },
];

describe("SearchFilter", () => {
  it("renderiza um seletor semantico de filtro com label associado", () => {
    const { getByRole } = render(<SearchFilter label="Filtrar resultados" options={OPTIONS} />);

    expect(getByRole("combobox", { name: "Filtrar resultados" })).toBeInTheDocument();
  });

  it("associa a descricao ao filtro quando nao ha erro", () => {
    const { getByRole } = render(
      <SearchFilter
        description="Escolha um criterio para refinar os resultados."
        label="Filtrar resultados"
        options={OPTIONS}
      />,
    );

    expect(getByRole("combobox", { name: "Filtrar resultados" })).toHaveAccessibleDescription(
      "Escolha um criterio para refinar os resultados.",
    );
  });

  it("prioriza a mensagem de erro na descricao acessivel", () => {
    const { getByRole } = render(
      <SearchFilter
        description="Escolha um filtro."
        errorMessage="Voce precisa selecionar um filtro valido."
        invalid
        label="Filtrar resultados"
        options={OPTIONS}
      />,
    );

    const select = getByRole("combobox", { name: "Filtrar resultados" });

    expect(select).toHaveAccessibleDescription("Voce precisa selecionar um filtro valido.");
    expect(select).toHaveAttribute("aria-invalid", "true");
  });

  it("permite alterar o valor selecionado", async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    const { getByRole } = render(
      <SearchFilter label="Ordenar resultados" onChange={handleChange} options={OPTIONS} />,
    );

    const select = getByRole("combobox", { name: "Ordenar resultados" });

    await user.selectOptions(select, "relevantes");

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(select).toHaveValue("relevantes");
  });

  it("renderiza o placeholder quando informado", () => {
    const { getByRole } = render(
      <SearchFilter label="Filtrar resultados" options={OPTIONS} placeholder="Todos os filtros" />,
    );

    expect(getByRole("option", { name: "Todos os filtros" })).toBeInTheDocument();
  });

  it("usa um nome acessivel padrao quando o label nao e informado", () => {
    const { getByRole } = render(<SearchFilter hideLabel options={OPTIONS} />);

    expect(getByRole("combobox", { name: "Filtrar resultados" })).toBeInTheDocument();
  });
});
