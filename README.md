# [Infinite scroll Testing Project]

Welcome to this testing project ! This web application allows users to see list of products.

## Getting Started

Follow these simple steps to get the project up and running on your local machine.

### Prerequisites

Make sure you have the following software installed on your machine:

- Node.js v20.8.0: [Download Node.js](https://nodejs.org/)
- npm (Node Package Manager): npm is included with Node.js installation.

## Quick Start

Follow these simple steps to get the project up and running on your local machine.

### Clone the Repository

1. Visit the [GitHub repository](https://github.com/sippyyy/infinite-scroll.git).

2. Copy the repository URL.

3. Open your terminal or command prompt.

4. Install project dependencies using npm:
    ```bash
    npm install

### Usage
Start the development server with the following command:

    npm run dev

Open your browser and visit http://localhost:5173/ to see the application in action.

## Features
1. Infinite scroll to view products.
2. Search for products.

## Package Details
#### Component Library: Material-UI (mui)
##### Pros of Using Material-UI:

- Comprehensive set of pre-designed React components.
- Consistent design language following Google's Material Design.
- Theming support for easy customization.
- Active community and continuous updates.
- HTTP Client: Axios

#### Why Axios:

- Promise-based HTTP client for the browser and Node.js.
- Simple API for making HTTP requests.
- Automatic handling of request and response transformations.
- React Hooks Library: ahooks

#### Ahooks:

- Collection of commonly used React hooks.
- Simplifies state management and side effects.
- Lightweight and modular.

#### Intersection Observer: react-intersection-observer

- Efficiently detects when an element enters or exits the viewport.
- Useful for implementing features like infinite scrolling.
- State Management: React Query

#### React Query:

- Designed for managing, caching, and synchronizing server state.
- Provides hooks for fetching and updating data.
- Integrates seamlessly with React components.

### State Management Alternative: Context (instead of Redux)
- Performance Enhancement with Context:
- Context API used for state management to avoid unnecessary complexity.
- Enhances performance by eliminating the need for a separate state management library like Redux.

## File Structure
- src: Main application files.
- assets: Stores static files such as images, icons, and sounds.
- api: Contains files to manage API requests with specific endpoints and reusable methods.
- components: Each component is separated to manage different parts of the application. Reusable components are stored here.

## Routing
- The project currently doesn't use react-router-dom since it consists of a single page with features focused on infinite scrolling and product searching. If the project evolves to include more pages, react-router-dom and specific layouts will be considered in the future.

Note: The project intentionally includes the .env file in the repository to help you run the project more easily on your local machine. If needed, you can modify the `.env` file for any specific configurations.

Feel free to explore and contribute to the project!