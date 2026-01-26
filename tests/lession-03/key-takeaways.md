# Lession 3: Git (Undo), Javascript (Convention, Console.log advance, Object, Logical operator, Array, Function)

## Git

1. Git Undo:
- `git commit --amend -m"`: ghi đè những thay đổi lên commit trước đó
- `git commit --amend -m"message"`: sửa nội dung message của commit trước đó.
- `git restore --staged <filename>`: đưa một file chỉ định từ vùng staging về lại working directory
- `git restor --staged .` : đưa toàn bộ file từ vùng staging về lại working directory
- `git reset HEAD~1`: xóa 1 commit trước đó.
    - commit đầu không thể bị reset, nếu muốn reset -> xóa thư mục .git rồi init lại.

## Git branching:

1. Lấy code từ server về: `git push origin main`
2. Khi khởi tạo git, đặt nhánh mặc định là nhánh main: `git config --global init.defaultBranch main`
3. Tạo nhánh mới: `git branch <tênnhánh>` => nhánh mới sẽ copy giống hết nhánh hiện tại
4. Chuyển sang nhánh mới: `git checkout <tênnhánh>`
5. Tạo nhánh mới đồng thời chuyển sang nhánh vừa tạo: `git checkout -b <tênnhánh>`
6. Xem các nhanh đang tồn tại: `git branch` (phải có một commit trên nhánh thì nhánh mới tồn tại).
7. Xóa nhánh: `git branch -d <tênnhánh>` (không thể xóa nhánh đang đứng)
NOTE: Luôn pull code về trước khi tạo nhánh mới.

### Git ignore file

1. File .gitignore là một file cấu hình quan trọng trong Git, những folder/file được list vào trong file này sẽ không chịu sự theo dõi (untracked) bởi Git.
2. Tại sao cần .gitignore?
Trong dự án thường có nhiều file không cần thiết phải đưa vào Git repository, như
- File tạm thời của hệ điều hành (.DS_Store, Thumbs.db)
- Thư mục dependencies (node_modules/, vendor/)
- File build và artifacts (dist/,build/, *.exe)
- File cấu hình cá nhân (IDE settings, environment variables)
- File nhạy cảm (API keys, passwords, certificates)
- File log và database local

## JavaScript

1. Convention:
- snake_case: tạm thời không dùng
- kebab-case: đặt tên file và folder
- camelCase: đặt tên biến, hàm
- PascalCase: đặt tên class

2. Console.log năng cao:

`let name = “Nga”;`

console.log(`Toi la ${name}`);

3. Object

`let user = {“name”: “Alex”, “age”: 10, “email”: “alex@gmail.com”}`
`const product = {`

    “name”: “Laptop”,
    “price”: 500,
    “isWindow”: true,
    “manufacturer”: {
        “name”: “Acer”,
        “year”: 2024
    }
`}`

`console.log("name = " + user.name);`

`console.log("manufacturer name = " + product.manufacture.name);`

`console.log("price = ", product[“price”]);`

4. Logical operatỏ
- && : cả 2 vế của mệnh đề đều đúng
- || : một trong 2 vế đúng
- ! : đảo ngược lại giá trị của mệnh đề

5. Array: Mảng
`const coPhieu = [10, 20, 50, 60, 70, 80, 90];`

`console.log(coPhieu[1]);`

`console.log(coPhieu[3]);`

`console.log(coPhieu[5]);`

=> in ra 20, 60, 80.

6. Function

`function <nameFunction>() {`

`// code`

`}`

Parameter

Return value