const BASE_URL = "https://scalping-ai-backend.onrender.com"; // ← Itt a te linkeddel

async function analyze() {
  const symbol = document.getElementById("symbol").value || "BTCUSDT";
  const interval = document.getElementById("interval").value || "5m";
  const resultEl = document.getElementById("result");

  resultEl.textContent = "⏳ Elemzés folyamatban...";

  try {
    const response = await fetch(`${BASE_URL}/analyze?symbol=${symbol}&interval=${interval}`);
    const data = await response.json();

    resultEl.textContent = `📊 Eredmény: ${data.setup || JSON.stringify(data, null, 2)}`;
  } catch (err) {
    resultEl.textContent = `❌ Hiba történt: ${err.message}`;
  }
}
