import React from "react";
import { createRoot } from "react-dom/client";
import EventSearchComponent from "./components/eventSearchComponent";
import EventDetailsComponent from "./components/EventDetailsComponent";

const renderComponent = (component, targetId) => {
  const target = document.getElementById(targetId);
  if (target) {
    const root = createRoot(target);
    root.render(component);
  } else {
    console.error(`Target container with ID ${targetId} is not a DOM element.`);
  }
};

renderComponent(<EventSearchComponent />, "event-list");

renderComponent(<EventDetailsComponent />, "event-details");
