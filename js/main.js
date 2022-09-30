const allPlayers = document.querySelectorAll(".player-btn");
for (const player of allPlayers) {
  player.addEventListener("click", function (e) {
    const playerName = e.target.parentNode.childNodes[1].innerText;

    const getPlayersList = document.getElementById("selected-player");
    const numbersOfPlayers = getPlayersList.childNodes.length;

    console.log(numbersOfPlayers);
    if (numbersOfPlayers > 4) {
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
    e.target.innerText = "SELECTED";
  });
}
