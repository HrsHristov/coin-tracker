# CoinTrack

A brief description of your React app.

## Table of Contents

-   [Getting Started](#getting-started)
    -   [Prerequisites](#prerequisites)
    -   [Installation](#installation)
-   [Dependencies](#dependencies)
-   [Usage](#usage)
-   [Folder Structure](#folder-structure)
-   [License](#license)

## Getting Started

These instructions will help you set up and run the project on your local machine.

### Prerequisites

Make sure you have the following software installed on your machine:

-   Node.js: [Download Node.js](https://nodejs.org/)
-   npm (Node Package Manager): This comes with Node.js.

### Installation

1. Clone the repository:

    ```bash
    https://github.com/HrsHristov/coin-tracker.git
    ```

2. Navigate to the project directory:

    ```bash
    cd your-react-app
    ```

3. Install the dependencies

    ```bash
    npm install react-number-format react-router-dom reset-css chart.js
    ```

### Dependencies

-   react-number-format
-   react-router-dom
-   reset-css
-   chart.js

### Usage

1. Launch the application

    ```bash
    npm run dev
    ```

2. Launch the server

    ```bash
    node .\server.js
    ```

3. Open the local host

    ```bash
    http://localhost:5173/
    ```

4. Explore the cryptocurrency tracking features:

    1. Navigate to "Coins to view a list to view a list of available cryptocurrencies.
    2. Click Details on any coin:
        - Obtain detailed information about each cryptocurrency, including current price, market cap, and more.
        - Stay up-to-date with real-time market data.

5. Register/Login to explore the Portfolio tracker and it's capabilities

    1. Navigate to "Add Transaction" to add a new transaction:

        - Fill in the details, including the cryptocurrency, transaction type (buy/sell), quantity, and note.

    2. Navigate to "Porfolio" to see all your transactions:
        - Access a summary of your transaction history
        - Edit or delete transactions as needed

### Folder Structure

-   `src`
    -   `components`
        -   `Аdd`
            -   `Add.jsx`
        -   `Button`
            -   `Button.jsx`
            -   `Button.css`
        -   `Card`
            -   `Card.jsx`
            -   `Card.css`
        -   `CoinDetails`
            -   `CoinDetails.jsx`
        -   `CoinsTable`
            -   `CoinsTable.jsx`
        -   `CoinsTableRow`
            -   `CoinsTable.jsx`
        -   `Edit`
            -   `Edit.jsx`
        -   `Footer`
            -   `Footer.jsx`
            -   `Footer.css`
        -   `guards`
            -   `AuthGuard.jsx`
        -   `Header`
            -   `Header.jsx`
            -   `Header.css`
        -   `Input`
            -   `Input.jsx`
            -   `Input.css`
        -   `Label`
            -   `Label.jsx`
            -   `Label.css`
        -   `LineChart`
            -   `LineChart.jsx`
        -   `Login`
            -   `Login.jsx`
        -   `Logout`
            -   `Logout.jsx`
        -   `Modals`
            -   `DeleteModal`
                -   `DeleteModal.jsx`
            -   `InfoModal`
                -   `InfoModal.jsx`
            -   `ModalWrapper.jsx`
            -   `ModalWrapper.css`
        -   `Navigation`
            -   `Navigation.jsx`
            -   `Navigation.css`
        -   `PortfolioTable`
            -   `PortfolioTable.jsx`
        -   `PortfolioTableRow`
            -   `PortfolioTableRow.jsx`
            -   `PortfolioTableRow.css`
        -   `Register`
            -   `Register.jsx`
        -   `Select`
            -   `Select.jsx`
            -   `Select.css`
        -   `TableHeader`
            -   `TableHeader.jsx`
    -   `Contexts`
        -   `authContext.jsx`
    -   `hooks`
        -   `useForm.js`
    -   `lib`
        -   `request.js`
        -   `usePersistedState.js`
    -   `services`
        -   `authService.js`
        -   `coinsService.js`
        -   `portfolioService.js`
    -   `utils`
        -   `calculationUtils.js`
        -   `dateUtils.js`
        -   `formatUtils.js`
        -   `pathUtils.js`
    -   `App.jsx`
    -   `main.jsx`
    -   `paths.js`
    -   `styles.css`

### License

This project is licensed under the [Your License Name] - see the LICENSE.md file for details.
