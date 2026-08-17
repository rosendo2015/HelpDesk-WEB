import { describe, expect, it } from "vitest";
import { z } from "zod";

// Cópia dos schemas — igual ao que está nos componentes
const signInSchema = z.object({
  email: z.string().email({ message: "E-Mail inválido." }),
  password: z
    .string()
    .min(6, { message: "A senha deve ter pelo menos 6 digitos" }),
});

const signUpSchema = z.object({
  name: z.string().trim().min(1, { message: "Informe o nome completo." }),
  email: z.string().email({ message: "E-Mail inválido." }),
  password: z
    .string()
    .min(6, { message: "A senha deve ter pelo menos 6 digitos" }),
});

describe("signInSchema", () => {
  it("aceita dados válidos", () => {
    const result = signInSchema.safeParse({
      email: "user@email.com",
      password: "senha123",
    });
    expect(result.success).toBe(true);
  });

  it("rejeita email inválido", () => {
    const result = signInSchema.safeParse({
      email: "nao-é-email",
      password: "senha123",
    });
    expect(result.success).toBe(false);
    expect(result.error?.issues[0].message).toBe("E-Mail inválido.");
  });

  it("rejeita senha com menos de 6 caracteres", () => {
    const result = signInSchema.safeParse({
      email: "user@email.com",
      password: "123",
    });
    expect(result.success).toBe(false);
    expect(result.error?.issues[0].message).toBe(
      "A senha deve ter pelo menos 6 digitos",
    );
  });
});

describe("signUpSchema", () => {
  it("aceita dados válidos", () => {
    const result = signUpSchema.safeParse({
      name: "João Silva",
      email: "joao@email.com",
      password: "senha123",
    });
    expect(result.success).toBe(true);
  });

  it("rejeita nome vazio", () => {
    const result = signUpSchema.safeParse({
      name: "",
      email: "joao@email.com",
      password: "senha123",
    });
    expect(result.success).toBe(false);
    expect(result.error?.issues[0].message).toBe("Informe o nome completo.");
  });

  it("rejeita nome só com espaços", () => {
    const result = signUpSchema.safeParse({
      name: "   ",
      email: "joao@email.com",
      password: "senha123",
    });
    expect(result.success).toBe(false);
    expect(result.error?.issues[0].message).toBe("Informe o nome completo.");
  });

  it("rejeita email inválido", () => {
    const result = signUpSchema.safeParse({
      name: "João Silva",
      email: "invalido",
      password: "senha123",
    });
    expect(result.success).toBe(false);
    expect(result.error?.issues[0].message).toBe("E-Mail inválido.");
  });

  it("rejeita senha com menos de 6 caracteres", () => {
    const result = signUpSchema.safeParse({
      name: "João Silva",
      email: "joao@email.com",
      password: "123",
    });
    expect(result.success).toBe(false);
    expect(result.error?.issues[0].message).toBe(
      "A senha deve ter pelo menos 6 digitos",
    );
  });
});
