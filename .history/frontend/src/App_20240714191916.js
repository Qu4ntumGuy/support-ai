import React, { Suspense } from "react";
import { Route, Routes, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

const Home = React.lazy(() => import("./Pages/Home/Home"));
const Auth = React.lazy(() => import("./Pages/Auth/Auth"));
const ChatPage = React.lazy(() => import("./Pages/Chat/Chat"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/auth" exact element={<Auth />} />
            <Route path="/chat/:id" exact element={<ChatPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
