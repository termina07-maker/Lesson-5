// 1;

// const student = {
//   name: '',
//   speciality: '',
//   averageGrade: 0,
//   missedClasses: 0,

//   showInfo: function () {
//     console.log(`Ім*я: ${this.name}`);
//     console.log(`Спеціальність: ${this.speciality}`);
//     console.log(`Середній бал: ${this.averageGrade}`);
//     console.log(`Пропущено занять: ${this.missedClasses}`);
//     console.log(`------------------------`);
//   },
// };

// const student1 = {
//   name: 'Олена',
//   speciality: 'Програмування',
//   averageGrade: 4.8,
//   missedClasses: 2,
// };

// const student2 = {
//   name: 'Іван',
//   speciality: 'Дизайн',
//   averageGrade: 4.3,
//   missedClasses: 5,
// };

// const student3 = {
//   name: 'Марк',
//   speciality: 'Кібербезпека',
//   averageGrade: 4.9,
//   missedClasses: 0,
// };

// student.showInfo.call(student1);
// student.showInfo.apply(student2);
// const showForMark = student.showInfo.bind(student3);
// showForMark();

// 2;

// function showHtmlInfo() {
//   alert(
//     'HTML - це мова розмітки, яка використовується для створення структури веб сторінки.'
//   );
// }
// function showCssInfo() {
//   alert(
//     'CSS - це мова стилів, яка використовуєтсья для оформлення зовнішнього вигляду вебсторінки'
//   );
// }
// const htmlButton = document.getElementById('htmlBtn');
// const cssButton = document.getElementById('cssBtn');

// htmlButton.addEventListener('click', showHtmlInfo);
// cssButton.addEventListener('click', showCssInfo);

// 3;

// function shop(productName, pricePerKg, quantityKg) {
//   const total = pricePerKg * quantityKg;
//   return `Товар: ${productName}, Вартість: ${total.toFixed(2)} грн`;
// }

// console.log(shop('banana', 30, 4.5));
// console.log(shop('cherry', 58, 1.3));
// console.log(shop('orange', 89, 3.4));
