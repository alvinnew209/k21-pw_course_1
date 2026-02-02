import { test } from '@playwright/test';

test('tương tác với tranng Playwrightvn.com', async ({ page }) => {
    await test.step('step 1: mở trang Material', async () => {
        await page.goto("https://material.playwrightvn.com/");
    });
    await test.step('step 2: click vào “Bài học 1: Register Page', async () => {
        const baiHoc1Locator = page.locator("//a[@href='01-xpath-register-page.html']");
        await baiHoc1Locator.click();
    });
    await test.step('step 3: nhập thông tin cho các field', async () => {
        const usernameLocator = page.locator("//input[@id='username']");
        await usernameLocator.fill('longhoang209');
        // thử dùng cách thu gọn này cho nhanh thay vì gắn biến và gọi ra
        await page.locator("//input[@id='email']").fill('alvinnew209@gmail.com');
        await page.locator("//input[@id='male']").check();
        await page.locator("//input[@id='reading']").check();
        await page.locator("//input[@id='cooking']").check();
        await page.locator("//select[@id='interests']").selectOption({ label: 'Sports' });
        await page.locator("//select[@id='country']").click();
        const countrySelect = page.locator("#country") // Chỗ này phải khai ra bién và gọi như theo video bổ sung, chưa biết cách rút gọn
        await countrySelect.selectOption({ label: 'United Kingdom' });
        await page.locator("//input[@id='dob']").fill("1994-09-20");
        // Đến phần upload profile picture thì trong file kiến thức bổ sung không có link video hướng dẫn.
        // Nhưng mà không sao, mình dùng AI gợi ý, trong quá trình code còn gặp nhiều lỗi, đã fix và hiểu vấn đề, yên tâm! ^^
        await page.setInputFiles('#profile', 'D:/Code-k21/pw-course/profile.jpg');
        await page.locator("//textarea[@id='bio']").fill('used to be handsome');
    });
    await test.step('step 4: click button Đăng Ký', async () => {
        await page.locator("//button[@type='submit']").click();
    });
});

