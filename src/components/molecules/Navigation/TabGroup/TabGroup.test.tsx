import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import TabGroup, { type TabGroupItem } from "./TabGroup";

const ITEMS: TabGroupItem[] = [
  {
    value: "overview",
    label: "Visão geral",
    content: <div>Conteudo da visão geral</div>,
  },
  {
    value: "details",
    label: "Detalhes",
    content: <div>Conteudo dos detalhes</div>,
  },
  {
    value: "history",
    label: "Historico",
    content: <div>Conteudo do historico</div>,
  },
];

describe("TabGroup", () => {
  it("renderiza um tablist semantico com painel associado", () => {
    render(<TabGroup items={ITEMS} />);

    expect(screen.getByRole("tablist", { name: "Abas" })).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: "Visão geral" })).toHaveAttribute("aria-selected", "true");
    expect(screen.getByRole("tabpanel")).toHaveTextContent("Conteudo da visão geral");
  });

  it("permite trocar de aba por clique", async () => {
    const user = userEvent.setup();

    render(<TabGroup items={ITEMS} />);

    await user.click(screen.getByRole("tab", { name: "Detalhes" }));

    expect(screen.getByRole("tab", { name: "Detalhes" })).toHaveAttribute("aria-selected", "true");
    expect(screen.getByRole("tabpanel")).toHaveTextContent("Conteudo dos detalhes");
  });

  it("notifica onValueChange ao alterar a aba", async () => {
    const user = userEvent.setup();
    const handleValueChange = vi.fn();

    render(<TabGroup items={ITEMS} onValueChange={handleValueChange} />);

    await user.click(screen.getByRole("tab", { name: "Historico" }));

    expect(handleValueChange).toHaveBeenCalledWith("history");
  });

  it("permite navegacao por teclado", async () => {
    const user = userEvent.setup();

    render(<TabGroup items={ITEMS} />);

    const firstTab = screen.getByRole("tab", { name: "Visão geral" });
    firstTab.focus();
    await user.keyboard("{ArrowRight}");

    expect(screen.getByRole("tab", { name: "Detalhes" })).toHaveAttribute("aria-selected", "true");
  });

  it("respeita itens desabilitados", async () => {
    const user = userEvent.setup();

    render(
      <TabGroup
        items={[
          ITEMS[0],
          { ...ITEMS[1], disabled: true },
          ITEMS[2],
        ]}
      />,
    );

    await user.click(screen.getByRole("tab", { name: "Detalhes" }));

    expect(screen.getByRole("tab", { name: "Detalhes" })).toBeDisabled();
    expect(screen.getByRole("tabpanel")).toHaveTextContent("Conteudo da visão geral");
  });
});
