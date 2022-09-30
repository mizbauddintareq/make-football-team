document
  .getElementById("total-expenses")
  .addEventListener("click", function () {
    const getPlayersExpenses = document.getElementById("player-expenses");
    const playersExpenses = parseInt(getPlayersExpenses.innerText);

    const managerBudget = getInputValue("manager-budget");
    const coachBudget = getInputValue("coach-budget");
    if (
      isNaN(managerBudget) ||
      isNaN(coachBudget) ||
      managerBudget < 0 ||
      coachBudget < 0
    ) {
      Swal.fire({
        icon: "error",
        title: "Input only positive number",
      });
      return;
    }
    const totalExpenses = playersExpenses + managerBudget + coachBudget;
    setTextValue("total", totalExpenses);
  });
