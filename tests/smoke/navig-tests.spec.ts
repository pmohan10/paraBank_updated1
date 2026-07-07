import { test } from '../../fixtures/testFixture';

test.describe('should have all links working on Account Services menu', async () => {


    test('should navigate to Account Overview page', async ({ acctOverview }) => {
        await acctOverview.navigateToAccountOverview();
        await acctOverview.verifyTitle("Accounts Overview");
    }
    )

    test('should navigate to Transfer Funds page', async ({ acctOverview }) => {
        await acctOverview.navigateToTransferFunds();
        await acctOverview.verifyTitle("Transfer Funds");
    }
    )

    test('should navigate to Bill Pay page', async ({ acctOverview }) => {
        await acctOverview.navigateToBillPay();
        await acctOverview.verifyTitle("Bill Pay");
    }
    )


    test('should navigate to Find Transactions page', async ({ acctOverview }) => {
        await acctOverview.navigateToFindTransactions();
        await acctOverview.verifyTitle("Find Transactions");
    }
    )


    test('should navigate to Request Loan page', async ({ acctOverview }) => {
        await acctOverview.navigateToRequestLoan();
        await acctOverview.verifyTitle("Apply for a Loan");
    }
    )


    test('should Logout from application', async ({ acctOverview }) => {
        await acctOverview.navigateToLogOut();
        await acctOverview.verifyLoginPageBtn('Log In');
        // await acctOverview.verifyTitle("Online Banking");
    }
    )

}
)
