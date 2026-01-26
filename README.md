# React Todo App with Material-UI

A modern and responsive todo list application built using React and Material-UI

## Features

- Add, edit, and delete todos
- Mark todos as complete
- View completed todos separately
- Persistent storage using localStorage
- Clean Material-UI design with custom theming
- Responsive layout

## Technologies Used

- **React** - JavaScript library for building user interfaces
- **Material-UI (MUI)** - React component library for faster and easier web development
- **localStorage** - For data persistence

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/AddAsher/todoapp.git
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser

## Usage

1. **Add a Todo**: Enter a title and description, then click "Add"
2. **Edit a Todo**: Click the edit icon on any todo item
3. **Complete a Todo**: Click the check icon to move it to completed
4. **Delete a Todo**: Click the delete icon to remove it
5. **View Completed**: Switch between "Todos" and "Completed" tabs

## Project Structure
```
src/
├── App.js          # Main application component
├── App.css         # Custom styles
├── theme.js        # MUI theme configuration
└── index.js        # Entry point
```

## Customization

The app uses a custom MUI theme defined in `theme.js`. You can modify colors, button styles, and text field styles to match your preferences.

