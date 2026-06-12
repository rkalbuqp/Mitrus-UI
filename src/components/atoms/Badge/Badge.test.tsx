import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Icon from "../Icon";
import Badge from "./Badge";

describe("Badge", () => {
  it("renderiza o conteúdo informado", () => {
    render(<Badge>Novo</Badge>);

    expect(screen.getByText("Novo")).toBeInTheDocument();
  });

  it("aplica as classes da variante e aparência", () => {
    render(
      <Badge appearance="solid" variant="success">
        Ativo
      </Badge>,
    );

    const badge = screen.getByText("Ativo").parentElement;

    expect(badge?.className).toContain("bg-fill-success-default");
    expect(badge?.className).toContain("text-content-inverse");
  });

  it("renderiza o indicador dot quando informado", () => {
    const { container } = render(<Badge dot>Online</Badge>);

    expect(container.querySelector('[aria-hidden="true"]')).toBeInTheDocument();
  });

  it("renderiza ícones à esquerda e à direita", () => {
    render(
      <Badge leftIcon={<Icon name="check" />} rightIcon={<Icon name="close" />}>
        Status
      </Badge>,
    );

    expect(screen.getByText("check")).toBeInTheDocument();
    expect(screen.getByText("close")).toBeInTheDocument();
  });

  it("aplica classes de size e rounded", () => {
    render(
      <Badge rounded={false} size="lg">
        Beta
      </Badge>,
    );

    const badge = screen.getByText("Beta").parentElement;

    expect(badge?.className).toContain("min-h-7");
    expect(badge?.className).toContain("rounded-md");
  });
});
