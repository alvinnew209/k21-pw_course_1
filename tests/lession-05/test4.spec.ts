import { test } from '@playwright/test';

test('Thêm note vào bảng', async ({ page }) => {
    await test.step('step 1: mở trang Material', async () => {
        await page.goto("https://material.playwrightvn.com/");
    });
    await test.step('step 2: click vào “Bài học 4: Personal notes”', async () => {
        const baiHoc4Locator = page.locator("//a[@href='04-xpath-personal-notes.html']");
        await baiHoc4Locator.click();
    });
    await test.step('step 3: thêm 10 notes với nội dung ở bảng được cho', async () => {
        await page.locator("//input[@id='note-title']").fill('click');
        await page.locator("//textarea[@id='note-content']").fill('Hàm click dùng để thực hiện click vào các phần tử trên trang web');
        await page.locator("//button[@id='add-note']").click();

        await page.locator("//input[@id='note-title']").fill('fill');
        await page.locator("//textarea[@id='note-content']").fill('Hàm fill dùng để điền văn bản vào các trường input hoặc textarea trên trang web');
        await page.locator("//button[@id='add-note']").click();

        await page.locator("//input[@id='note-title']").fill('type');
        await page.locator("//textarea[@id='note-content']").fill('Hàm type dùng để nhập từng ký tự một vào phần tử, mô phỏng hành vi gõ phím thực tế của người dùng');
        await page.locator("//button[@id='add-note']").click();

        await page.locator("//input[@id='note-title']").fill('hover');
        await page.locator("//textarea[@id='note-content']").fill('Hàm hover dùng để di chuyển con trỏ chuột đến vị trí của phần tử, kích hoạt các hiệu ứng hover');
        await page.locator("//button[@id='add-note']").click();

        await page.locator("//input[@id='note-title']").fill('check');
        await page.locator("//textarea[@id='note-content']").fill('Hàm check dùng để đánh dấu checkbox hoặc radio button, đảm bảo phần tử ở trạng thái checked');
        await page.locator("//button[@id='add-note']").click();

        await page.locator("//input[@id='note-title']").fill('uncheck');
        await page.locator("//textarea[@id='note-content']").fill('Hàm uncheck dùng để bỏ đánh dấu checkbox, đảm bảo phần tử ở trạng thái unchecked');
        await page.locator("//button[@id='add-note']").click();

        await page.locator("//input[@id='note-title']").fill('selectOption');
        await page.locator("//textarea[@id='note-content']").fill('Hàm selectOption dùng để chọn một hoặc nhiều option trong thẻ select dropdown');
        await page.locator("//button[@id='add-note']").click();

        await page.locator("//input[@id='note-title']").fill('press');
        await page.locator("//textarea[@id='note-content']").fill('Hàm press dùng để mô phỏng việc nhấn phím bàn phím như Enter, Tab, Escape hoặc các phím khác');
        await page.locator("//button[@id='add-note']").click();

        await page.locator("//input[@id='note-title']").fill('dblclick');
        await page.locator("//textarea[@id='note-content']").fill('Hàm dblclick dùng để thực hiện double click (nhấp đúp chuột) vào phần tử trên trang web');
        await page.locator("//button[@id='add-note']").click();

        await page.locator("//input[@id='note-title']").fill('dragAndDrop');
        await page.locator("//textarea[@id='note-content']").fill('Hàm dragAndDrop dùng để kéo một phần tử từ vị trí nguồn và thả vào vị trí đích trên trang web');
        await page.locator("//button[@id='add-note']").click();
    });
    await test.step('step 3: click vào “Bài học 4: Personal notes”', async () => {
        await page.locator("//input[@id='search']").fill('một hoặc nhiều');
    });
})