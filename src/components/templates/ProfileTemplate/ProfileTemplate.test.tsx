import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Text } from "../../atoms";
import { ProfileSummary } from "../../molecules";
import ProfileTemplate from "./ProfileTemplate";

describe("ProfileTemplate", () => {
  it("renderiza resumo e secoes do perfil", () => {
    const { container, getByRole, getByText } = render(
      <ProfileTemplate
        sections={[
          {
            title: "Sobre",
            content: <Text>Conteudo da secao.</Text>,
          },
        ]}
        summary={<ProfileSummary name="Ana Souza" />}
        title="Perfil"
      />,
    );

    expect(getByRole("heading", { name: "Perfil" })).toBeInTheDocument();
    expect(getByRole("heading", { name: "Ana Souza" })).toBeInTheDocument();
    expect(getByText("Sobre")).toBeInTheDocument();
    expect(container.querySelector("section")).not.toBeNull();
  });

  it("renderiza sidebar quando informada", () => {
    const { container, getByText } = render(
      <ProfileTemplate
        sidebar={<div>Sidebar do perfil</div>}
        summary={<ProfileSummary name="Ana Souza" />}
      />,
    );

    expect(container.querySelector("aside")).not.toBeNull();
    expect(getByText("Sidebar do perfil")).toBeInTheDocument();
  });
});
