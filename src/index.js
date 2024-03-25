import React from "react";
import { createRoot } from "react-dom/client";
import EventSearchComponent from "./components/eventSearchComponent";
import EventDetailsComponent from "./components/eventDetailsComponent";

const App = () => (
  <>
    <EventSearchComponent />
    {/* <EventDetailsComponent /> */}
  </>
);

const root = createRoot(document.getElementById("root"));
root.render(<App />);
