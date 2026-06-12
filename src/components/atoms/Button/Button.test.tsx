import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import Icon from "../Icon";
import Button from "./Button";

describe("Button", () => {
  it("renderiza o conteúdo corretamente", () => {
    render(<Button>Salvar</Button>);

    expect(screen.getByRole("button", { name: "Salvar" })).toBeInTheDocument();
  });

  it("aplica o type button por padrão", () => {
    render(<Button>Enviar</Button>);

    expect(screen.getByRole("button", { name: "Enviar" })).toHaveAttribute("type", "button");
  });

  it("respeita o type informado", () => {
    render(<Button type="submit">Enviar</Button>);

    expect(screen.getByRole("button", { name: "Enviar" })).toHaveAttribute("type", "submit");
  });

  it("dispara onClick quando clicado", async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();

    render(<Button onClick={handleClick}>Clique</Button>);

    await user.click(screen.getByRole("button", { name: "Clique" }));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("fica desabilitado quando disabled for true", () => {
    render(<Button disabled>Desabilitado</Button>);

    expect(screen.getByRole("button", { name: "Desabilitado" })).toBeDisabled();
  });

  it("fica desabilitado e com aria-busy quando loading for true", () => {
    render(<Button loading>Carregando</Button>);

    const button = screen.getByRole("button", { name: "Carregando" });

    expect(button).toBeDisabled();
    expect(button).toHaveAttribute("aria-busy", "true");
    expect(button).toHaveAttribute("data-loading", "true");
  });

  it("renderiza ícones à esquerda e à direita", () => {
    render(
      <Button
        leftIcon={<Icon name="arrow_back" />}
        rightIcon={<Icon name="arrow_forward" />}
      >
        Ação
      </Button>,
    );

    expect(screen.getByText("arrow_back")).toBeInTheDocument();
    expect(screen.getByText("arrow_forward")).toBeInTheDocument();
  });

  it("aplica classes de variante e tamanho", () => {
    render(
      <Button variant="secondary" size="lg">
        Continuar
      </Button>,
    );

    const button = screen.getByRole("button", { name: "Continuar" });

    expect(button.className).toContain("bg-fill-neutral-default");
    expect(button.className).toContain("min-h-11");
  });

  it("aplica largura total e arredondamento completo quando informado", () => {
    render(
      <Button fullWidth rounded>
        Comprar
      </Button>,
    );

    const button = screen.getByRole("button", { name: "Comprar" });

    expect(button.className).toContain("w-full");
    expect(button.className).toContain("rounded-full");
  });

  it("aplica aria-pressed quando pressed for true", () => {
    render(<Button pressed>Selecionado</Button>);

    expect(screen.getByRole("button", { name: "Selecionado" })).toHaveAttribute("aria-pressed", "true");
  });
});
