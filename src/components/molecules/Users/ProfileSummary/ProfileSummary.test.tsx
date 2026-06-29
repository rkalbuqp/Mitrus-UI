import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { Button, Text } from "../../../atoms";
import CardFooter from "../../SimpleCards/CardFooter";
import UserBadge from "../UserBadge";
import ProfileSummary from "./ProfileSummary";

describe("ProfileSummary", () => {
  it("renderiza um resumo de perfil semantico com avatar, info e acao", () => {
    const { container, getByRole, getByText } = render(
      <ProfileSummary
        action={<Button size="sm">Seguir</Button>}
        avatarProps={{ name: "Ana Souza", size: "lg", status: "online" }}
        badge={<UserBadge label="Verificada" variant="success" />}
        description="Designer de produto focada em acessibilidade."
        handle="@anasouza"
        name="Ana Souza"
      />,
    );

    expect(container.querySelector("section")).not.toBeNull();
    expect(getByRole("img", { name: "Ana Souza" })).toBeInTheDocument();
    expect(getByRole("heading", { name: "Ana Souza" })).toBeInTheDocument();
    expect(getByRole("button", { name: "Seguir" })).toBeInTheDocument();
    expect(getByText("Verificada")).toBeInTheDocument();
  });

  it("renderiza footer quando informado", () => {
    const { getByText } = render(
      <ProfileSummary
        footer={
          <CardFooter
            divider
            meta={<Text as="span">124 projetos concluidos</Text>}
            supportingText="Responde rapidamente."
          />
        }
        name="Ana Souza"
      />,
    );

    expect(getByText("124 projetos concluidos")).toBeInTheDocument();
    expect(getByText("Responde rapidamente.")).toBeInTheDocument();
  });

  it("mantem nome acessivel quando recebe children customizados", () => {
    const { container, getByText } = render(
      <ProfileSummary name="Ana Souza">
        <div>Conteudo customizado do perfil</div>
      </ProfileSummary>,
    );

    const section = container.querySelector("section");

    expect(getByText("Conteudo customizado do perfil")).toBeInTheDocument();
    expect(section).toHaveAttribute("aria-labelledby");
  });
});
