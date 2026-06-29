import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import UserBadge from "./UserBadge";

describe("UserBadge", () => {
  it("renderiza um badge com o texto informado", () => {
    const { getByText } = render(<UserBadge label="Verificado" variant="success" />);

    expect(getByText("Verificado")).toBeInTheDocument();
  });

  it("renderiza um link quando href e informado", () => {
    const { getByRole } = render(<UserBadge href="/perfil/ana" label="Perfil publico" />);

    expect(getByRole("link", { name: "Perfil publico" })).toHaveAttribute("href", "/perfil/ana");
  });
});
