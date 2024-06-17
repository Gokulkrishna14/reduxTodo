# reduxTodo

# TodoApp

=> A simple todo list application built using React with functionalities such as adding, editing, deleting, and marking todos as completed. Note I have used Redux toolkit and localstorage in this application.

# Getting started
1. Clone the repository:
git clone https://github.com/your-username/todo-app.git

2. Navigate to the project directory:
cd todo-app

3. Install dependencies:
npm install

4. Start the development server:
npm start


# Features
1. Add new todos with a title.
2. Edit existing todos.
3. Mark todos as completed.
4. Delete todos.
5. Local storage integration to persist todos.

# Technologies Used
1. React
2. Redux toolkit
3. Material-UI for icons
4. CSS Modules for styling

# Project Structure
* The project structure is organized as follows:

src/
  components/
    TodoForm/                # Contains the form for adding todos
      TodoForm.js
    TodoItem/                # Contains individual todo items
      TodoItem.js
  features/
    todo/                    # Contains logic for the todos reducer
      todoSlice.js
  store/                     # Contains the Redux store configuration
    index.js                 # Configures the Redux store
  App.css                    # Global styles for the application
  App.js                     # Main component rendering the todo list and managing state
  index.js                   # Entry point of the application

