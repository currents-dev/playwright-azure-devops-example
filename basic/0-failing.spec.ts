import { expect, test } from "@playwright/test";

test("basic test @basic", async ({ page }) => {
  await page.goto("https://demo.playwright.dev/todomvc");

  // Use locators to represent a selector and re-use them
  const inputBox = page.locator("input.new-todo");
  const todoList = page.locator(".todo-list");

  await inputBox.fill("Stop using Cypress");
  await inputBox.press("Enter");
  await expect(todoList).toHaveText("Learn Playwright");
});
