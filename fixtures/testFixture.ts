import { test as base } from '@playwright/test';
import { HomePage } from '../pages/HomePage.ts';
import { AcctOverview } from '../pages/AcctOverview.ts';

type MyFixtures = {
    acctOverview: AcctOverview;
  };

  export const test = base.extend<MyFixtures>({
    acctOverview: async ({ page }, use) => {
      const homePage = new HomePage(page);
      const acctOverview = await homePage.loginToAppln();
      await use(acctOverview);
    }
  });