import React from "react";
import { createRoot } from "react-dom/client";
import EventSearchComponent from "./components/eventSearchComponent";

const App = () => (
  <>
    <EventSearchComponent />
  </>
);

const root = createRoot(document.getElementById("event-list"));
root.render(<App />);
