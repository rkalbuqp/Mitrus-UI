import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import TextArea from "./TextArea";

describe("TextArea", () => {
  it("renderiza um textarea semântico com label associado", () => {
    render(<TextArea label="Mensagem" />);

    expect(screen.getByRole("textbox", { name: "Mensagem" })).toBeInTheDocument();
  });

  it("associa a descrição ao campo", () => {
    render(<TextArea description="Escreva uma mensagem detalhada" label="Mensagem" />);

    expect(screen.getByRole("textbox", { name: "Mensagem" })).toHaveAccessibleDescription(
      "Escreva uma mensagem detalhada",
    );
  });

  it("renderiza placeholder e respeita o valor digitado", async () => {
    const user = userEvent.setup();

    render(<TextArea label="Mensagem" placeholder="Digite aqui" />);

    const textArea = screen.getByRole("textbox", { name: "Mensagem" });

    expect(textArea).toHaveAttribute("placeholder", "Digite aqui");

    await user.type(textArea, "Ola mundo");

    expect(textArea).toHaveValue("Ola mundo");
  });

  it("dispara onChange ao digitar", async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();

    render(<TextArea label="Mensagem" onChange={handleChange} />);

    await user.type(screen.getByRole("textbox", { name: "Mensagem" }), "abc");

    expect(handleChange).toHaveBeenCalled();
  });

  it("aplica classes de size, invalid e resize", () => {
    render(<TextArea invalid label="Mensagem" resize="none" size="lg" />);

    const textArea = screen.getByRole("textbox", { name: "Mensagem" });

    expect(textArea.className).toContain("min-h-32");
    expect(textArea.className).toContain("border-border-critical");
    expect(textArea.className).toContain("resize-none");
  });

  it("respeita o estado disabled", () => {
    render(<TextArea disabled label="Mensagem" />);

    expect(screen.getByRole("textbox", { name: "Mensagem" })).toBeDisabled();
  });
});
