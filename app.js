const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

// Dropdowns and UI elements
const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

// Populate currency options and update flags
for (let select of dropdowns) {
  for (let currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;

    if (select.name === "from" && currCode === "USD") newOption.selected = true;
    if (select.name === "to" && currCode === "INR") newOption.selected = true;

    select.append(newOption);
  }

  select.addEventListener("change", (e) => updateFlag(e.target));
}

// Update flag image
const updateFlag = (element) => {
  const currCode = element.value;
  const countryCode = countryList[currCode];
  const img = element.parentElement.querySelector("img");
  img.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
};

// Fetch and display exchange rate
const updateExchangeRate = async () => {
  const amountInput = document.querySelector(".amount input");
  let amtVal = amountInput.value;

  if (amtVal === "" || isNaN(amtVal) || amtVal <= 0) {
    amtVal = 1;
    amountInput.value = "1";
  }

  const from = fromCurr.value.toLowerCase();
  const to = toCurr.value.toLowerCase();

  // ✅ Fetching data from "to" currency and getting "from" rate
  const URL = `${BASE_URL}/${to}.json`;

  try {
    const response = await fetch(URL);
    const data = await response.json();

    const rate = data[to][from];
    if (!rate) throw new Error("Rate not found");

    const finalAmount = (amtVal / rate).toFixed(2);
    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
  } catch (err) {
    msg.innerText = "Failed to fetch exchange rate.";
    console.error("Fetch Error:", err.message);
  }
};

// Button click and initial call
btn.addEventListener("click", (e) => {
  e.preventDefault();
  updateExchangeRate();
});

window.addEventListener("load", () => {
  updateFlag(fromCurr);
  updateFlag(toCurr);
  updateExchangeRate();
});
