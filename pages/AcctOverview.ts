import { Page, Locator } from "playwright/types/test";
import { BrowserUtils } from "../utils/BrowserUtils";

export class AcctOverview extends BrowserUtils{

    readonly accountOverviewHeader: Locator = this.page.getByRole('heading', { name: 'Account Services' });

    constructor(page: Page) {
        super(page);
    }

    async verifyAccountOverviewHeader(): Promise<String> {
        const headerText = await this.getVisibleText(this.accountOverviewHeader);
        return headerText;
        // expect(headerText).toBe('Account Services');
    }

    async navigateToAccountOverview(): Promise<void> {
        await this.openPage('Accounts Overview', 'Accounts Overview');

    }

    async navigateToTransferFunds(): Promise<void> {
        await this.openPage('Transfer Funds', 'Transfer Funds');
    }

    async navigateToBillPay(): Promise<void> {
        await this.openPage('Bill Pay', 'Bill Pay');
    }

    async navigateToFindTransactions(): Promise<void> {
        await this.openPage('Find Transactions', 'Find Transactions');
    }

    async navigateToUpdateContactInfo(): Promise<void> {
        await this.openPage('Update Contact Info', 'Update Profile');
    }

    async navigateToRequestLoan(): Promise<void> {
        await this.openPage('Request Loan', 'Apply for');
    }

    async navigateToLogOut(): Promise<void> {
        await this.openPage('Log Out', 'Customer Login');
    }

}