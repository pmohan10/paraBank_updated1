import { test } from '../../fixtures/testFixture';

test('should have all links working on Account Services menu', async ({acctOverview}) => {


    await test.step('should navigate to Account Overview page', async () => {
        await acctOverview.navigateToAccountOverview();
        await acctOverview.verifyTitle("Accounts Overview");
    }
    )

    await test.step('should navigate to Transfer Funds page', async () => {
        await acctOverview.navigateToTransferFunds();
        await acctOverview.verifyTitle("Transfer Funds");
    }
    )

    await test.step('should navigate to Bill Pay page', async () => {
        await acctOverview.navigateToBillPay();
        await acctOverview.verifyTitle("Bill Pay");
    }
    )


    await test.step('should navigate to Find Transactions page', async () => {
        await acctOverview.navigateToFindTransactions();
        await acctOverview.verifyTitle("Find Transactions");
    }
    )


    await test.step('should navigate to Request Loan page', async () => {
        await acctOverview.navigateToRequestLoan();
        await acctOverview.verifyTitle("Apply for a Loan");
    }
    )


    await test.step('should Logout from application', async () => {
        await acctOverview.navigateToLogOut();
        await acctOverview.verifyLoginPageBtn('Log In');
        // await acctOverview.verifyTitle("Online Banking");
    }
    )

}
)
