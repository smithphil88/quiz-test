let username;

document.getElementById("mySubmit").onclick = function() {
    username = document.getElementById("name").value;
    document.getElementById("myP").textContent = `Welcome ${username}, are you ready to play?`
}