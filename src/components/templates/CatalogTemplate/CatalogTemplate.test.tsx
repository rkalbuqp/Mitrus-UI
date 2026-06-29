import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Text } from "../../atoms";
import { SearchBar, SearchFilter } from "../../molecules";
import CatalogTemplate from "./CatalogTemplate";

describe("CatalogTemplate", () => {
  it("renderiza ferramentas e resultados do catalogo", () => {
    const { getByLabelText, getByRole, getByText } = render(
      <CatalogTemplate
        filter={<SearchFilter hideLabel options={[{ label: "Mais recentes", value: "recentes" }]} />}
        search={<SearchBar hideLabel />}
        statusText="12 itens"
        title="Catalogo"
      >
        <div>Card 1</div>
      </CatalogTemplate>,
    );

    expect(getByRole("heading", { name: "Catalogo" })).toBeInTheDocument();
    expect(getByLabelText("Buscar")).toBeInTheDocument();
    expect(getByRole("combobox", { name: "Filtrar resultados" })).toBeInTheDocument();
    expect(getByText("12 itens")).toBeInTheDocument();
    expect(getByText("Card 1")).toBeInTheDocument();
  });

  it("renderiza estado vazio quando nao ha children", () => {
    const { getByText } = render(
      <CatalogTemplate
        emptyState={
          <Text as="p" size="md" tone="secondary">
            Nenhum resultado encontrado.
          </Text>
        }
      />,
    );

    expect(getByText("Nenhum resultado encontrado.")).toBeInTheDocument();
  });
});
