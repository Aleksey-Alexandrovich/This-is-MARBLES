'use strict';

(() => {
  const tools = ["камень", "ножницы", "бумага"];
  const evenOrOdd = ["четное", "нечетное"];

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const findAnswer = (arr, n) => {
    for (let i = 0; i < arr.length; ++i) {
      if (arr[i].indexOf(n) == 0) {
        return arr[i];
      }
    }
    return false;
  };

  const game = () => {
    let res = "";
		console.log(res);
    const result = {
      player: 5,
      computer: 5,
    };

    const computerChoise = tools[getRandomIntInclusive(0, 2)];
		
    console.log(`Компьютер:`, computerChoise);

    const answer = prompt(`Выбери: "${tools.join('", "')}" ?`);

    if (answer === null) {
      return;
    }

    const userChoise = findAnswer(tools, answer.toLowerCase());

    if (answer && userChoise) {
      console.log(`Вы:`, userChoise);
      if (userChoise === computerChoise) {
        alert(`Компьютер: ${computerChoise} Вы: ${userChoise} Ничья!`);
        return game();
      }
			if (
        (userChoise === tools[2] && computerChoise === tools[0]) ||
        (userChoise === tools[0] && computerChoise === tools[1]) ||
        (userChoise === tools[1] && computerChoise === tools[2])
      ) {
        alert(`Компьютер: ${computerChoise}.Вы: ${userChoise}.Вы ходите!`);
        console.log(result.player);
        res = "player";
				console.log(res)
      } 
			if (
        (computerChoise === tools[0] && userChoise === tools[1]) ||
        (computerChoise === tools[1] && userChoise === tools[2]) ||
        (computerChoise === tools[2] && userChoise === tools[0])
      ) {
        alert(`Компьютер: ${computerChoise}.Вы: ${userChoise}.Компьютер ходит!`);
        res = "computer";
				console.log(res)
		
      }
    } else {
      return game();
    };

    return function start() {
      const isNumber = (n) =>
        !isNaN(parseFloat(n)) && isFinite(n) && n <= result.player && n > 0;

      if (result.player <= 0 || result.computer <= 0) {
        alert(`Игра закончилась! У Вас: ${result.player} У компьютера: ${result.computer}`);
        return;
      }

      // Игрок загадывает число
      if (res === "player") {
        let userWay;
        const computerWay = Math.floor(Math.random() * 2) + 1;
        console.log(`Компьютер выбирает четность:`, computerWay);

        while (!isNumber(userWay)) {
          userWay = prompt(
            `Сколько шариков из ${result.player} Вы хотите разыграть?`
          );
          if (userWay === null) {
            alert("Игра окончена!");
            return;
          }
        }
        if (
          (userWay % 2 === 0 && computerWay === 2) ||
          (!(userWay % 2 === 0) && computerWay === 1)
        ) 
				{
          if ((result.player - +userWay) < 0) {result.player = 0} else {result.player -= +userWay};
          if ((result.computer + +userWay) > 10) {result.computer = 10} else {result.computer += +userWay};
  
          alert(`Вы проиграли! У Вас осталось ${result.player} шариков`);
        } 
				
				{
          if ((result.computer - +userWay) < 0) {result.computer = 0} else {result.computer -= +userWay};
          if ((result.player + +userWay) > 10) {result.player = 10} else {result.player += +userWay;};
    
          alert(`Вы выйграли! У Вас ${result.player} шариков`);
        }
        console.log(`Шарики игрока: ${result.player}`);
        console.log(`Шарики компьютера: ${result.computer}`);
        res = "computer";

        // Компьютер загадывает число
      } else {
				const computerBalls = Math.floor(1 + Math.random() * result.computer);
        console.log(`Компьютер загадывает число:`, computerBalls);

        const answer = prompt("Отгадайте: четное или нечетное?");

        if (answer === null) {
          alert("Игра окончена!");
          return;
        }

        const userWay = findAnswer(evenOrOdd, answer.toLowerCase());

        if (answer && userWay) {
          if (
            (computerBalls % 2 === 0 && userWay === evenOrOdd[0]) ||
            (!(computerBalls % 2 === 0) && userWay === evenOrOdd[1])
          ) {
            if ((result.computer - computerBalls) < 0) {result.computer = 0} else {result.computer -= +computerBalls};
            if ((result.player + computerBalls) > 10) {result.player = 10} else {result.player += +computerBalls};
            /* result.player += computerWay;
              result.computer -= computerWay;*/
              alert(`Вы выйграли! У Вас ${result.player} шариков`);
            } else {
            if ((result.player - computerBalls) < 0) {result.player = 0} else {result.player -= +computerBalls};
            if ((result.computer + computerBalls) > 10) {result.computer = 10} else {result.computer += +computerBalls;};
            /* result.player -= computerWay;
            result.computer += computerWay;*/
            alert(`Вы проиграли! У Вас осталось ${result.player} шариков`);
          }
          console.log(`Шарики игрока: ${result.player}`);
          console.log(`Шарики компьютера: ${result.computer}`);
          res = "player";
        } else {
          res = "computer";
        }
      }

      return start();
    };
  };

  window.MRBLS = game;
})();

