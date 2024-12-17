# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# E-Commerce Sales Chatbot
![Chatbot Screenshot](https://raw.githubusercontent.com/your-username/your-repository-name/main/public/image.png)

## Overview

This project involves the development of an **E-commerce Sales Chatbot** designed to enhance the shopping experience by enabling users to search and explore products. The chatbot interacts with a backend server, processes user queries, and returns relevant product data from a mock inventory. The system is built to be scalable and interactive, focusing on improving the e-commerce user experience by making it more intuitive and responsive.

## Features

- **Responsive UI**: The chatbot interface is fully responsive and works seamlessly across desktop, tablet, and mobile devices.
- **Product Search**: Users can search for products by their full name or by the first letter of the product name, and the chatbot will return matching results.
- **Conversation Reset**: Users can reset the chatbot session at any time, ensuring a fresh interaction without reloading the page.
- **Session Management**: The system tracks user sessions, maintaining continuity of the conversation across different interactions.
- **Product Display**: The chatbot returns a list of products with details such as name and price, providing users with valuable information.
- **Mock E-Commerce Inventory**: The backend uses a mock product inventory stored in a JSON file (`products.json`) to simulate real product data, making it easier to prototype and test.

## Technologies Used

- **Frontend**:
  - ReactJS: Used to build the user interface, enabling dynamic and responsive features.
  - HTML5 and CSS: Ensure the chatbot is visually appealing and responsive.
  - Axios: Handles HTTP requests between the frontend and backend for product search and data retrieval.

- **Backend**:
  - Flask (Python): Used for building the backend API to process user queries and provide relevant product data.
  - Flask-CORS: Used to handle Cross-Origin Resource Sharing (CORS) and allow communication between the frontend and backend.
  - JSON file: The product data is stored in a mock JSON file (`products.json`), simulating an e-commerce product catalog.

- **Session Management**: Maintained on the frontend using React state, with simple tracking through the backend via Flask API to manage user sessions.

---

## Installation & Setup

### Backend Setup:

1. **Install Dependencies**: Ensure that you have Python 3.x installed. Then run the following command to install the necessary dependencies:

```bash
python3 -m pip install flask flask-cors

```bash
python3 -m pip install flask flask-cors

Backend Setup:

1. Install Dependencies: Ensure that you have Python 3.x installed. Then run the following command to install the necessary dependencies:
   bash
   Copy code
   python3 -m pip install flask flask-cors
2. Run the Flask Server: Start the backend server by running the following command:
   bash
   Copy code
   python app.py
   The backend server will run at http://127.0.0.1:5000.

Frontend Setup:

1. Navigate to the Frontend Directory:
   bash
   Copy code
   cd frontend

2. Install Dependencies: Ensure you have Node.js and npm installed, then run:
   bash
   Copy code
   npm install

3. Start the ReactJS Development Server:
   bash
   Copy code
   npm start
   The frontend will run at http://localhost:3000.

Running the Project:
• Ensure both the backend (Flask) and frontend (ReactJS) servers are running simultaneously.
• Open your browser and navigate to http://localhost:3000 to interact with the chatbot.

Challenges Faced & Solutions:

• Handling CORS Issues: Initially, the frontend couldn't communicate with the backend due to CORS restrictions. This issue was resolved by implementing Flask-CORS middleware on the backend, which enabled proper cross-origin requests.

• Product Search Logic: Filtering products by full name or starting letter posed a challenge in how the queries were processed. The solution was to implement string matching logic in the backend to handle both full-name and partial matches efficiently. This ensures that the chatbot returns relevant products even with partial queries from the user.
