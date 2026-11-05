import { Component } from 'react'
import TaskItem from './TaskItem.jsx'
import './App.css'

class App extends Component {
  state = {
    text: '',
    tasks: [],
  }

  nextId = 1

  handleTextChange = (event) => {
    this.setState({ text: event.target.value })
  }

  handleAdd = (event) => {
    event.preventDefault()

    const text = this.state.text.trim()
    if (text === '') return

    const newTask = { id: this.nextId++, text, done: false }
    this.setState((prev) => ({
      tasks: [...prev.tasks, newTask],
      text: '',
    }))
  }

  handleToggle = (id) => {
    this.setState((prev) => ({
      tasks: prev.tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task,
      ),
    }))
  }

  handleDelete = (id) => {
    this.setState((prev) => ({
      tasks: prev.tasks.filter((task) => task.id !== id),
    }))
  }

  render() {
    const { text, tasks } = this.state
    const doneCount = tasks.filter((task) => task.done).length

    return (
      <main className="app">
        <h1>To-Do List</h1>

        <form className="add-form" onSubmit={this.handleAdd}>
          <input
            type="text"
            value={text}
            onChange={this.handleTextChange}
            placeholder="What needs doing?"
            aria-label="New task"
          />
          <button type="submit">Add</button>
        </form>

        <p className="counter">
          {doneCount} of {tasks.length} tasks done
        </p>

        {tasks.length === 0 ? (
          <p className="empty">No tasks yet. Add one!</p>
        ) : (
          <ul className="task-list">
            {tasks.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
                onToggle={this.handleToggle}
                onDelete={this.handleDelete}
              />
            ))}
          </ul>
        )}
      </main>
    )
  }
}

export default App
