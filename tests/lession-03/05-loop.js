// Bài 1: Tính tổng từ 1 đến 100.
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}

console.log(sum);

// Bài 2: In bảng cửu chương từ 2 đến 9.
for (let i = 2; i <= 9; i++) {
    console.log(`Bảng cửu chương ${i}`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}

//Bài 3: 
const array = [];

for (let i = 1; i <= 99; i++) {
    if (i % 2 !== 0) {
        array.push(i);
    }
}
console.log(array);

// Bài 4: In ra 10 email dựa trên tên người dùng và số thứ tự (ví dụ: user1@example.com, user2@example.com, ..., user10@example.com).
for (let i = 1; i <= 10; i++) {
    console.log(`user${i}@example.com`)
}

// Bài 5: Tính tổng doanh thu của 12 tháng trong năm dựa trên mảng doanh thu đã cho và in ra tổng doanh thu. Biết cấu trúc object của mảng doanh thu như sau: {“month”: 2, “total”: 100}
// Vì đề bài không cho doanh thu từng tháng, chỉ cho tháng 2 là 100
// Nên giả sử có lần lượt doanh thu = [50, 100, 150, 200, 300, 500, 1000, 1300, 1800, 2700, 3500, 5000]


const doanhThuHangThang = [
    { month: 1, total: 50 },
    { month: 2, total: 100 },
    { month: 3, total: 150 },
    { month: 4, total: 200 },
    { month: 5, total: 300 },
    { month: 6, total: 500 },
    { month: 7, total: 1000 },
    { month: 8, total: 1300 },
    { month: 9, total: 1800 },
    { month: 10, total: 2700 },
    { month: 11, total: 3500 },
    { month: 12, total: 5000 }
];
let tongDoanhThu = 0;
for (let i = 1; i < doanhThuHangThang.length; i++) {
    tongDoanhThu = tongDoanhThu + doanhThuHangThang[i].total;
}
console.log(`Tổng doanh thu trong 1 năm: ${tongDoanhThu}`);