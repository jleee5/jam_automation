import test, { expect } from "@playwright/test";

test.describe("Testing Jam-Board", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://jam.up.railway.app/login");
    const title = page.getByText("Login to Your Account");
    await expect(title).toBeVisible();
    const username = page.getByLabel("Username");
    await expect(username).toBeVisible();
    const password = page.getByLabel("Password");
    await expect(password).toBeVisible();
    const userInput = page.getByTestId("username");
    await userInput.fill("jleee5");
    const passwordInput = page.getByTestId("password");
    await passwordInput.fill("password123");
    const loginButton = page.getByRole("button", { name: "Login" });
    await expect(loginButton).toBeVisible();
    await loginButton.click();
    const boardButton = page.getByRole("button", { name: "Create Board" });
    await expect(boardButton).toBeVisible();
    await boardButton.click();
  });
});
