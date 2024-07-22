import React, { Suspense } from "react";
import { Route, Routes, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Callback from "./Pages/Callback/Callback";

const Home = React.lazy(() => import("./Pages/Home/Home"));
const Auth = React.lazy(() => import("./Pages/Auth/Auth"));
const ChatPage = React.lazy(() => import("./Pages/Chat/ChatPage"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/auth" exact element={<Auth />} />
            <Route path="/auth/callback" exact element={<Callback />} />
            <Route path="/chat/:id" exact element={<ChatPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
