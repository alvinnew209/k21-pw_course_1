import { test } from '@playwright/test';

test('Thêm sản phẩm vào giỏ hàng', async ({ page }) => {
    await test.step('step 1: mở trang Material', async () => {
        await page.goto("https://material.playwrightvn.com/");
    });
    await test.step('step 2: click vào “Bài học 2: Product page"', async () => {
        const baiHoc2Locator = page.locator("//a[@href='02-xpath-product-page.html']");
        await baiHoc2Locator.click();
    });
    await test.step('step 3: thêm sản phẩm vào giỏ hàng', async () => {
        await page.locator("//button[@data-product-id='1']").click({ clickCount: 2 });
        await page.locator("//button[@data-product-id='2']").click({ clickCount: 3 });
        await page.locator("//button[@data-product-id='3']").click();
    });
});