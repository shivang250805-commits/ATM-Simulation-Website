let balance = 10000;
const correctPin = "1234";
let transactionHistory = [];

function login() {
  const pin = document.getElementById("pin").value;
  const loginMsg = document.getElementById("login-msg");

  if (pin === correctPin) {
    document.getElementById("login-screen").classList.add("hidden");
    document.getElementById("menu-screen").classList.remove("hidden");
  } else {
    loginMsg.textContent = "❌ Incorrect PIN! Try again.";
    loginMsg.style.color = "#ff6b6b";
  }
}

function showBalance() {
  document.getElementById("output").textContent = `💰 Current Balance: ₹${balance}`;
}

function deposit() {
  const amount = prompt("Enter amount to deposit:");
  if (!amount || isNaN(amount) || amount <= 0) {
    alert("⚠️ Please enter a valid amount!");
    return;
  }

  balance += parseFloat(amount);
  transactionHistory.push(`+ ₹${amount} deposited`);
  alert(`✅ ₹${amount} deposited successfully!`);
  showBalance();
}

function withdraw() {
  const amount = prompt("Enter amount to withdraw:");
  if (!amount || isNaN(amount) || amount <= 0) {
    alert("⚠️ Please enter a valid amount!");
    return;
  }

  if (amount > balance) {
    alert("❌ Insufficient funds!");
  } else {
    balance -= parseFloat(amount);
    transactionHistory.push(`- ₹${amount} withdrawn`);
    alert(`✅ ₹${amount} withdrawn successfully!`);
  }

  showBalance();
}

function viewHistory() {
  if (transactionHistory.length === 0) {
    document.getElementById("output").textContent = "No transactions yet.";
    return;
  }

  const historyText = transactionHistory
    .slice(-5)
    .reverse()
    .map((t, i) => `${i + 1}. ${t}`)
    .join("\n");

  alert("📜 Recent Transactions:\n\n" + historyText);
}

function logout() {
  alert("👋 Thank you for using Smart ATM!");
  location.reload();
}
