import React, { useEffect, useState } from "react";
import styled from "styled-components";
// Styled components definitions remain the same...

const EventSearchComponent = () => {
  // State to hold genres as an array of objects
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    // Fetch genres from the API and set them into state
    const fetchGenres = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/genres");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setGenres(data); // Update to directly use the fetched data array
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    };

    fetchGenres();
  }, []);

  return (
    <main>
      <SearchHeader>
        {/* UI components for date selection and search input */}
        <GenreFilter>Filter by genre</GenreFilter>
        <GenresList>
          {genres.map((genre) => (
            <Genre key={genre.slug}>{genre.name}</Genre> // Use genre.name for display
          ))}
        </GenresList>
        {/* Results summary and event list components */}
      </SearchHeader>
      <EventList>{/* Placeholder for event list rendering */}</EventList>
    </main>
  );
};

export default EventSearchComponent;
