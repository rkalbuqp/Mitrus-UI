import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Skeleton from "./Skeleton";

describe("Skeleton", () => {
  it("renderiza como elemento decorativo por padrão", () => {
    const { container } = render(<Skeleton />);

    const skeleton = container.firstElementChild;

    expect(skeleton).toHaveAttribute("aria-hidden", "true");
    expect(skeleton).not.toHaveAttribute("role");
  });

  it("pode anunciar carregamento quando decorative é false", () => {
    render(<Skeleton decorative={false} loadingLabel="Carregando conteúdo" />);

    expect(screen.getByRole("status", { name: "Carregando conteúdo" })).toBeInTheDocument();
  });

  it("aplica classes de variant e size", () => {
    const { container } = render(<Skeleton size="lg" variant="circle" />);

    const skeleton = container.firstElementChild;

    expect(skeleton?.className).toContain("h-14");
    expect(skeleton?.className).toContain("rounded-full");
  });

  it("aplica fullWidth", () => {
    const { container } = render(<Skeleton fullWidth />);

    const skeleton = container.firstElementChild;

    expect(skeleton?.className).toContain("w-full");
  });

  it("permite customizar width e height via style", () => {
    const { container } = render(<Skeleton height={48} width={120} />);

    const skeleton = container.firstElementChild as HTMLElement;

    expect(skeleton.style.width).toBe("120px");
    expect(skeleton.style.height).toBe("48px");
  });

  it("permite desabilitar a animação", () => {
    const { container } = render(<Skeleton animated={false} />);

    const skeleton = container.firstElementChild;

    expect(skeleton?.className).not.toContain("animate-pulse");
  });
});
