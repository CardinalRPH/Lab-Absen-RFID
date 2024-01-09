import { RouterProvider } from "react-router-dom"
import AppRouter from "./routes/router"
import { ThemeStateProvider } from "./hooks/ThemeState"
function App() {

  return (
    <ThemeStateProvider>
      <RouterProvider router={AppRouter} />
    </ThemeStateProvider>
  )
}

export default App
