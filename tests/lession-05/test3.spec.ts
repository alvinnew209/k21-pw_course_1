import { test } from '@playwright/test';

test('Thêm và xóa các todo', async ({ page }) => {
    await test.step('step 1: mở trang Material', async () => {
        await page.goto("https://material.playwrightvn.com/");
    });
    await test.step('step 2: click vào “Bài học 3: Todo page”.', async () => {
        const baiHoc3Locator = page.locator("//a[@href='03-xpath-todo-list.html']");
        await baiHoc3Locator.click();
    });
    await test.step('Thêm mới 100 todo item có nội dung “Todo <i>”', async () => {
        for (let i = 1; i <= 100; i++) {
            await page.locator("//input[@id='new-task']").fill(`Todo ${i}`);
            await page.locator("//button[@id='add-task']").click();
        }
    })
});    