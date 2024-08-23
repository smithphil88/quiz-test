let username;

document.getElementById("mySubmit").onclick = function() {
    username = document.getElementById("name").value;
    document.getElementById("myP").textContent = `Welcome ${username}, are you ready to play?`
}

document.getElementById('next-btn').addEventListener('click', gameType);

function gameType () {
    document.getElementById('rules-section').classList.add('hidden');
    document.getElementById('game-type-container').classList.remove('hidden');
}

document.getElementById('guess-Shirt-Start-Btn').addEventListener('click', startGuessShirt);

function startGuessShirt () {
    document.getElementById('game-type-container').classList.add('hidden');
    document.getElementById('question-box').classList.remove('hidden');
}