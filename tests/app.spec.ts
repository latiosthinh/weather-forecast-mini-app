import { test, expect } from '@playwright/test';

// Update this to a city that exists in your sgCities data
const TEST_CITY = 'SINGAPORE';

const BASE_URL = 'http://localhost:3001';

// Selectors
const openMenuButton = '[data-testid="open-menu"]';
const searchInput = '[data-testid="search-input"]';
const searchResults = '[data-testid="search-results"]';
const addCityButton = '[data-testid="add-city-button"]';
const settingsButton = '[data-testid="active-settings-page-button"]';
const refetchInput = 'input#refetch-interval';
const currentWeatherCard = '[data-testid="current-weather-card"]';
const settingsPage = '[data-testid="settings-page"]';
const searchPage = '[data-testid="search-page"]';
const cityCard = '[data-testid="city-card"]';
const cityCardMenuButton = '[data-testid="city-card-menu-button"]';
const pinToMainScreenButton = '[data-testid="pin-to-main-screen"]';


test.describe('Weather Forecast App', () => {
	test('Sidebar test', async ({ page }) => {
		await page.goto(BASE_URL);
		// Open sidebar if closed
		if (await page.locator(openMenuButton).isVisible()) {
			await page.locator(openMenuButton).click();
		}
		await expect(page.locator(searchInput)).toBeVisible();
		await expect(page.locator(settingsButton)).toBeVisible();
	});

	test('Search page test', async ({ page }) => {
		await page.goto(BASE_URL);
		if (await page.locator(openMenuButton).isVisible()) {
			await page.locator(openMenuButton).click();
		}
		await page.locator(searchInput).click();
		await page.locator(searchInput).fill(TEST_CITY);
		await page.waitForTimeout(400); // debounce
		await expect(page.locator(searchResults)).toBeVisible();
		await page.locator(addCityButton).first().click();
		await expect(page.locator(cityCard)).toBeVisible({ timeout: 10000 });
		await page.locator(cityCardMenuButton).click();
		await page.locator(pinToMainScreenButton).click();
		await expect(page.locator(currentWeatherCard)).toBeVisible({ timeout: 10000 });
	});

	test('Dropdown test', async ({ page }) => {
		await page.goto(BASE_URL);
		if (await page.locator(openMenuButton).isVisible()) {
			await page.locator(openMenuButton).click();
		}
		await page.locator(settingsButton).click();
		await expect(page.locator(settingsPage)).toBeVisible();
		await page.locator(refetchInput).fill('10');
		await expect(page.locator(refetchInput)).toHaveValue('10');
	});
}); 