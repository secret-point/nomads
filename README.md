# Product list App (React Native Expo)

Welcome to the Product list App, a simple React Native Expo app displaying list of products and details.

## Getting Started

To get started with the app, follow these steps:

### Prerequisites

Before you begin, make sure you have the following software installed on your development machine:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (for running Expo projects)

### Installation

```bash
npm install
```

### Running the App

To run the app, use the following command:

```bash
npm start
```

This will launch the Expo development server, and you can access the app on your device using the Expo Go app or an emulator. You can hit `i` or `a` on the keyboard to launch the ios or android app respectively.

## Project Structure

The project structure is organized as follows:

- `App.tsx`: The entry point of the Expo app, where the navigation is configured.
- `components/`: Contains reusable components used throughout the app.
- `screens/`: Contains individual screens or pages/tabs of the app.
- `core/`: Contains configurations
- `hooks/`: Contains custom hooks
- `types/`: Contains globally used types
- -`ui`/: Contains basic ui components

## Screens and Features

The app has the following screens and features:

- **Initial Rendering**: Initially displays set of 5 products fetched from mock api
- **Initial Rendering**: Show product details when clicking the product item.
- **Infinite scroll and lazy loading**: React Native Flatlist is being used to implement infinite scroll and lazy loading whenever user reaches the end of screen and fetches another 5 products from mock api
- **Sorting function**: Implemented sorting by category function following the `bonus requirement`

## Links

- Repo Link: [GitHub](https://github.com/secret-point/nomads)
- Author: [Vinicius Ferreira](https://www.linkedin.com/in/vini-f-43b6062aa)
