import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

const Home = React.lazy(() => import("./Pages/Home/Home"));
const Auth = React.lazy(() => import("./Pages/Auth/Auth"));
const Chat = React.lazy(() => import("./Pages/Chat/Chat"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/auth" exact element={<Auth />} />
            <Route path="/chat:id" component={Chat} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
