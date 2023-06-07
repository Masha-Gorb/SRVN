import { Routes, Route} from "react-router-dom";
import {Layout} from "./pages/Layout";
import {AllUsersPage} from "./pages/AllUsersPage";
import {UserPage} from "./pages/UserPage";
import {NotFoundPage} from "./pages/NotFoundPage";
import {NotDataPage} from "./pages/NoDataPage";
import {SecretPage} from "./pages/SecretPage";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<AllUsersPage/>}/>
          <Route path="/user" element={<NotDataPage />}/>
          <Route path="/user/:id" element={<UserPage />}/>
          <Route path="/secret" element={<SecretPage />}/>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
