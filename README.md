iTask - Task Management Application

Project Description

iTask is a responsive task management application designed to help users organize and manage their tasks efficiently. Users can add, edit, delete, and mark tasks as completed. The application stores tasks locally using the browser's localStorage, ensuring persistence across sessions. The app also provides the ability to toggle between displaying completed and active tasks, making it easier to focus on tasks that still need attention.

Key Features:

Add Tasks: Users can add new tasks to their list.
Edit Tasks: Users can edit existing tasks for updates or corrections.
Delete Tasks: Users can remove tasks from the list when they are no longer relevant.
Complete Tasks: Users can mark tasks as completed by checking them off.
Show Completed Tasks: Toggle between viewing completed tasks and pending tasks.
Persistent Storage: The app uses localStorage to save tasks, so they remain accessible even after closing the browser or refreshing the page.
Responsive Design: The app is fully responsive, working seamlessly on both desktop and mobile devices.
Built With
React: A JavaScript library for building user interfaces.
Tailwind CSS: A utility-first CSS framework for rapid UI development.
LocalStorage API: For saving tasks to the browser’s local storage.

Usage:

Adding a Task: Enter a task in the input field and click the "Add" button.
Editing a Task: Click the "Edit" button (✎) next to the task to modify its content. Once done, click "Save" to update it.
Deleting a Task: Click the "Delete" button (🗑) next to the task to remove it from the list.
Marking a Task as Complete: Check the checkbox next to the task to mark it as complete. The task will then be moved to the completed section (depending on the "Show Completed Tasks" toggle).
Toggle Completed Tasks: Check the "Show Completed Tasks" box to display tasks that have been marked as complete.

Code Structure:

App.js: The main component that handles all the app logic, including adding, editing, deleting, and marking tasks as complete.
Navbar.js: A separate component that renders the navigation bar at the top of the app.
localStorage: The app uses the localStorage API to store tasks in the browser so that they persist even after a page refresh or reopening the app.
