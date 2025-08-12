import { useRoutes } from "react-router-dom"
import ShowCreators from "./pages/ShowCreators"
import ViewCreator from "./pages/ViewCreator"
import AddCreator from "./pages/AddCreator"
import EditCreator from "./pages/EditCreator"
import "@picocss/pico/css/pico.min.css" // Ensure PicoCSS is imported

export default function App() {
  const routes = useRoutes([
    { path: "/", element: <ShowCreators /> },
    { path: "/view/:id", element: <ViewCreator /> },
    { path: "/new", element: <AddCreator /> },
    { path: "/edit/:id", element: <EditCreator /> },
  ])

  return (
    <main className="container">
      <header className="d-flex justify-between align-center">
        <h1>Creatorverse</h1>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/new">Add Creator</a></li>
          </ul>
        </nav>
      </header>
      <hr />
      <section>{routes}</section>
      <footer className="text-center">
        <p>&copy; 2025 Creatorverse. All rights reserved.</p>
      </footer>
    </main>
  )
}
