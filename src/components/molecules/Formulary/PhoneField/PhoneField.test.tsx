import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import PhoneField from "./PhoneField";

describe("PhoneField", () => {
  it("renderiza select de país e campo de telefone com Brasil como padrão", () => {
    render(<PhoneField label="Telefone" />);

    expect(screen.getByRole("combobox", { name: "Pais e DDI" })).toHaveValue("BR");

    const input = screen.getByRole("textbox", { name: "Telefone" });

    expect(input).toHaveAttribute("type", "tel");
    expect(input).toHaveAttribute("placeholder", "(DDD) 9 0000-0000");
  });

  it("formata o telefone do Brasil enquanto o usuário digita", async () => {
    const user = userEvent.setup();

    render(<PhoneField label="Telefone celular" />);

    const input = screen.getByRole("textbox", { name: "Telefone celular" });

    await user.type(input, "11912345678");

    expect(input).toHaveValue("(11) 91234-5678");
  });

  it("atualiza o país selecionado e ajusta o placeholder", async () => {
    const user = userEvent.setup();

    render(<PhoneField label="Telefone" />);

    await user.selectOptions(screen.getByRole("combobox", { name: "Pais e DDI" }), "US");

    expect(screen.getByRole("combobox", { name: "Pais e DDI" })).toHaveValue("US");
    expect(screen.getByRole("textbox", { name: "Telefone" })).toHaveAttribute("placeholder", "000 000 0000");
  });

  it("prioriza a mensagem de erro na descrição acessível", () => {
    render(
      <PhoneField
        description="Digite um telefone válido."
        errorMessage="O telefone é obrigatório."
        invalid
        label="Telefone"
      />,
    );

    const input = screen.getByRole("textbox", { name: "Telefone" });

    expect(input).toHaveAccessibleDescription("O telefone é obrigatório.");
    expect(input).toHaveAttribute("aria-invalid", "true");
  });

  it("dispara onValueChange com metadados do país e DDI", async () => {
    const user = userEvent.setup();
    const handleValueChange = vi.fn();

    render(<PhoneField label="Telefone" onValueChange={handleValueChange} />);

    await user.type(screen.getByRole("textbox", { name: "Telefone" }), "11912345678");

    expect(handleValueChange).toHaveBeenCalled();
    expect(handleValueChange).toHaveBeenLastCalledWith(
      "(11) 91234-5678",
      expect.objectContaining({
        country: "BR",
        dialCode: "+55",
      }),
    );
  });
});
