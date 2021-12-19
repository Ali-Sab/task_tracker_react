import { useState } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctor\'s Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true
    },
    {
        id: 2,
        text: 'Bank Appointment',
        day: 'Feb 8th at 3:00pm',
        reminder: false
    }
  ])

  // Delete Task
  const deleteTask = (id) => {
    console.log('delete', id)
  }

  return (
    <div className="container">
      <Header title={"Props are great"}/>
      <Tasks tasks={tasks} onDelete={deleteTask}/>
    </div>
  );
}

export default App;
