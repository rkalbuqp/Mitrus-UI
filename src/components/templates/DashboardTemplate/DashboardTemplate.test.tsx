import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { TabGroup } from "../../molecules";
import DashboardTemplate from "./DashboardTemplate";

describe("DashboardTemplate", () => {
  it("renderiza visao geral, navegacao e conteudo principal", () => {
    const { getByRole, getByText } = render(
      <DashboardTemplate
        navigation={
          <TabGroup
            items={[
              { label: "Resumo", value: "resumo", content: <div>Conteudo da aba</div> },
              { label: "Vendas", value: "vendas", content: <div>Outro conteudo</div> },
            ]}
          />
        }
        overview={<div>Indicador 1</div>}
        title="Dashboard"
      >
        <div>Conteudo do painel</div>
      </DashboardTemplate>,
    );

    expect(getByRole("heading", { name: "Dashboard" })).toBeInTheDocument();
    expect(getByText("Indicador 1")).toBeInTheDocument();
    expect(getByRole("tab", { name: "Resumo" })).toBeInTheDocument();
    expect(getByText("Conteudo do painel")).toBeInTheDocument();
  });

  it("renderiza sidebar quando informada", () => {
    const { container, getByText } = render(
      <DashboardTemplate sidebar={<div>Sidebar do painel</div>}>
        <div>Conteudo</div>
      </DashboardTemplate>,
    );

    expect(container.querySelector("aside")).not.toBeNull();
    expect(getByText("Sidebar do painel")).toBeInTheDocument();
  });
});
