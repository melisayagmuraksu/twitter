import { Redirect, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <div className="bg-black min-h-screen text-white">
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
      </div>
    </>
  );
}

export default App;
