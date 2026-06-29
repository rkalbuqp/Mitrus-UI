import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Button } from "../../../atoms";
import CardActions from "./CardActions";

describe("CardActions", () => {
  it("renderiza um grupo semantico de acoes", () => {
    const { getByRole } = render(
      <CardActions>
        <Button>Comprar</Button>
        <Button variant="secondary">Salvar</Button>
      </CardActions>,
    );

    expect(getByRole("group", { name: "Acoes do card" })).toBeInTheDocument();
  });

  it("aceita um nome acessivel customizado", () => {
    const { getByRole } = render(
      <CardActions aria-label="Acoes do produto">
        <Button>Comprar</Button>
      </CardActions>,
    );

    expect(getByRole("group", { name: "Acoes do produto" })).toBeInTheDocument();
  });
});
