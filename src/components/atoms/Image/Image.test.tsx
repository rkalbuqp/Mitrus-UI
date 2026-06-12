import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Image from "./Image";

describe("Image", () => {
  it("renderiza uma imagem semântica com src e alt", () => {
    render(<Image alt="Paisagem" src="https://example.com/paisagem.jpg" />);

    const image = screen.getByRole("img", { name: "Paisagem" });

    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "https://example.com/paisagem.jpg");
  });

  it("renderiza figure e figcaption quando caption é informado", () => {
    const { container } = render(
      <Image alt="Montanha" caption="Vista da montanha ao amanhecer" src="https://example.com/montanha.jpg" />,
    );

    expect(container.querySelector("figure")).toBeInTheDocument();
    expect(screen.getByText("Vista da montanha ao amanhecer")).toBeInTheDocument();
  });

  it("aplica classes de ratio, rounded e bordered", () => {
    render(
      <Image
        alt="Produto"
        bordered
        ratio="square"
        rounded="lg"
        src="https://example.com/produto.jpg"
      />,
    );

    const image = screen.getByRole("img", { name: "Produto" });

    expect(image.className).toContain("aspect-square");
    expect(image.className).toContain("rounded-xl");
    expect(image.className).toContain("border-border-neutral-default");
  });

  it("aplica classes de size e fit", () => {
    render(<Image alt="Banner" fit="contain" size="lg" src="https://example.com/banner.jpg" />);

    const image = screen.getByRole("img", { name: "Banner" });

    expect(image.className).toContain("w-64");
    expect(image.className).toContain("object-contain");
  });

  it("aplica fullWidth na imagem e no figure quando há caption", () => {
    const { container } = render(
      <Image
        alt="Hero"
        caption="Imagem principal"
        fullWidth
        src="https://example.com/hero.jpg"
      />,
    );

    const image = screen.getByRole("img", { name: "Hero" });
    const figure = container.querySelector("figure");

    expect(image.className).toContain("w-full");
    expect(figure?.className).toContain("w-full");
  });

  it("permite imagem decorativa com alt vazio", () => {
    const { container } = render(<Image alt="" src="https://example.com/decorativa.jpg" />);

    expect(container.querySelector('img[alt=""]')).toBeInTheDocument();
  });
});
