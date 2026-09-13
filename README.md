// Project information //

🚀 DevStack

DevStack is an interactive web app that helps developers explore popular technologies and build their own custom tech stack. Browse frontend, backend, database, language, styling, and DevOps tools — add the ones you like to a personal "Your Stack" panel and see your ideal stack come together in real time.

🛠️ Built With
React.js – component-based UI library
TypeScript – static typing for safer, more maintainable code
Vite – fast dev server and build tool
Tailwind CSS – utility-first styling
React-Toastify – toast notifications for user actions
JSON – local data source for the technology catalog
✨ Features
1. Build Your Own Tech Stack

Browse technology cards (React, Node.js, PostgreSQL, Docker, and more), and click "Add to Stack" to add any of them to your personal stack. Once added, the card shows a pink border, and the button changes to "✓ Added to Stack" so you always know what's already selected. Trying to add the same technology twice triggers a warning instead of a duplicate.

2. Live "Your Stack" Sidebar

A sticky sidebar tracks everything you've added — showing each technology's icon, name, and category, along with a count like "2 Technology Selected." Remove a single item with the ✕ button, or clear everything at once with Remove All.

3. Real-Time Feedback with Toast Notifications

Every action — adding, removing, hitting a duplicate, or clearing the whole stack — triggers an instant toast notification (via React-Toastify), so the app always confirms what just happened without needing a page reload or alert popup.

📚 React Concepts — Q&A

1. What is JSX, and why is it used in React? JSX lets us write HTML-like syntax inside JavaScript/TypeScript. It's used because it's much easier to read and write UI structure this way than using plain JS.

2. What is the difference between props and state? Props are data passed into a component from its parent and can't be changed by that component. State is data a component manages itself and can update over time.

3. What does the useState hook do, and where did you use it in this project? It lets a component store and update its own data, re-rendering when it changes. I used it in App.tsx for the stack, technologies, and isLoading values.

4. What does the useEffect hook do, and why did you need it to load the JSON data? It runs code after render, useful for things like data fetching. I used it to simulate loading the JSON data with a short delay, similar to a real API call.

5. Why does every item in a .map() list need a unique key prop? It helps React tell list items apart when the list changes, avoiding bugs when items are added or removed. I used each item's id as the key.

6. What is conditional rendering? Show one place you used it (example: the empty stack message). It means showing different UI based on a condition. In StackSidebar.tsx, I check stack.length === 0 to show either the empty message or the actual list.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent? Parent passes data down via props (e.g. technology into TechnologyCard). To send data back up, the parent passes a function as a prop (e.g. onAdd), and the child calls it.

📦 Getting Started
bash
npm install
npm run dev

Then open the local dev URL shown in your terminal.
