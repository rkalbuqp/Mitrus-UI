import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import RadioGroup from "./RadioGroup";

const items = [
  {
    value: "pix",
    label: "Pix",
    description: "Pagamento instantaneo.",
  },
  {
    value: "card",
    label: "Cartao",
    description: "Credito ou debito.",
  },
  {
    value: "boleto",
    label: "Boleto",
  },
];

describe("RadioGroup", () => {
  it("renderiza um grupo semântico com escolha única", () => {
    render(<RadioGroup items={items} label="Forma de pagamento" />);

    const fieldset = screen.getByRole("group", { name: "Forma de pagamento" });
    const radios = screen.getAllByRole("radio");

    expect(fieldset.tagName).toBe("FIELDSET");
    expect(radios).toHaveLength(3);
    radios.forEach((radio) => {
      expect(radio).toHaveAttribute("name", radios[0].getAttribute("name"));
    });
  });

  it("permite selecionar apenas uma opção por vez", async () => {
    const user = userEvent.setup();

    render(<RadioGroup defaultValue="pix" items={items} label="Forma de pagamento" />);

    const pix = screen.getByRole("radio", { name: "Pix" });
    const cartao = screen.getByRole("radio", { name: "Cartao" });

    expect(pix).toBeChecked();
    expect(cartao).not.toBeChecked();

    await user.click(cartao);

    expect(cartao).toBeChecked();
    expect(pix).not.toBeChecked();
  });

  it("prioriza a mensagem de erro na descrição acessível", () => {
    render(
      <RadioGroup
        description="Escolha uma forma de pagamento."
        errorMessage="Selecione uma opção para continuar."
        invalid
        items={items}
        label="Forma de pagamento"
      />,
    );

    const radio = screen.getByRole("radio", { name: "Pix" });

    expect(radio).toHaveAccessibleDescription("Selecione uma opção para continuar. Pagamento instantaneo.");
    expect(screen.getByRole("group", { name: "Forma de pagamento" })).toHaveAttribute("aria-invalid", "true");
  });

  it("dispara onValueChange com o valor da opção escolhida", async () => {
    const user = userEvent.setup();
    const handleValueChange = vi.fn();

    render(<RadioGroup items={items} label="Forma de pagamento" onValueChange={handleValueChange} />);

    await user.click(screen.getByRole("radio", { name: "Cartao" }));

    expect(handleValueChange).toHaveBeenLastCalledWith("card");
  });

  it("respeita os estados disabled e required", () => {
    render(<RadioGroup disabled items={items} label="Forma de pagamento" required />);

    const radios = screen.getAllByRole("radio");

    radios.forEach((radio) => {
      expect(radio).toBeDisabled();
    });

    expect(radios[0]).toBeRequired();
  });
});
