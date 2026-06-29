import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import SearchInput from "./SearchInput";

describe("SearchInput", () => {
  it("renderiza um campo de busca semantico com label associado", () => {
    const { getByLabelText } = render(<SearchInput label="Buscar itens" />);

    const input = getByLabelText("Buscar itens");

    expect(input).toHaveAttribute("type", "search");
    expect(input).toHaveAttribute("autocomplete", "off");
  });

  it("atualiza o valor digitado e dispara onValueChange", async () => {
    const user = userEvent.setup();
    const handleValueChange = vi.fn();
    const { getByLabelText } = render(
      <SearchInput label="Buscar produtos" onValueChange={handleValueChange} />,
    );

    const input = getByLabelText("Buscar produtos");

    await user.type(input, "monitor");

    expect(input).toHaveValue("monitor");
    expect(handleValueChange).toHaveBeenLastCalledWith("monitor");
  });

  it("prioriza a mensagem de erro na descricao acessivel do campo", () => {
    const { getByLabelText } = render(
      <SearchInput
        description="Busque pelo nome ou codigo."
        errorMessage="Informe um termo valido para continuar."
        invalid
        label="Buscar pedido"
      />,
    );

    const input = getByLabelText("Buscar pedido");

    expect(input).toHaveAccessibleDescription("Informe um termo valido para continuar.");
    expect(input).toHaveAttribute("aria-invalid", "true");
  });

  it("usa um nome acessivel padrao quando o label nao e informado", () => {
    const { getByRole } = render(<SearchInput hideLabel placeholder="Buscar conteudo" />);

    expect(getByRole("searchbox", { name: "Buscar" })).toBeInTheDocument();
  });

  it("respeita os estados disabled e required", () => {
    const { getByLabelText } = render(<SearchInput disabled label="Buscar itens" required />);

    const input = getByLabelText("Buscar itens");

    expect(input).toBeDisabled();
    expect(input).toBeRequired();
  });
});
