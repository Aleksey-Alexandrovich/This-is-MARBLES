
"use strict";

let startGame = window.MRBLS();
startGame();

do {
  if (confirm('Ещё поиграем?')) {
    startGame();
  } else break;
} while (true);