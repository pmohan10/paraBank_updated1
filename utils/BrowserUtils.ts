import { expect, Locator, Page } from '@playwright/test';

export class BrowserUtils {
    page: Page;


    constructor(page: Page) {
        this.page = page;
    }

    async navigateTo(url: string): Promise<void> {
        await this.page.goto(url);
    }

    async fillInput(selector: Locator, value: string): Promise<void> {
        await selector.fill(value);
    }

    async clickLocator(selector: Locator): Promise<void> {
        await selector.click();
    }

    async getPage(): Promise<Page> {
        return this.page;
    }

    async getVisibleText(selector: Locator): Promise<string> {
        return await selector.textContent() || '';
    }

    async openPage(linkName: string, headingName: string): Promise<void> {
        await this.page.getByRole('link', { name: linkName }).click();   
    }

    async verifyTitle(headingName: string): Promise<void> {
        const headingLocator: Locator = this.page.getByRole('heading', { name: headingName });
        await expect.soft(headingLocator).toBeVisible();
    }

    async verifyLoginPageBtn(buttonName: string): Promise<void>{
        await expect.soft(this.page.getByRole('button', {name: buttonName})).toBeEnabled();
    }

}