import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Button, Text } from "../../../atoms";
import CardActions from "../CardActions";
import CardFooter from "../CardFooter";
import MediaCard from "./MediaCard";

describe("MediaCard", () => {
  it("renderiza um card semantico com imagem, titulo e descricao", () => {
    const { container, getByRole, getByText } = render(
      <MediaCard
        description="Descricao resumida do item apresentado."
        mediaAlt="Produto apoiado sobre uma mesa"
        mediaSrc="https://example.com/produto.jpg"
        title="Produto em destaque"
      />,
    );

    const article = container.querySelector("article");

    expect(article).not.toBeNull();
    expect(getByRole("img", { name: "Produto apoiado sobre uma mesa" })).toBeInTheDocument();
    expect(getByRole("heading", { name: "Produto em destaque" })).toBeInTheDocument();
    expect(getByText("Descricao resumida do item apresentado.")).toBeInTheDocument();
  });

  it("renderiza footer e acoes compostas dentro do card", () => {
    const { getByRole, getByText } = render(
      <MediaCard
        actions={
          <CardActions>
            <Button>Comprar</Button>
          </CardActions>
        }
        footer={
          <CardFooter
            action={<Button size="sm">Detalhes</Button>}
            meta={<Text as="span">R$ 299,90</Text>}
          />
        }
        mediaAlt="Produto apoiado sobre uma mesa"
        mediaSrc="https://example.com/produto.jpg"
        title="Produto em destaque"
      />,
    );

    expect(getByText("R$ 299,90")).toBeInTheDocument();
    expect(getByRole("button", { name: "Comprar" })).toBeInTheDocument();
    expect(getByRole("button", { name: "Detalhes" })).toBeInTheDocument();
  });

  it("mantem nome acessivel quando recebe um header customizado", () => {
    const { container, getByText } = render(
      <MediaCard
        header={<div>Header customizado</div>}
        mediaAlt="Produto apoiado sobre uma mesa"
        mediaSrc="https://example.com/produto.jpg"
        title="Produto em destaque"
      />,
    );

    const article = container.querySelector("article");

    expect(getByText("Header customizado")).toBeInTheDocument();
    expect(article).toHaveAttribute("aria-labelledby");
  });
});
