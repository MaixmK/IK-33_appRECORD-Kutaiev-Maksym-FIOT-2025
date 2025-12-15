// ===== ЗАВДАННЯ 1: Визначення знака числа =====

function task1() {
  const valueStr = prompt("Введіть число (може бути від’ємним, додатним або 0):");

  if (valueStr === null) {
    alert("Ввід скасовано");
    console.log("Ввід скасовано");
    return;
  }

  const value = Number(valueStr);

  if (Number.isNaN(value)) {
    alert("Помилка: введено не число");
    console.log("Помилка: введено не число");
    return;
  }

  console.log(`Ви ввели число: ${value}`);

  if (value > 0) {
    alert("Число додатнє");
    console.log("Число додатнє");
  } else if (value < 0) {
    alert("Число від’ємне");
    console.log("Число від’ємне");
  } else {
    alert("Число дорівнює нулю");
    console.log("Число дорівнює нулю");
  }
}




// ===== ЗАВДАННЯ 2: Номер сезону =====

function task2() {
  const number = prompt("Введіть число від 1 до 4 (1-зима, 2-весна, 3-літо, 4-осінь):");
  console.log(`Ваше число (number)=${number}`);

  let result;

  switch (number) {
    case "1":
      result = "зима";
      break;
    case "2":
      result = "весна";
      break;
    case "3":
      result = "літо";
      break;
    case "4":
      result = "осінь";
      break;
    default:
      result = "невірне значення, очікувалось 1–4";
  }

  console.log(`Результат для number=${number}: ${result}`);
}



// ===== ЗАВДАННЯ 3: Admin та User з паролями =====

const ADMIN_LOGIN = "Admin";
const ADMIN_PASSWORD = "admin123";

const USER_LOGIN = "User";
const USER_PASSWORD = "user123";

function loginAdminOrUser() {
  const login = prompt("Введіть логін (Admin або User):");

  console.log(`Користувач ввів логін: ${login}`);

  if (login === null || login === "") {
    alert("Cancelled");
    console.log("→ Ввід логіну скасовано");
    return;
  }

  if (login === ADMIN_LOGIN) {
    console.log("Розпізнано користувача: Admin");
    const password = prompt("Введіть пароль для Admin:");
    console.log(`Admin ввів пароль: ${password}`);

    if (password === null || password === "") {
      alert("Cancelled");
      console.log("→ Ввід пароля скасовано");
    } else if (password === ADMIN_PASSWORD) {
      alert("Hello, Admin");
      console.log("→ Успішний вхід як Admin");
    } else {
      alert("I don't know you");
      console.log("→ Невірний пароль для Admin");
    }

  } else if (login === USER_LOGIN) {
    console.log("Розпізнано користувача: User");
    const password = prompt("Введіть пароль для User:");
    console.log(`User ввів пароль: ${password}`);

    if (password === null || password === "") {
      alert("Cancelled");
      console.log("→ Ввід пароля скасовано");
    } else if (password === USER_PASSWORD) {
      alert("Hello, User");
      console.log("→ Успішний вхід як User");
    } else {
      alert("I don't know you");
      console.log("→ Невірний пароль для User");
    }

  } else {
    alert("I don't know you");
    console.log(`→ Невідомий логін: ${login}`);
  }
}




// ===== ЗАВДАННЯ 4: makeTransaction =====

function makeTransaction(quantity, pricePerDroid) {
  const totalPrice = quantity * pricePerDroid;
  return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
}



// ===== ЗАВДАННЯ 5: checkForSpam =====

function checkForSpam(message) {
  const lower = message.toLowerCase();
  return lower.includes("spam") || lower.includes("sale");
}




// ===== ЗАВДАННЯ 6: filterArray =====

function filterArray(numbers, value) {
  const result = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > value) {
      result.push(numbers[i]);
    }
  }

  return result;
}



// ===== ЗАВДАННЯ 7, ВАРІАНТ 3 =====

// === Функція для введення масиву користувачем ===
function inputArray() {
  console.log("Запуск функції inputArray()");
  
  const lengthStr = prompt("Введіть кількість елементів масиву A:");
  console.log("Користувач ввів довжину масиву:", lengthStr);

  const length = Number(lengthStr);

  if (!Number.isInteger(length) || length <= 0) {
    alert("Некоректна довжина масиву");
    console.log(" Некоректна довжина масиву. Роботу зупинено.");
    return null;
  }

  const arr = [];
  for (let i = 0; i < length; i++) {
    const valueStr = prompt(`Введіть елемент A[${i}]:`);
    console.log(`Користувач ввів A[${i}]:`, valueStr);

    const value = Number(valueStr);

    if (Number.isNaN(value)) {
      alert("Ви ввели не число! Ставимо 0.");
      console.log(`⚠ Значення A[${i}] не число → автоматично встановлено 0`);
      arr.push(0);
    } else {
      arr.push(value);
    }
  }

  console.log("Готовий масив A:", arr);
  return arr;
}

// === Частина 1: побудова масиву B ===
function buildArrayB(A) {
  console.log("Запуск функції buildArrayB()");
  console.log("Вхідний масив A:", A);

  const max = Math.max(...A);
  console.log("Максимальний елемент масиву A =", max);

  const B = [];

  for (let i = 0; i < A.length; i++) {
    const bi = max * A[i];
    console.log(`Обчислення B[${i}] = max * A[${i}] → ${max} * ${A[i]} = ${bi}`);
    B.push(bi);
  }

  console.log("Готовий масив B:", B);
  return B;
}

// === Частина 2: сортування вставками за спаданням ===
function insertionSortDescending(arr) {
  console.log("Запуск функції insertionSortDescending()");
  console.log("Вхідний масив:", arr);

  const a = [...arr];

  for (let i = 1; i < a.length; i++) {
    const current = a[i];
    let j = i - 1;

    console.log(`\nОбробка елемента a[${i}] = ${current}`);

    while (j >= 0 && a[j] < current) {
      console.log(`  Зсув: a[${j}] = ${a[j]} < ${current} → переносимо вправо`);
      a[j + 1] = a[j];
      j--;
    }

    a[j + 1] = current;
    console.log("  Проміжний результат:", a);
  }

  console.log("\nВідсортований масив (спаданням):", a);
  return a;
}

// === Головна функція завдання ===
function runTaskArrayAB() {
  console.clear();
  console.log("=== ЗАВДАННЯ: Побудова масиву B і сортування вставками ===");

  const A = inputArray();
  if (!A) return;

  const B = buildArrayB(A);
  const sortedB = insertionSortDescending(B);

  console.log("\n=== Фінальні результати ===");
  console.log("Масив A:", A);
  console.log("Масив B:", B);
  console.log("B після сортування:", sortedB);

  alert("Готово! Всі результати показані у консолі (F12 → Console).");
}



// ===== ЗАВДАННЯ 8: двовимірний масив =====

function generate2DArray(rows, cols, min = -10, max = 10) {
  const matrix = [];
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      const value = Math.floor(Math.random() * (max - min + 1)) + min;
      row.push(value);
    }
    matrix.push(row);
  }
  return matrix;
}

function task8() {
  const rows = 3;
  const cols = 4;
  const matrix = generate2DArray(rows, cols);

  console.log("Початковий двовимірний масив:");
  console.log(matrix);

  const positives = [];
  const negatives = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      const value = matrix[i][j];
      if (value >= 0) {
        positives.push(value);
      } else {
        negatives.push(value);
      }
    }
  }

  console.log("Масив додатніх чисел:", positives);
  console.log("Масив від’ємних чисел:", negatives);

  if (positives.length >= 3) {
    const negValueStr = prompt("Введіть від’ємне число для заміни третього елемента додатнього масиву:");
    let negValue = Number(negValueStr);

    if (Number.isNaN(negValue) || negValue >= 0) {
      alert("Некоректне значення. Поставимо -1.");
      negValue = -1;
    }

    positives[2] = negValue;
  } else {
    console.log("У масиві додатніх чисел менше 3 елементів — заміна неможлива.");
  }

  console.log("Масив додатніх чисел після заміни третього елемента:", positives);
}

