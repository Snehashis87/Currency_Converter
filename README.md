```markdown
# 💱 Currency Converter

A simple and interactive currency converter web application built with HTML, CSS, and JavaScript. It allows users to convert between different currencies using real-time exchange rates and displays corresponding country flags.

---

## 🌟 Features

- Convert between 100+ currencies
- Real-time exchange rates
- Displays country flags dynamically
- Default conversion from USD to INR
- Clean and responsive UI

---

## 🖥️ Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)
- [FlagsAPI](https://flagsapi.com) for country flags
- [ExchangeRate API](https://api.exchangerate-api.com) for currency data

---

## 🚀 Getting Started

### Clone the project:

```bash
git clone https://github.com/Snehashis87/Currency_Converter.git
cd Currency_Converter
```

### Run locally:

Just open the `index.html` file in your preferred browser.

---

## 📁 File Structure

```
Currency_Converter/
│
├── index.html        # Main HTML file
├── styles.css        # Styling
├── code.js           # Currency list and country codes
├── app.js            # Logic for fetching exchange rates and updating flags
└── README.md         # This file
```

---

## ⚙️ How It Works

- When the page loads, dropdowns are populated with all currency codes.
- Flags update dynamically based on selected currency using `flagsapi.com`.
- On clicking "Get Exchange Rate", the app fetches the latest rate and calculates the converted value.

---

## 🧠 Example Use

If you select:
- **From:** USD 🇺🇸  
- **To:** INR 🇮🇳  
- **Amount:** 100

It will display something like:  
`100 USD = 8352.6 INR` *(based on live rate)*

---

## 🙏 Acknowledgements

- [flagsapi.com](https://flagsapi.com)
- [fawazahmed0/currency-api](https://github.com/fawazahmed0/currency-api)

---

## 📬 Author

Made with ❤️ by [Snehashis Mandal](https://github.com/Snehashis87)
```
