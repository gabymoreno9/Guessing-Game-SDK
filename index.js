const fetch = require('node-fetch');

let url = 'https://word-guessing-game.onrender.com/';

async function newGame() {
    let result = await fetch(url, { method: 'POST' });
    let json =  await result.json();
    return json.game;
}

async function retrieveGame(game) {
    let result = await fetch(url + game.id, { method: 'GET' });
    let json =  await result.json();
    return json.game;
}

async function guessLetter(game , letter) {
    let result = await fetch(url + game.id + "/" + letter, { method: 'PUT' });
    let json =  await result.json();
    return json.game;
}

async function allWords(game) {
    let result = await fetch(url + "words" , { method: 'GET' });
    let json =  await result.json();
    return json.words;
}


module.exports = { newGame, retrieveGame, guessLetter, allWords };
