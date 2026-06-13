import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Tooltip from "./Tooltip";

describe("Tooltip", () => {
  it("renderiza conteúdo com role tooltip", () => {
    render(
      <Tooltip content="Informação adicional">
        <button type="button">Ação</button>
      </Tooltip>,
    );

    expect(screen.getByRole("tooltip")).toHaveTextContent("Informação adicional");
  });

  it("liga o trigger ao tooltip com aria-describedby", () => {
    render(
      <Tooltip content="Detalhes">
        <button type="button">Detalhes</button>
      </Tooltip>,
    );

    const trigger = screen.getByRole("button", { name: "Detalhes" });
    const tooltip = screen.getByRole("tooltip");

    expect(trigger).toHaveAttribute("aria-describedby", tooltip.getAttribute("id"));
  });

  it("preserva aria-describedby existente no trigger", () => {
    render(
      <Tooltip content="Ajuda">
        <button aria-describedby="field-help" type="button">
          Campo
        </button>
      </Tooltip>,
    );

    const trigger = screen.getByRole("button", { name: "Campo" });
    const tooltipId = screen.getByRole("tooltip").getAttribute("id");

    expect(trigger.getAttribute("aria-describedby")).toContain("field-help");
    expect(trigger.getAttribute("aria-describedby")).toContain(tooltipId ?? "");
  });

  it("aplica classes de placement e size", () => {
    render(
      <Tooltip content="Tooltip" placement="right" size="lg">
        <button type="button">Info</button>
      </Tooltip>,
    );

    const tooltip = screen.getByRole("tooltip");

    expect(tooltip.className).toContain("left-full");
    expect(tooltip.className).toContain("text-100");
  });

  it("permite controlar visibilidade com open", () => {
    render(
      <Tooltip content="Sempre visível" open>
        <button type="button">Abrir</button>
      </Tooltip>,
    );

    expect(screen.getByRole("tooltip").className).toContain("opacity-100");
  });

  it("aceita classes adicionais no wrapper e no tooltip", () => {
    const { container } = render(
      <Tooltip className="z-10" content="Com classe" tooltipClassName="uppercase">
        <button type="button">Classe</button>
      </Tooltip>,
    );

    expect(container.firstElementChild?.className).toContain("z-10");
    expect(screen.getByRole("tooltip").className).toContain("uppercase");
  });
});
