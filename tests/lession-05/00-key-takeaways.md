# Lession 05: DOM terminologyy, Playwright basic

## Function advance

### Expression Function: định nghĩa function bằng cách gán cho nó 1 biến

1. Function Declaration (khai báo hàm)

```
function add (a, b) {
    return a + b;
}
```

2. Function Expression (biểu thức hàm)
```
const add = function(a, b) {
    return a + b;
};
```

### Lambda Function (Arrow function): là cách viết ngắn gọn hơn cho function, sử dụng mũi tên =>
```
const add = (a, b) => {
    return a + b;
};
```
// Nếu chỉ có 1 dòng code -> có thể bỏ cặp ngoặc nhọn và return.
```
const add = (a, b) => a + b; 
```
// Nếu không có tham số -> phải có cặp ngoặc tròn rỗng
```
const greet = () => console.log ("hello!");
```

### Anonymous Function: function không có tên, được sủ dụng khi dùng function một lần hoặc làm callback.
```
function () {
    console.log("I'm anonymous!");
}
```
// syntaxError! Không thể đứng 1 mình
=> gán cho biến
```
const anonymousFunc = function () {
    console.log("I'm anonymous but store in a variable");
}
```

## DOM (Document Object Model)
### Thẻ tiêu chuẩn thường gặp:
1. Thẻ có cấu trúc khung trang:
```
<html>: Thẻ gốc của trang
<head>: Chứa metadata: tiêu đề website, hiển thị Google
<body>: Nội dung của cả website hiển thị
```
2. Thẻ Bố Cục & Ngữ nghĩa
```
<div>: Khối/container chung
<span>: Inline container (phần tử nộituyến)
<header>, <footer>, <nav>, <section>: Thẻ ngữ nghĩa
```
3. Thẻ Nội Dung:
```
<h1> đến <h6>: Tiêu đề
<p>: Đoạn văn
<ul>, <ol>, <li>: Danh sách
```
4. Thẻ Tương Tác & Media:
```
<a>: Liên kết
<img>: Hình ảnh
```
5. Thẻ Form (Quan trọng cho Testing):
```
<form>: Biểu mẫu
<input>: Ô nhập liệu (text, password, checkbox, radio, etc.)
<button>: Nút bấm
<select> và <option>: Dropdown
<textarea>: Vùng văn bản nhiều dòng
```
Demo tất tần tật các thẻ:
https://material.playwrightvn.com/035-DOM-elements.html

## Selector
Có 3 loại selector thường dùng:

1. XPath: Dùng được trong hầu hết các trường hợp (99.99%) Đa dạng, có khả năng tìm các phần tử khó. Hơi dài
- Tuyệt đối:

    VD: /html/body/div/input

- Tương đối:

    VD: //input[@id=’user’]

    - Xpath với table: 

    VD: Lấy hàng thứ 2 trong tbody: //table[@id='student']//tbody/tr[2]

Nên ưu tiên dùng tương đối hơn là tuyệt đối. Luôn kết hợp với câc attribute như @id, @class, @name để XPath chính xác hơn.

2. CSS selector: Ngắn gọn, performance cao. Dùng cho các trường hợp dễ tìm. Không linh hoạt bằng XPath
    
    VD: .add-to-cart

● Playwright selector: Chỉ dùng riêng cho Playwright. Cú pháp ngắn gọn, không phụ thuộc vào cấu trúc DOM. Hướng tới “giống người dùng đang nhìn thấy gì”
    
    VD: page.getByText(“Add to cart”);

## Playwright basic syntax

1. test: đơn vị cơ bản để khai báo 1 test
```
import {test} from '@playwright/test';
test('ten test', async ({ page }) => {
    // code của test
});
```
2. await: đơn vị nhỏ hơn test, để khai báo từng step của test case
```
test('<tên test>', async ({ page }) => {
    await test.step('Tên step', async () => {
        // Code here
    });
});
```
NOTE: step nên được map 1-1 với test case để dễ dàng maintain.

3. Navigate
```
await page.goto('https://pw-practice.playwrightvn.com/');
```

4. Locate: Sử dụng page.locator(“< selector >”) để chọn phần tử trên trang
```
page.locator(“//input[@id=’email’]”);
```

5. Click

- Single click
```
await page.locator("//button").click();
```

- Double click
```
await page.locator("//button").dblclick();
```
- Click chuột phải
```
page.locator("//button").click({
    button: 'right'
})
```
- Click chuột kèm bấm phím khác
```
page.locator("").click({
    modifiers: ['Shift'],
})
```

6. Input

- Fill: Giống việc bạn paste content vào một ô input
```
page.locator("//input").fill('Playwright Viet Nam');
```

- pressSequentially: Giống việc bạn gõ từng chữ cái vào ô input
```
page.locator("//input").pressSequentially('Playwright Viet Nam', {
    delay: 100,
});
```

7. Radio/Checkbox: Lấy giá trị hiện tại đang là check hay không:
```
const isChecked =
page.locator("//input").isChecked();
```

Check/ uncheck
```
page.locator("//input").check();
page.locator("//input").setChecked(false);
```

8. Select
```
await page.locator('//select[@id=”country”]')
    .selectOption({ label: 'USA' });
```

9. Upload file
```
await page.locator("//input[@id='profile']")
    .setInputFiles("<file-path>");
```

### Kiến thức bổ sung: các action và các option
|Loại action|Video|
|-----------|-----|
|Navigate|https://youtu.be/KBwgjIDsfMc|
|Locate|https://youtu.be/mV84VZAwcj4|
|Click|https://youtu.be/FeG9-P3gN3I|
|Input (text-based)|https://youtu.be/bcilbBBD72I|
|input (date-time)|https://youtu.be/odyBKeoNtwA|
|Radio, checkbox, dropdown(select & autocompleted)|https://youtu.be/KNmsLeBh3Rw
|Xử lý confirmation dialog|https://youtu.be/S4h4v2wQS6c?si=Cj74VVfnKK0QEzbP|