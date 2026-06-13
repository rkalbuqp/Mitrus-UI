import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import SearchField, { type SearchFieldItem } from "./SearchField";

const ITEMS: SearchFieldItem[] = [
  {
    value: "notebook",
    label: "Notebook Gamer",
    description: "Performance para jogos e trabalho.",
    keywords: ["laptop", "portatil"],
  },
  {
    value: "monitor",
    label: "Monitor UltraWide",
    description: "Tela ampla para produtividade.",
  },
  {
    value: "mouse",
    label: "Mouse Sem Fio",
    description: "Precisao e mobilidade.",
  },
  {
    value: "docs",
    label: "Documentacao",
    description: "Acesse a base de conhecimento.",
    href: "/docs",
  },
];

describe("SearchField", () => {
  it("renderiza um campo de busca semantico com label associado", () => {
    render(<SearchField items={ITEMS} label="Buscar produtos" />);

    const input = screen.getByRole("combobox", { name: "Buscar produtos" });

    expect(input).toHaveAttribute("type", "search");
    expect(input).toHaveAttribute("autocomplete", "off");
  });

  it("aplica busca difusa e mostra resultados correspondentes", async () => {
    const user = userEvent.setup();

    render(<SearchField items={ITEMS} label="Buscar catalogo" />);

    const input = screen.getByRole("combobox", { name: "Buscar catalogo" });

    await user.type(input, "ntbk");

    expect(screen.getByRole("option", { name: /Notebook Gamer/i })).toBeInTheDocument();
    expect(screen.queryByRole("option", { name: /Mouse Sem Fio/i })).not.toBeInTheDocument();
  });

  it("permite selecionar um resultado com teclado e notifica o item escolhido", async () => {
    const user = userEvent.setup();
    const handleItemSelect = vi.fn();

    render(<SearchField items={ITEMS} label="Buscar item" onItemSelect={handleItemSelect} />);

    const input = screen.getByRole("combobox", { name: "Buscar item" });

    await user.type(input, "mntr");
    await user.keyboard("{ArrowDown}{Enter}");

    expect(input).toHaveValue("Monitor UltraWide");
    expect(handleItemSelect).toHaveBeenCalledWith(
      expect.objectContaining({
        value: "monitor",
      }),
      expect.objectContaining({
        displayValue: "Monitor UltraWide",
      }),
    );
  });

  it("prioriza a mensagem de erro na descricao acessivel", () => {
    render(
      <SearchField
        description="Busque pelo nome do produto."
        errorMessage="Nenhum produto foi encontrado."
        invalid
        items={ITEMS}
        label="Buscar produto"
      />,
    );

    const input = screen.getByRole("combobox", { name: "Buscar produto" });

    expect(input).toHaveAccessibleDescription("Nenhum produto foi encontrado.");
    expect(input).toHaveAttribute("aria-invalid", "true");
  });

  it("mostra o estado vazio quando a busca nao encontra resultados", async () => {
    const user = userEvent.setup();

    render(<SearchField items={ITEMS} label="Buscar referencias" />);

    const input = screen.getByRole("combobox", { name: "Buscar referencias" });

    await user.type(input, "zzz");

    expect(screen.getByText("Nenhum resultado encontrado.")).toBeInTheDocument();
  });

  it("usa o atom Link quando o resultado possui href", async () => {
    const user = userEvent.setup();

    render(<SearchField items={ITEMS} label="Buscar documentacao" />);

    const input = screen.getByRole("combobox", { name: "Buscar documentacao" });

    await user.type(input, "doc");

    const link = screen.getByRole("option", { name: /Documentacao/i });

    expect(link.tagName).toBe("A");
    expect(link).toHaveAttribute("href", "/docs");
  });
});
