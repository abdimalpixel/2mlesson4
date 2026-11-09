



let secretNumber = 7;

while (true) {
    let input = prompt("Угадай число от 1 до 10:");

    let userNum = Number(input);

    if (userNum === secretNumber) {
        console.log("Правильно! Ты угадал!");
        alert("Правильно! Ты угадал!");
        break; 
    } else if (userNum < secretNumber) {
        console.log("Загаданное число больше!");
    } else if (userNum > secretNumber) {
        console.log("Загаданное число меньше!");
    }
}
