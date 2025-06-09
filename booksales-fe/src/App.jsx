import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/public";
import PublicLayout from "./layouts/public";
import Books from "./pages/public/books";
import Register from "./pages/auth/login";
import AdminLayout from "./layouts/admin";
import Dashboard from "./pages/admin";
import AdminBooks from "./pages/admin/books";
import BookCreate from "./pages/admin/books/create";
import Login from "./pages/auth/login";
import AdminAuthors from "./pages/admin/authors";
import AuthorCreate from "./pages/admin/authors/create";
import AdminGenres from "./pages/admin/genres";
import GenreCreate from "./pages/admin/genres/create";
import BookEdit from "./pages/admin/books/edit";
import ShowBook from "./pages/public/books/show";
import AuthorEdit from "./pages/admin/authors/edit";
import GenreEdit from "./pages/admin/genres/edit";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Public */}
          <Route element={<PublicLayout />}>
            <Route index element={<Home />} />

            <Route path="books">
              <Route index element={<Books />} />
              <Route path="show/:id" element={<ShowBook />} />
            </Route>
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
              <Route path="edit/:id" element={<BookEdit />}></Route>
            </Route>

            <Route path="authors">
              <Route index element={<AdminAuthors />}></Route>
              <Route path="create" element={<AuthorCreate />}></Route>
              <Route path="edit/:id" element={<AuthorEdit />}></Route>
            </Route>

            <Route path="genres">
              <Route index element={<AdminGenres />}></Route>
              <Route path="create" element={<GenreCreate />}></Route>
              <Route path="edit/:id" element={<GenreEdit />}></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
