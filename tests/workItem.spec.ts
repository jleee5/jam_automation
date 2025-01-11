import test, { expect } from "@playwright/test";

test.describe("Testing Jam-Board", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://jam.up.railway.app/login");
    const title = page.getByText("Login to Your Account");
    await expect(title).toBeVisible();
    const username = page.getByTestId("username");
    await expect(username).toBeVisible();
    const password = page.getByTestId("password");
    await expect(password).toBeVisible();
    await username.fill("jlee5");
  });
});
