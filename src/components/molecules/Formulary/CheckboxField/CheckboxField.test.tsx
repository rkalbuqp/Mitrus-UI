import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";

import CheckboxField from "./CheckboxField";

describe("CheckboxField", () => {
  const items = [
    { id: "email", label: "E-mail" },
    { id: "sms", label: "SMS" },
    { id: "push", label: "Push", disabled: true },
  ];

  it("renderiza o checkbox pai e seus filhos", () => {
    render(<CheckboxField description="Selecione seus canais" items={items} label="Canais de contato" />);

    expect(screen.getByRole("checkbox", { name: "Canais de contato" })).toBeInTheDocument();
    expect(screen.getByRole("checkbox", { name: "E-mail" })).toBeInTheDocument();
    expect(screen.getByRole("checkbox", { name: "SMS" })).toBeInTheDocument();
    expect(screen.getByRole("checkbox", { name: "Push" })).toBeDisabled();
  });

  it("mostra o pai como indefinido quando apenas parte dos filhos está marcada", () => {
    render(<CheckboxField defaultValue={["email"]} items={items} label="Canais de contato" />);

    const parentCheckbox = screen.getByRole("checkbox", { name: "Canais de contato" }) as HTMLInputElement;

    expect(parentCheckbox.indeterminate).toBe(true);
    expect(parentCheckbox).not.toBeChecked();
  });

  it("marca todos os filhos habilitados ao clicar no pai", async () => {
    const user = userEvent.setup();
    const handleValueChange = vi.fn();

    render(<CheckboxField items={items} label="Canais de contato" onValueChange={handleValueChange} />);

    await user.click(screen.getByRole("checkbox", { name: "Canais de contato" }));

    expect(screen.getByRole("checkbox", { name: "E-mail" })).toBeChecked();
    expect(screen.getByRole("checkbox", { name: "SMS" })).toBeChecked();
    expect(screen.getByRole("checkbox", { name: "Push" })).not.toBeChecked();
    expect(handleValueChange).toHaveBeenLastCalledWith(["email", "sms"]);
  });

  it("atualiza o estado do pai quando os filhos são alterados", async () => {
    const user = userEvent.setup();

    render(<CheckboxField items={items} label="Canais de contato" />);

    const parentCheckbox = screen.getByRole("checkbox", { name: "Canais de contato" }) as HTMLInputElement;
    const emailCheckbox = screen.getByRole("checkbox", { name: "E-mail" });
    const smsCheckbox = screen.getByRole("checkbox", { name: "SMS" });

    await user.click(emailCheckbox);

    expect(parentCheckbox.indeterminate).toBe(true);
    expect(parentCheckbox).not.toBeChecked();

    await user.click(smsCheckbox);

    expect(parentCheckbox.indeterminate).toBe(false);
    expect(parentCheckbox).toBeChecked();
  });

  it("funciona como checkbox simples quando não há filhos", async () => {
    const user = userEvent.setup();
    const handleCheckedChange = vi.fn();

    render(<CheckboxField label="Aceito os termos" onCheckedChange={handleCheckedChange} />);

    await user.click(screen.getByRole("checkbox", { name: "Aceito os termos" }));

    expect(screen.getByRole("checkbox", { name: "Aceito os termos" })).toBeChecked();
    expect(handleCheckedChange).toHaveBeenCalledWith(true);
  });
});
