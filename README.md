# ChainTech Network Assignment

   **To-Do List Application**
---

## Project Requirements
1. **Task Management:**
   - Users should be able to create tasks with a title and description.
   - Users should be able to view a list of all tasks.
   - Users should be able to mark tasks as completed.
   - Users should be able to edit task details.
   - Users should be able to delete tasks.
2. **Persistence:**
   - Implement data persistence simple database like MySQL/MongoDB.
   - Tasks should be stored and retrieved from the database.
3. **Validation:**
   - Implement validation to ensure that task titles are not empty.
   - Ensure that users can't mark a task as complete if it's already marked as such.
   - Handle errors gracefully and provide meaningful error messages.
4. **Documentation:**
   - Include clear instructions on how to use your To-Do List application in the README.md file.
   - Provide a brief explanation of the code structure and key decisions you made.

   ---




### Overview
This To-Do List application is built using Express.js, HBS (Handlebars), and MongoDB, designed to help users manage their tasks efficiently. It allows users to create, view, edit, mark as complete, and delete tasks. The application utilizes MongoDB for data storage and includes validation to ensure data integrity.




### Usage Instructions
1. **Setup:**
   - Clone the repository to your local machine.
   - Install any required dependencies (`npm install`).
   - Ensure that MongoDB is installed and running.

2. **Running the Application:**
   - Navigate to the project directory.
   - Run the application (`npm start`).

3. **Using the Application:**
   - Open the application in your web browser.
   - Create tasks by providing a title and description.
   - View tasks as per requirement(i.e. all tasks, pending task, completed task) by navigation from navbar.
    Each can be seen specificily.
   - Edit task details by clicking on the edit button.
   - Update the task when completed by clicking on edit button and then updating accordingly.
   - Delete tasks when no longer needed by clicking on delete button.

### Code Structure
- **app.js:** Contains the main application logic, including routes and request handling.
- **routes/RootRouter.js:** Contains all the routes and request handling.
- **models/Task.js:** Defines the data model for tasks and handles database operations.
- **db-connect.js:** Handles the database connection.
- **views/:** Contains HBS templates for rendering pages.
- **public/:** Includes static files such as CSS stylesheets and JavaScript scripts.

### Key Decisions
- **Express.js:** Chosen for its minimalistic approach and flexibility in building web applications.
- **Handlebars (HBS):** Used for its simplicity and easy integration with Express.js.
- **MongoDB:** Chosen for its scalability and flexibility in handling unstructured data.

## Technologies Used

- **Node.js**: Core JavaScript runtime.
- **Express.js** v4.16.1: Web application framework for Node.js.
- **Handlebars** v4.0.4: Templating engine for building dynamic web pages.
- **MongoDB**: NoSQL database for storing application data.
- **Mongoose**: Object Data Modeling library for MongoDB, used for schema validation and querying.
- **Nodemon**: Utility that automatically restarts the Node.js application when file changes are detected during development.
- **Bootstrap** v5.3.3: Front-end framework for designing responsive and mobile-first websites.
- **Fontawesome** v6.5.2: Icon toolkit providing scalable vector icons.



### Dependencies
- Express
- HBS
- MongoDB
- Mongoose (for MongoDB)

---
**Note:**
This README provides a comprehensive guide to setting up, running, and using the To-Do List application built with Express.js, HBS, and MongoDB.

--- 

For any further assistance, questions or feedback, feel free to reach out:

- **Email:** [career.surajkumar@outlook.com](mailto:career.surajkumar@outlook.com)
- **GitHub:** [Suraj](https://github.com/imsurajkumar/)
- **Linkedin:** [Suraj](https://www.linkedin.com/in/imsurajkumar/)

