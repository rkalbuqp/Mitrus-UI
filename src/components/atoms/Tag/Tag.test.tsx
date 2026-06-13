import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Tag from "./Tag";

describe("Tag", () => {
  it("renderiza o label informado", () => {
    render(<Tag label="Novo" />);

    expect(screen.getByText("Novo")).toBeInTheDocument();
  });

  it("aplica a variante de cor", () => {
    render(<Tag label="Sucesso" variant="success" />);

    const content = screen.getByText("Sucesso");
    const tag = content.parentElement;

    expect(tag.className).toContain("bg-surface-success");
    expect(tag.className).toContain("text-content-success");
  });

  it("aplica o tamanho informado", () => {
    render(<Tag label="Medium" size="lg" />);

    const content = screen.getByText("Medium");
    const tag = content.parentElement;

    expect(tag.className).toContain("min-h-7");
    expect(content.className).toContain("text-087");
  });

  it("permite controlar o arredondamento", () => {
    render(<Tag label="Quadrada" rounded={false} />);

    const tag = screen.getByText("Quadrada").parentElement;

    expect(tag.className).toContain("rounded-md");
  });

  it("aplica o estilo numérico quando numeric é true", () => {
    render(<Tag label={12} numeric />);

    const content = screen.getByText("12");
    const tag = content.parentElement;

    expect(content.className).toContain("tabular-nums");
    expect(tag.className).toContain("min-w-6");
  });

  it("permite className adicional", () => {
    render(<Tag className="uppercase" label="custom" />);

    expect(screen.getByText("custom").parentElement?.className).toContain("uppercase");
  });
});
