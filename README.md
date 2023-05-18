# React Project

## Project Structure

The project's code is organized as follows:

- `src/index.js`: Entry point of the application. Renders the root component.
- `src/App.js`: Main application component. Contains the overall structure of the application.
- `src/routes/index.js`: Primary routes configuration using `react-router-dom`.
- `src/apis/cards.js`: API functions for fetching card data.
- `src/utils.js`: Utility functions, including a `formatDate` function for formatting dates and a `truncateText` function for truncating text.
- `src/helperComponents/Button.js`: Reusable button component.
- `src/helperComponents/Container.js`: Reusable container component.
- `src/view/Dashboard/index.js`: Dashboard component that renders the responsive card list.
- `src/view/Dashboard/card.js`: Card item component used in the card list.

## Features

- Responsive card list with purchase functionality.
- Dynamic tracking of purchased cards.
- API integration to fetch card data.
- Reusable components for buttons and containers.
- Separation of concerns for improved code organization and maintainability.

## Usage

1. Upon running the application, the responsive card list will be displayed.
2. Each card item shows an image, name, available credits, purchase button, and start date.
3. Clicking the purchase button will toggle the purchased status for the card.
4. The purchased cards are dynamically updated and visually indicated with a different button color.
5. The card list is responsive and adjusts to different screen sizes.
