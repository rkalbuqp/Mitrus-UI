import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import UserBadge from "../UserBadge";
import UserInfo from "./UserInfo";

describe("UserInfo", () => {
  it("renderiza nome, handle e descricao", () => {
    const { getByRole, getByText } = render(
      <UserInfo
        description="Designer de produto focada em acessibilidade."
        handle="@anasouza"
        name="Ana Souza"
      />,
    );

    expect(getByRole("heading", { name: "Ana Souza" })).toBeInTheDocument();
    expect(getByText("@anasouza")).toBeInTheDocument();
    expect(getByText("Designer de produto focada em acessibilidade.")).toBeInTheDocument();
  });

  it("renderiza badge e link no nome quando informados", () => {
    const { getByRole, getByText } = render(
      <UserInfo
        badge={<UserBadge label="Verificada" variant="success" />}
        name="Ana Souza"
        nameHref="/perfil/ana-souza"
      />,
    );

    expect(getByRole("link", { name: "Ana Souza" })).toHaveAttribute("href", "/perfil/ana-souza");
    expect(getByText("Verificada")).toBeInTheDocument();
  });
});
