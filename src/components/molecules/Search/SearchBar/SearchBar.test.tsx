import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import SearchBar from "./SearchBar";

describe("SearchBar", () => {
  it("renderiza uma barra de busca semantica com label associado ao campo", () => {
    const { getByLabelText, getByRole } = render(<SearchBar label="Buscar produtos" />);

    const form = getByRole("search");
    const input = getByLabelText("Buscar produtos");

    expect(form.tagName).toBe("FORM");
    expect(input).toHaveAttribute("type", "search");
    expect(input).toHaveAttribute("autocomplete", "off");
  });

  it("atualiza o valor digitado e dispara onValueChange", async () => {
    const user = userEvent.setup();
    const handleValueChange = vi.fn();

    const { getByLabelText } = render(<SearchBar label="Buscar itens" onValueChange={handleValueChange} />);

    const input = getByLabelText("Buscar itens");

    await user.type(input, "monitor");

    expect(input).toHaveValue("monitor");
    expect(handleValueChange).toHaveBeenLastCalledWith("monitor");
  });

  it("submete a busca com o valor atual ao clicar no botao", async () => {
    const user = userEvent.setup();
    const handleSearch = vi.fn();

    const { getByLabelText, getByRole } = render(
      <SearchBar label="Buscar catalogo" onSearch={handleSearch} />,
    );

    const input = getByLabelText("Buscar catalogo");

    await user.type(input, "teclado");
    await user.click(getByRole("button", { name: "Buscar" }));

    expect(handleSearch).toHaveBeenCalledWith(
      expect.objectContaining({
        value: "teclado",
      }),
      expect.anything(),
    );
  });

  it("prioriza a mensagem de erro na descricao acessivel do campo", () => {
    const { getByLabelText } = render(
      <SearchBar
        description="Busque pelo nome ou codigo."
        errorMessage="Informe um termo de busca valido."
        invalid
        label="Buscar pedido"
      />,
    );

    const input = getByLabelText("Buscar pedido");

    expect(input).toHaveAccessibleDescription("Informe um termo de busca valido.");
    expect(input).toHaveAttribute("aria-invalid", "true");
  });

  it("usa um nome acessivel padrao quando o label nao e informado", () => {
    const { getByRole } = render(<SearchBar hideLabel placeholder="Buscar conteudo" />);

    const input = getByRole("searchbox", { name: "Buscar" });

    expect(input).toBeInTheDocument();
  });

  it("impede o submit nativo do formulario para uso em SPA", () => {
    const { getByRole } = render(<SearchBar label="Buscar conteudo" />);

    const form = getByRole("search");
    const event = new Event("submit", { bubbles: true, cancelable: true });

    form.dispatchEvent(event);

    expect(event.defaultPrevented).toBe(true);
  });
});
