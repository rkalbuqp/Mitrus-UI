import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import UserAvatar from "./UserAvatar";

describe("UserAvatar", () => {
  it("renderiza um avatar com rotulo acessivel", () => {
    const { getByRole } = render(
      <UserAvatar avatarProps={{ name: "Ana Souza", size: "lg", status: "online" }} />,
    );

    expect(getByRole("img", { name: "Ana Souza" })).toBeInTheDocument();
  });

  it("usa figure e figcaption quando recebe caption", () => {
    const { container, getByText } = render(
      <UserAvatar
        avatarProps={{ name: "Ana Souza", size: "lg" }}
        caption="Disponivel para novos projetos."
      />,
    );

    expect(container.querySelector("figure")).not.toBeNull();
    expect(getByText("Disponivel para novos projetos.")).toBeInTheDocument();
  });
});
