document
  .getElementById("player-expenses-btn")
  .addEventListener("click", function () {
    const getPlayersList = document.getElementById("selected-player");
    const numbersOfPlayers = getPlayersList.childNodes.length;

    const perPlayerBudget = getInputValue("player-bugdet");
    if (isNaN(perPlayerBudget) || perPlayerBudget < 0) {
      Swal.fire({
        icon: "error",
        title: "Input only positive number",
      });
      return;
    }
    const totalPlayerBudget = perPlayerBudget * numbersOfPlayers;
    setTextValue("player-expenses", totalPlayerBudget);

    const getPlayerExpenses = document.getElementById("player-expenses");
    const playerExpenses = parseInt(getPlayerExpenses.innerText);
    if (playerExpenses === 0) {
      Swal.fire({
        icon: "error",
        title: "Please select players",
      });
      return;
    }
  });
