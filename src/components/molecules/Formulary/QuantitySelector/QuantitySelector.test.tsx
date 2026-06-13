import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import QuantitySelector from "./QuantitySelector";

describe("QuantitySelector", () => {
  it("renderiza um campo de quantidade semântico com botões e spinbutton", () => {
    render(<QuantitySelector label="Quantidade" />);

    const input = screen.getByRole("spinbutton", { name: "Quantidade" });

    expect(input).toHaveValue(1);
    expect(input).toHaveAttribute("min", "1");
    expect(input).toHaveAttribute("step", "1");
    expect(screen.getByRole("button", { name: "Diminuir quantidade" })).toBeDisabled();
    expect(screen.getByRole("button", { name: "Aumentar quantidade" })).toBeEnabled();
  });

  it("incrementa e decrementa respeitando os limites", async () => {
    const user = userEvent.setup();

    render(<QuantitySelector label="Quantidade" max={3} />);

    const input = screen.getByRole("spinbutton", { name: "Quantidade" });
    const decrementButton = screen.getByRole("button", { name: "Diminuir quantidade" });
    const incrementButton = screen.getByRole("button", { name: "Aumentar quantidade" });

    await user.click(incrementButton);
    expect(input).toHaveValue(2);

    await user.click(incrementButton);
    expect(input).toHaveValue(3);
    expect(incrementButton).toBeDisabled();

    await user.click(decrementButton);
    expect(input).toHaveValue(2);
  });

  it("permite digitação manual e aplica clamp nos limites", async () => {
    const user = userEvent.setup();

    render(<QuantitySelector label="Quantidade" max={10} min={1} />);

    const input = screen.getByRole("spinbutton", { name: "Quantidade" });

    await user.clear(input);
    await user.type(input, "15");

    expect(input).toHaveValue(10);
  });

  it("prioriza a mensagem de erro na descrição acessível", () => {
    render(
      <QuantitySelector
        description="Escolha a quantidade desejada."
        errorMessage="A quantidade máxima foi atingida."
        invalid
        label="Quantidade"
      />,
    );

    const input = screen.getByRole("spinbutton", { name: "Quantidade" });

    expect(input).toHaveAccessibleDescription("A quantidade máxima foi atingida.");
    expect(input).toHaveAttribute("aria-invalid", "true");
  });

  it("dispara onValueChange com metadados da ação", async () => {
    const user = userEvent.setup();
    const handleValueChange = vi.fn();

    render(<QuantitySelector label="Quantidade" onValueChange={handleValueChange} step={2} />);

    await user.click(screen.getByRole("button", { name: "Aumentar quantidade" }));

    expect(handleValueChange).toHaveBeenLastCalledWith(
      3,
      expect.objectContaining({
        previousValue: 1,
        min: 1,
        step: 2,
        source: "increment",
      }),
    );
  });
});
