import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Button } from "../../atoms";
import PageShell from "./PageShell";

describe("PageShell", () => {
  it("renderiza header, main, aside e footer quando informados", () => {
    const { container, getByRole, getByText } = render(
      <PageShell
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Atual", current: true },
        ]}
        footer={<div>Rodape</div>}
        headerActions={<Button>Acao</Button>}
        sidebar={<div>Sidebar</div>}
        title="Pagina teste"
      >
        <section>Conteudo principal</section>
      </PageShell>,
    );

    expect(getByRole("navigation", { name: "Caminho da pagina" })).toBeInTheDocument();
    expect(getByRole("heading", { name: "Pagina teste" })).toBeInTheDocument();
    expect(container.querySelector("main")).not.toBeNull();
    expect(container.querySelector("aside")).not.toBeNull();
    expect(container.querySelector("footer")).not.toBeNull();
    expect(getByText("Conteudo principal")).toBeInTheDocument();
  });
});
