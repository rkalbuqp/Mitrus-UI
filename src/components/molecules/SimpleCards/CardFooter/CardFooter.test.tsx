import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Button, Text } from "../../../atoms";
import CardFooter from "./CardFooter";

describe("CardFooter", () => {
  it("renderiza um rodape semantico com meta, acao e texto de apoio", () => {
    const { container, getByText, getByRole } = render(
      <CardFooter
        action={<Button size="sm">Comprar</Button>}
        meta={<Text as="span">R$ 199,90</Text>}
        supportingText="Entrega em ate 2 dias."
      />,
    );

    expect(container.querySelector("footer")).not.toBeNull();
    expect(getByText("R$ 199,90")).toBeInTheDocument();
    expect(getByRole("button", { name: "Comprar" })).toBeInTheDocument();
    expect(getByText("Entrega em ate 2 dias.")).toBeInTheDocument();
  });

  it("permite composicao livre via children", () => {
    const { getByText } = render(
      <CardFooter>
        <div>Conteudo customizado do rodape</div>
      </CardFooter>,
    );

    expect(getByText("Conteudo customizado do rodape")).toBeInTheDocument();
  });
});
