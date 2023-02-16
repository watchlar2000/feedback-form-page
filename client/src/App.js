import React from "react";
import "./App.css";
import { Footer } from "./app/components/Footer";

import { FeedbackPage } from "./app/containers/FeedbackPage";

function App() {
  return (
    <div className="App">
      <FeedbackPage />
      <Footer />
    </div>
  );
}

export default App;
