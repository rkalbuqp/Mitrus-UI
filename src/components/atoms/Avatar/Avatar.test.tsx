import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Avatar from "./Avatar";

describe("Avatar", () => {
  it("renderiza a imagem quando src é informado", () => {
    render(<Avatar src="https://example.com/avatar.png" alt="Foto do usuario" />);

    expect(screen.getByAltText("Foto do usuario")).toBeInTheDocument();
  });

  it("renderiza as iniciais quando name é informado e não há imagem", () => {
    render(<Avatar name="Maria Silva" />);

    expect(screen.getByText("MS")).toBeInTheDocument();
  });

  it("renderiza fallback customizado quando informado", () => {
    render(<Avatar fallback={<span>FS</span>} />);

    expect(screen.getByText("FS")).toBeInTheDocument();
  });

  it("renderiza o ícone padrão quando não há src, name ou fallback", () => {
    render(<Avatar />);

    expect(screen.getByText("person")).toBeInTheDocument();
  });

  it("aplica as classes de size e shape", () => {
    render(<Avatar name="Avatar" size="xl" shape="rounded" />);

    const avatar = screen.getByRole("img", { name: "Avatar" });

    expect(avatar.className).toContain("h-16");
    expect(avatar.className).toContain("rounded-xl");
  });

  it("renderiza indicador de status quando informado", () => {
    render(<Avatar name="Avatar" status="online" />);

    expect(screen.getByTestId("avatar-status")).toBeInTheDocument();
  });
});
