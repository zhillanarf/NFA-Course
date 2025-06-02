import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/public"
import PublicLayout from "./layouts/public"
import Books from "./pages/public/books"
import Register from "./pages/auth/login"
import AdminLayout from "./layouts/admin"
import Dashboard from "./pages/admin"
import AdminBooks from "./pages/admin/books"
import BookCreate from "./pages/admin/books/create"
import Login from "./pages/auth/login"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Public */}
          <Route element={<PublicLayout />}>
            <Route index element={<Home />}></Route>
            <Route path="books" element={<Books />}></Route>
          </Route>

          {/* Auth */}
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>

          {/* Admin */}
          <Route path="admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />}></Route>

            <Route path="books">
              <Route index element={<AdminBooks />}></Route>
              <Route path="create" element={<BookCreate />}></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App