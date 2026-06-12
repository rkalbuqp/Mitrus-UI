import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Icon from "./Icon";

describe("Icon", () => {
  it("renderiza o nome do simbolo corretamente", () => {
    render(<Icon name="home" />);

    expect(screen.getByText("home")).toBeInTheDocument();
  });

  it("aplica a classe da variante informada", () => {
    render(<Icon name="favorite" variant="rounded" />);

    expect(screen.getByText("favorite")).toHaveClass("material-symbols-rounded");
  });

  it("aplica a classe de tamanho informada", () => {
    render(<Icon name="search" size="lg" />);

    expect(screen.getByText("search")).toHaveClass("text-[32px]");
  });

  it("aplica fontVariationSettings quando filled for true", () => {
    render(<Icon name="star" filled />);

    expect(screen.getByText("star")).toHaveStyle({
      fontVariationSettings: '"FILL" 1',
    });
  });

  it("fica decorativo por padrão", () => {
    render(<Icon name="close" />);

    expect(screen.getByText("close")).toHaveAttribute("aria-hidden", "true");
  });

  it("permite icone não decorativo", () => {
    render(<Icon name="info" decorative={false} aria-label="Informacoes" />);

    expect(screen.getByLabelText("Informacoes")).toBeInTheDocument();
  });
});
