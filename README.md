# Перемикач кольорів

### Завдання:

Є масив кольорів в hex-форматі і кнопки Start і Stop.
<button type="button" data-action="start">Start</button>
<button type="button" data-action="stop">Stop</button>

    const colors = [
      '#FFFFFF',
      '#2196F3',
      '#4CAF50',
      '#FF9800',
      '#009688',
      '#795548',
    ];

Написати скрипт, який після натискання кнопки Start, раз в секунду змінює колір
фону body на випадкове значення з масиву, використовуючи інлайн-стиль. При
натисканні на кнопку Stop, зміна кольору фону повинна зупинятися.

    ⚠️ Слід врахувати, що на кнопку Start можна натиснути нескінченну кількість разів.
    Зробити так, щоб поки зміну теми запушено, кнопка Start була не активна.

Для генерації випадкового числа (індекс елемента масиву кольорів),
використовувати функцію randomIntegerFromInterval.

    const randomIntegerFromInterval = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };
