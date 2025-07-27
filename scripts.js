const initialTasks = [
  {
    id: 1,
    title: "Launch Epic Career",
    description: "Create a killer Resume",
    status: "todo",
  },
  {
    id: 2,
    title: "Master JavaScript",
    description: "Get comfortable with the fundamentals",
    status: "doing",
  },
  {
    id: 3,
    title: "Contribute to Open Source Projects",
    description:
      "Gain practical experience and collaborate with others in the software development community",
    status: "done",
  },
  // IDs 4, 5, 6 will be added dynamically by user input
];

// Limit the number of new tasks user can add at once
const MAX_NEW_TASKS = 3;

/**
 * Prompts the user to enter task details (title, description, and status).
 * Validates the status input and returns a task object with a unique ID.
 */
function createTask(id) {
  const title = prompt(`Enter the title for task ${id}:`);
  const description = prompt(`Enter the description for task ${id}:`);

  let status = prompt(`Enter the status for task ${id} (todo, doing, done):`).toLowerCase();

  // Validate the status input
  while (!["todo", "doing", "done"].includes(status)) {
    alert("Invalid status. Please enter 'todo', 'doing', or 'done'.");
    status = prompt(`Enter the status for task ${id} (todo, doing, done):`).toLowerCase();
  }

  return { id, title, description, status };
}

/**
 * Called when user clicks "Add New Tasks" button.
 * Permits user to input up to 3 new tasks.
 */
function addNewTasks() {
  let newTaskCount = 0;
  let lastId = tasks[tasks.length - 1]?.id || 3;

  while (newTaskCount < MAX_NEW_TASKS) {
    const newTask = createTask(lastId + 1);
    tasks.push(newTask);
    newTaskCount++;
    lastId++;

    if (newTaskCount === MAX_NEW_TASKS) {
      alert("There are enough tasks on your board, please check them in the console.");
    }
  }

  // Log all tasks and completed tasks
  logAllTasks();
  logCompletedTasks();
}



