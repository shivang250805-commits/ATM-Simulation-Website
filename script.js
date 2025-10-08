let balance = 5000;
const correctPin = "1234";

function checkPin() {
  const pinInput = document.getElementById("pin").value;
  if (pinInput === correctPin) {
    document.getElementById("screen").classList.add("hidden");
    document.getElementById("menu").classList.remove("hidden");
  } else {
    document.getElementById("message").textContent = "❌ Wrong PIN! Try again.";
  }
}

function checkBalance() {
  document.getElementById("output").textContent = `Your balance is ₹${balance}`;
}

function withdraw() {
  const amount = prompt("Enter amount to withdraw:");
  if (amount && amount > 0 && amount <= balance) {
    balance -= amount;
    alert(`₹${amount} withdrawn successfully!`);
  } else {
    alert("Invalid amount or insufficient balance!");
  }
}

function deposit() {
  const amount = prompt("Enter amount to deposit:");
  if (amount && amount > 0) {
    balance += parseFloat(amount);
    alert(`₹${amount} deposited successfully!`);
  } else {
    alert("Invalid deposit amount!");
  }
}

function exitATM() {
  alert("Thank you for using the ATM!");
  location.reload();
}
