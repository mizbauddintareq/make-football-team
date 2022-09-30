const allPlayers = document.querySelectorAll(".player-btn");
for (const player of allPlayers) {
  player.addEventListener("click", function (e) {
    const playerName = e.target.parentNode.childNodes[1].innerText;

    const getPlayersList = document.getElementById("selected-player");
    const numbersOfPlayers = getPlayersList.childNodes.length;

    if (numbersOfPlayers === 5) {
      Swal.fire({
        icon: "error",
        title: "Can't add more than five",
      });
      return;
    }

    const createLi = document.createElement("li");
    createLi.innerText = playerName;
    getPlayersList.appendChild(createLi);

    e.target.setAttribute("disabled", true);
    e.target.style.backgroundColor = "gray";
  });
}

document
  .getElementById("player-expenses-btn")
  .addEventListener("click", function () {
    const getPlayersList = document.getElementById("selected-player");
    const numbersOfPlayers = getPlayersList.childNodes.length;

    const perPlayerBudget = getInputValue("player-bugdet");

    const totalPlayerBudget = perPlayerBudget * numbersOfPlayers;
    setTextValue("player-expenses", totalPlayerBudget);
  });
