import { describe, expect, test } from "vitest";

describe("GET /api/test", () => {
  test("return succes message", async () => {
    const response = await fetch("http://localhost:3000/api/hello-world");

    expect(response.status).toBe(200);

    const responseBody = await response.json();
    expect(responseBody.message).toBe("Hello world!");
  });
});
