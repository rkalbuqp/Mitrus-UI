import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Badge, Tag } from "../../../atoms";
import ProductCardHeader from "./ProductCardHeader";

describe("ProductCardHeader", () => {
  it("renderiza um header semantico com titulo, subtitulo e descricao", () => {
    const { container, getByRole, getByText } = render(
      <ProductCardHeader
        description="Descricao resumida do produto."
        eyebrow="Eletronicos"
        subtitle="Modelo premium com Bluetooth 5.3."
        title="Headphone Sem Fio"
      />,
    );

    expect(container.querySelector("header")).not.toBeNull();
    expect(getByRole("heading", { name: "Headphone Sem Fio" })).toBeInTheDocument();
    expect(getByText("Modelo premium com Bluetooth 5.3.")).toBeInTheDocument();
    expect(getByText("Descricao resumida do produto.")).toBeInTheDocument();
  });

  it("renderiza badge, tag e link quando informados", () => {
    const { getByRole, getByText } = render(
      <ProductCardHeader
        badge={<Badge variant="success">Novo</Badge>}
        tag={<Tag label="Frete gratis" variant="accent" />}
        title="Headphone Sem Fio"
        titleHref="/produtos/headphone-sem-fio"
      />,
    );

    expect(getByRole("link", { name: "Headphone Sem Fio" })).toHaveAttribute(
      "href",
      "/produtos/headphone-sem-fio",
    );
    expect(getByText("Novo")).toBeInTheDocument();
    expect(getByText("Frete gratis")).toBeInTheDocument();
  });
});
