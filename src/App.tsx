import { Routes, Route} from "react-router-dom";
import {Layout} from "./pages/Layout";
import {StartPage} from "./pages/StartPage";
import {UserPage} from "./pages/UserPage";
import {NotFoundPage} from "./pages/NotFoundPage";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="/" element={<StartPage/>}/>
          <Route path="/user" element={<UserPage />}/>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
