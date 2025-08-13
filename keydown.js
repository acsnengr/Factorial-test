const myInput = document.getElementById("inputBox");
const consoleLog = document.getElementById("console-log");
function logMessage(message) {
  consoleLog.innerText + -`${message}\n`;
}

inputBox.addEventListener("keydown", (e) => {
  logMessage(`Key "${e.data}" input [event: input]`);
  return;
});
