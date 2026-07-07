import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage.ts';

let homePage: HomePage;

test.beforeEach('Navigate to ParaBank', async ({ page }) => {
    homePage = new HomePage(page);
}
)

test('Login test', async ({ page }) => {

    expect(await ((await homePage.loginToAppln())).verifyAccountOverviewHeader()).toBe('Account Services');

}
)

test('Navigate to Account Overview', async ({ page }) => {
    const acctOverview = await homePage.loginToAppln();

    await acctOverview.navigateToAccountOverview();
    await acctOverview.navigateToTransferFunds();
    await acctOverview.navigateToBillPay();
    await acctOverview.navigateToFindTransactions();
    await acctOverview.navigateToUpdateContactInfo();
    await acctOverview.navigateToRequestLoan();
    await acctOverview.navigateToLogOut();

    // await homePage.navigateToAccountOverview();
    // expect(await ((await homePage.getPage()).getByRole('heading', { name: 'Accounts Overview' })).isVisible()).toBe(true);
}
)
