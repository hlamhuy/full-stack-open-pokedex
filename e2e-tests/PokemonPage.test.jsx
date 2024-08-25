import { test, describe, expect } from "@playwright/test";

describe("Pokedex", () => {
  test("front page can be opened", async ({ page }) => {
    await page.goto("");
    await expect(page.getByText("ivysaur")).toBeVisible();
    await expect(
      page.getByText(
        "Pokémon and Pokémon character names are trademarks of Nintendo."
      )
    ).toBeVisible();
  });
  test("navigate to pokemon page", async ({ page }) => {
    await page.goto("");
    await page.getByRole("link", { name: "blastoise" }).click();
    await expect(page.getByText("Torrent")).toBeVisible();
  });
});
