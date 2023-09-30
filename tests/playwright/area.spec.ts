import { test, expect } from '@playwright/test';
import generateCombinations from './utils';

const chart: string = 'area';

const variations: string[] = [
  'show-heading',
  'show-labels',
  'hide-data',
  'reverse',
  'reverse-labels',
  'reverse-data',
];

const combinations: string[] = generateCombinations(variations);

test.describe(`${chart} chart`, () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('./area-line.html');
    await page.locator(`button.${chart}`).click();
  });

  test('empty', async ({ page }) => {
    expect(await page.locator('table.single').screenshot({ type: 'jpeg', quality: 70 })).toMatchSnapshot(`${chart}-single.jpeg`);
    expect(await page.locator('table.multiple').screenshot({ type: 'jpeg', quality: 70 })).toMatchSnapshot(`${chart}-multiple.jpeg`);
  });

  combinations.forEach((combination: string) => {
    const combinationString: string = combination.split(' ').join('-');
    const actions: string[] = combination.split(' ');

    test(`single › ${combination.split(' ').join(' › ')}`, async ({ page }) => {
      for (const action of actions) {
        await page.locator(`button.${action}`).click();
      }
      expect.soft(await page.locator('table.single').screenshot({ type: 'jpeg', quality: 70 })).toMatchSnapshot(`${chart}-single-${combinationString}.jpeg`);
    });
  });

  combinations.forEach((combination: string) => {
    const combinationString: string = combination.split(' ').join('-');
    const actions: string[] = combination.split(' ');

    test(`multiple › ${combination.split(' ').join(' › ')}`, async ({ page }) => {
      for (const action of actions) {
        await page.locator(`button.${action}`).click();
      }
      expect.soft(await page.locator('table.multiple').screenshot({ type: 'jpeg', quality: 70 })).toMatchSnapshot(`${chart}-multiple-${combinationString}.jpeg`);
    });
  });

});
