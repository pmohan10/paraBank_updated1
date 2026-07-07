import {expect, Locator, Page} from '@playwright/test';
import { BrowserUtils } from '../utils/BrowserUtils.ts';
import { AcctOverview } from './AcctOverview.ts';
import { Config } from '../utils/Config.ts';

export class HomePage extends BrowserUtils {

    readonly usernameInput: Locator = this.page.locator('[name="username"]');
    readonly passwordInput: Locator = this.page.locator('[name="password"]');
    readonly loginButton: Locator = this.page.getByRole('button', { name: 'Log In' });

    constructor(page: Page) {
        super(page);
    }

    async loginToAppln(): Promise<AcctOverview> {
        await this.navigateTo(`${Config.baseURL}`);
        await this.fillInput(this.usernameInput, `${Config.username}`);
        await this.fillInput(this.passwordInput, `${Config.password}`);
        await this.clickLocator(this.loginButton);
        const acctOverview: AcctOverview = new AcctOverview(await this.getPage());
        return acctOverview;
        }

    // async loginToApplication(username: string, password: string): Promise<AcctOverview> {
    //     await this.navigateTo('$(Config.baseURL)');
    //     await this.fillInput(this.usernameInput, username);
    //     await this.fillInput(this.passwordInput, password);
    //     await this.clickLocator(this.loginButton);
    //     const acctOverview: AcctOverview = new AcctOverview(await this.getPage());
    //     return acctOverview;

    //     //const homePage: HomePage = new HomePage(page);
    // }


}