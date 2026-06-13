import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Text from "./Text";

describe("Text", () => {
  it("renderiza como parágrafo por padrão", () => {
    const { container } = render(<Text>Texto padrão</Text>);

    expect(container.querySelector('[data-slot="text-root"]')?.tagName).toBe("P");
    expect(screen.getByText("Texto padrão")).toBeInTheDocument();
  });

  it("permite escolher a tag semântica com as", () => {
    const { container } = render(<Text as="span">Inline</Text>);

    expect(container.querySelector('[data-slot="text-root"]')?.tagName).toBe("SPAN");
  });

  it("aplica tone e alinhamento no elemento raiz", () => {
    const { container } = render(
      <Text align="center" tone="success">
        Sucesso
      </Text>,
    );

    const root = container.querySelector('[data-slot="text-root"]');

    expect(root?.className).toContain("text-content-success");
    expect(root?.className).toContain("text-center");
  });

  it("aplica size e weight no conteúdo", () => {
    render(
      <Text size="xl" weight="bold">
        Destaque
      </Text>,
    );

    const content = screen.getByText("Destaque");

    expect(content.className).toContain("text-150");
    expect(content.className).toContain("font-bold");
  });

  it("aplica italic e truncate", () => {
    render(
      <Text italic truncate>
        Texto longo
      </Text>,
    );

    const content = screen.getByText("Texto longo");

    expect(content.className).toContain("italic");
    expect(content.className).toContain("truncate");
  });

  it("permite className no root e no conteúdo", () => {
    const { container } = render(
      <Text className="uppercase" contentClassName="tracking-wide">
        Custom
      </Text>,
    );

    const root = container.querySelector('[data-slot="text-root"]');
    const content = screen.getByText("Custom");

    expect(root?.className).toContain("uppercase");
    expect(content.className).toContain("tracking-wide");
  });
});
