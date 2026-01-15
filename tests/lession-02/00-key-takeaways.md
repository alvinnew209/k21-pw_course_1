# Lession 02: Markdown, VCS, Git, JavaScript
## Markdown
[Hướng dẫn viết Markdown](https://www.youtube.com/watch?v=RKhnKmsVb_k)

## Version control system
1. Khái niệm: hệ thống quản lý các phiên bản. Xem lịch sử thay đổi, xem nội dung thay đổi, ai là người thay đổi, revert lại các phiên bản cũ nếu muốn...
2. Distributed Version Control System (DVCS): Hệ thông quản lý phiên bản phân tán ở nhiều máy, nhiều nơi khác nhau => Git.

## Git
1. Phân biệt Git và GitHub:
- Gỉt: là phần mềm. cài trên máy tính cá nhân, là command line tool, là một VCS để đưa file vào repository.
- GitHub: là dịch vụ Web, Host trên Website, có giao diện, là nơi để upload repository lên.

2. Phân biệt GitHub và GitLab: 
Là 2 tools khác nhau, về Gitlab hướng đến đối tượng người dùng là DevOps hoặc những team automation tốt, ra đời sau và có cấu hình thuận tiện hơn; GitHub dành cho Enterprise (những doanh nghiệp lớn, P2P,), GitHub nằm trong hệ sinh thái của Microsoft nên dùng tiện hơn cho doanh nghiệp. Lựa chọn dùng dựa trên context của doanh nghiệp.
3. Các lệnh Git:

- `git init`: khởi tạo thư mục được quản lý bởi Git => các file trong thư mục giờ sẽ nằm trong Working Directory.
- `git config --global user.name “Tên bạn”` và
`git config --global user.email “email của bạn”`: để cấu hình cho toàn bộ các repo trên máy tính, cho biết bạn là ai khi làm việc với nhiều người.
    - Trường hợp mỗi repo (dự án) cần 1 cái tên/email khác:
    `git config user.name “Alex”` và
    `git config user.email “alex@betterbytesvn.com”`
- `git add tenfile` để đưa 1 file vào Staging Area, hoặc `git add .` để đưa toàn bộ files vào Staging Area.
- `git commit -m"comment"` để đưa các files trong vùng Staging vào vùng Repository thành 1 phiên bản và đặt tên cho version đó.
    - Convention: quy ước đặt ra để giúp chú thích cho các phiên bản rõ ràng hơn.
        - `git commit -m"chore:comment"`: sửa nhỏ lẻ, chính tả, xóa file dư thừa,...
        - `git commit -m"feat:comment"`: thêm tính năng mới, test case mới,...
        - `git commit -m"fix:comment"`: sửa lỗi trước đó.

- `git status`: xem trạng thái các file (Staging: xanh lá, Đỏ: working directory, không hiện trạng thái file sau khi đã commit)
- `git log`: kiểm tra danh sách commit.

## JavaScript:
### Khái niệm: 
Là ngôn ngữ lập trình ăn theo Java, được ví như bộ não giúp cho browser hoạt động (trong khi HTML là khung xương, CSS là áo quần trang trí bên ngoài). Để chạy mà khong có browser thì cần NodeJS.
### Cú pháp/ Lệnh trong Nodejs:
1. `console.log(“nội dung”);` hoặc `console.log(‘nội dung’);`: in nội dung ra màn hình.
2. `node tênfile` hoặc `node đường-dẫn-đến-file` để chạy code.
3. `//`: Comment, tạm thời vô hiệu hóa dòng code, dùng để chú thích bên cạnh code.
    - `/*`nhiều dòng code `*/` vô hiệu hóa nhiều dòng code.
    - Bôi đen các dòng cần comment -> tổ hợp phím `Ctrl /`.
4. Khai báo Biến: dùng `var` hoặc `let` để khai báo biến (biến có thể thay đổi được)
    - Chú ý: luôn dùng `let` để đảm bảo tính an toàn hơn (`var`cho phép khai báo lại, trong khi `let`thì không => báo lỗi luôn khi khai báo trùng)
    VD: `var name = “Better Bytes Academy”;`
        `let isLovePlaywright = true;`
5. Khai báo Hằng: `const a = 5;`: khai báo hằng số, không cho phép thay đổi về sau. Nên trong ứng dụng luôn ưu tiên dùng `const` > `let` nếu có chủ đích không muốn thay đổi, KHÔNG dùng `var`.
- Datatype: Trong JavaScript, có 8 kiểu dữ liệu, chia làm 2 nhóm chính:
    - Kiểu nguyên thuỷ (primitive types):
        - Number
            - `const age = 25;` // Số nguyên
            - `const price = 19.99;` // Số thực
            - `const infinity = Infinity;` // Vô hạn
            - `const notANumber = NaN;` // Không phải là số
        - String: chuỗi kí tự
        - Boolean: true / false
        - Undefined
        - Null
        - Symbol
        - BigInt
    - Kiểu tham chiếu (reference types)
        - Object
6. Toán tử so sánh:
    - So sánh bằng:
        - `a == b`: so sánh tương đối (không chặt). VD: 5 == "5" -> true
        - `a === b`: so sánh tuyệt đối (chặt). VD: 5 === "5" -> false
    - So sánh không bằng
        - `a != b`: tương tự so sánh bằng nhưng ngược lại, nếu 5 != 5 -> false
        - `a !== b`: tương tự so sánh bằng nhưng ngược lại, nếu 5 !== "5" -> true
    - Luôn dùng so sánh === và !==
7. Toán tử logic:
    - `&&` (AND): trả về đúng nếu cả 2 vế của mệnh đề đúng
    - `||` (OR): trả về đúng nếu một trong 2 vế của mệnh đề đúng
8. Toán tử một ngôi:
    - Prefix: toán tử nằm ở phía trước -> tăng/giảm trước, trả về sau
        - ++x;
        - --x;
    - Postfix: toán tử nằm ở phía sau -> trả về trước, tăng/giảm sau
        - x++;
        - x--;
9. Toán tử toán học:

    `const firstNumber = 5;`

    `const secondNumber = 10;`

    `const result = firstNumber + secondNumber;` // result = 15

- Câu điều kiện:

    `if (<điều kiện>) {
        code...
    }`
    
    VD:

    `let hour = 8;`

    `if (hour >= 6 && hour <= 11)` `{`

    `console.log(“Good morning”);`
    `}`

- Vòng lặp: VD:

    `for (let i = 0; i < 5; i++)` `{`

    ` console.log("Xin chào!")`
    `}`
    
 => i khởi tao = 5; i chạy đến 4 vòng, mỗi vòng sẽ in ra dòng "Xin chào", sau mỗi vòng i + 1.