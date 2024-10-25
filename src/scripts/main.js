// Seleciona todos os checkboxes e adiciona um listener
const checkboxes = document.querySelectorAll("input[type='checkbox']");
const completedMessage = document.getElementById("completedMessage");

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", updateTaskStatus);
});

function updateTaskStatus() {
  let completedCount = 0;

  checkboxes.forEach((checkbox) => {
    const listItem = checkbox.parentElement;
    if (checkbox.checked) {
      listItem.classList.add("completed");
      completedCount++;
    } else {
      listItem.classList.remove("completed");
    }
  });

  // Exibe a mensagem de conclusão se todas as tarefas estiverem marcadas
  if (completedCount === checkboxes.length) {
    completedMessage.style.display = "block";
  } else {
    completedMessage.style.display = "none";
  }
}
