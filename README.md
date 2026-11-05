# To-Do App

A small to-do app built with React and Vite.

## Features

- Input box and an Add button (pressing Enter also adds)
- Added tasks appear in a list below
- Clicking a task marks it done with a strike-through; clicking it again undoes it
- Each task has a Delete button
- A counter shows progress, for example "2 of 5 tasks done"
- When there are no tasks, the app shows "No tasks yet. Add one!"
- Empty or whitespace-only tasks are not added

## How the rules are met

| Rule | Where |
| --- | --- |
| `App` is a class component that holds the state (`text` and `tasks`) | `src/App.jsx` |
| `TaskItem` is a function component that only receives props (`task`, `onToggle`, `onDelete`) | `src/TaskItem.jsx` |
| State changes only through `setState`, and `this.state` is never changed directly | `src/App.jsx` |
| The list is rendered with `.map()` and a `key` | `src/App.jsx` |

## Run it

```bash
npm install
npm run dev
```

Then open the URL that Vite prints, usually http://localhost:5173.
