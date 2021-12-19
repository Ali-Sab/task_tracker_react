import Task from "./Task"

const Tasks = ({ tasks, onDelete, onToggle }) => {
    // Below is how to use state changing function
    //setTasks([...tasks, { id: 3, text: "Marathon", day: "Day after tomorrow", reminder: false}])
    return (
        <>
          {tasks.map((task) => (
            <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
          ))}
        </>
    )
}

export default Tasks
