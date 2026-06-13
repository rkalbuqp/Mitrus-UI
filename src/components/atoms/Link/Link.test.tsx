import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Icon from "../Icon";
import Link from "./Link";

describe("Link", () => {
  it("renderiza uma âncora semântica com href", () => {
    render(<Link href="/docs">Documentação</Link>);

    const link = screen.getByRole("link", { name: "Documentação" });

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/docs");
  });

  it("aplica classes de variant e underline", () => {
    render(
      <Link href="/suporte" underline="always" variant="neutral">
        Suporte
      </Link>,
    );

    const link = screen.getByRole("link", { name: "Suporte" });

    expect(link.className).toContain("text-content-neutral-primary");
    expect(link.className).toContain("underline");
  });

  it("aplica classes de size", () => {
    render(
      <Link href="/blog" size="lg">
        Blog
      </Link>,
    );

    const content = screen.getByText("Blog");

    expect(content.className).toContain("text-125");
  });

  it("renderiza ícones à esquerda e à direita", () => {
    render(
      <Link
        href="/voltar"
        leftIcon={<Icon name="arrow_back" />}
        rightIcon={<Icon name="open_in_new" />}
      >
        Voltar
      </Link>,
    );

    expect(screen.getByText("arrow_back")).toBeInTheDocument();
    expect(screen.getByText("open_in_new")).toBeInTheDocument();
  });

  it("permite atributos nativos da âncora", () => {
    render(
      <Link href="https://example.com" rel="noreferrer" target="_blank">
        Externo
      </Link>,
    );

    const link = screen.getByRole("link", { name: "Externo" });

    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noreferrer");
  });
});
