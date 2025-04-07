// TaskList.tsx

import React, { useEffect, useState } from "react";
import { fetchTasks } from "../../services/taskServices";
import styles from "./TaskList.module.css";

type Task = {
  id: number;
  title: string;
  completed: boolean;
  created_at: string;
};

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {

    const loadTasks = async () => {
      const data = await fetchTasks();
      console.log("[TaskList] Tasks fetched:", data);
      setTasks(data);
    };

    loadTasks();
  }, []);

  const toggleTask = (id: number) => {
    console.log(`[TaskList] Toggle task with id: ${id}`);

    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );

    console.log("[TaskList] Updated tasks:", updatedTasks);
    setTasks(updatedTasks);
  };

  console.log("[TaskList] Rendered with tasks:", tasks);

  return (
    <div className={styles.taskList}>
      <h2>Task List</h2>
      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        tasks.map((task) => (
          <div key={task.id} className={styles.taskItem}>
            <span className={task.completed ? styles.complete : ""}>
              {task.title}
            </span>
            <button
              className={styles.button}
              onClick={() => toggleTask(task.id)}
            >
              {task.completed ? "Undo" : "Complete"}
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default TaskList;
