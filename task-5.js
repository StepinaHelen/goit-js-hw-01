// TASK 5
// Пользователь может оформить доставку товара к себе в страну, указав ее при посещении страницы в prompt. Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.

// Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну. Обязательно используй switch. Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'.

// Но доставка есть не везде, если указанной страны нет в списке, то выводи в alert сообщение 'В вашей стране доставка не доступна'.

// Ниже приведен список стран и стоимость доставки.

// Китай - 100 кредитов
// Чили - 250 кредитов
// Австралия - 170 кредитов
// Индия - 80 кредитов
// Ямайка - 120 кредитов

let price;

let country = prompt('Укажите страну, в которую нужно доставить товар');
const normalizeCountry = country.toLowerCase();

switch (normalizeCountry) {
  case 'китай':
    price = 100;
    break;

  case 'чили':
    price = 250;
    break;

  case 'австралия':
    price = 170;
    break;

  case 'индия':
    price = 80;
    break;

  case 'ямайка':
    price = 120;
    break;

  default:
    alert('В вашей стране доставка не доступна');
}

if (price > 0) {
  alert(
    `Доставка в ${
      normalizeCountry[0].toUpperCase() + normalizeCountry.slice(1)
    } будет стоить ${price} кредитов`,
  );
}
