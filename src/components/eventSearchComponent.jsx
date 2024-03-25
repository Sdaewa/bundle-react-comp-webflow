import React, { useEffect, useState } from "react";
import styled from "styled-components";

const SearchHeader = styled.header`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const DateSelector = styled.div`
  font-family: Roboto, sans-serif;
  margin-top: 10px;
`;

const Dropdown = styled.div`
  border-radius: 17px;
  border: 1px solid rgba(204, 204, 204, 1);
  background-color: #f3f3f3;
  margin-top: 10px;
  padding: 14px 17px;
  font-weight: 300;
  color: #333;
`;

const SearchInput = styled.input`
  border-radius: 18px;
  border: 1px solid rgba(204, 204, 204, 1);
  background-color: #fff;
  margin-top: 7px;
  padding: 9px 15px;
  font-family: Roboto, sans-serif;
`;

const GenreFilter = styled.div`
  font-family: Roboto, sans-serif;
  margin-top: 15px;
`;

const GenresList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 7px;
  margin-bottom: 25px;
`;

const GenreBubble = styled.div`
  border-radius: 128px;
  border: 2px solid rgba(64, 224, 208, 1);
  background-color: #fff;
  padding: 7px 10px;
  font-family: Roboto, sans-serif;
  cursor: pointer; /* Added pointer cursor */
`;

const EventCardWrapper = styled.div`
  background-color: #2e2e2e;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-bottom: 10px;
  align-items: start;
  cursor: pointer; /* Added pointer cursor */
`;

const EventImage = styled.img`
  width: 90px;
  height: 90px;
  object-fit: cover;
  border-radius: 10px;
  margin-right: 20px;
`;

const EventDetails = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const EventDate = styled.time`
  font-family: Roboto, sans-serif;
  font-weight: 700;
  color: #ffff;
`;

const EventVenue = styled.p`
  color: #08c4d5;
  margin-top: 6px;
  font-weight: 500;
  font-size: 18px;
  font-family: Roboto, sans-serif;
`;

const EventTitle = styled.p`
  margin-top: 6px;
  font-weight: 300;
  font-family: Roboto, sans-serif;
  color: #ffff;
`;

const EventGenres = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
  font-weight: 300;
`;

const Genre = styled.span`
  border-radius: 10px;
  background-color: #08c4d5;
  padding: 5px 10px;
  font-family: Roboto, sans-serif;
`;

const Container = styled.div`
  max-width: 50%;
  margin: 0 auto;
  padding: 20px;
`;

const genresFilter = [
  "Techno",
  "Drum & Bass",
  "Hard Techno",
  "Afrobeats",
  "House",
  "Deep House",
  "Downtempo",
  "Tech House",
  "New/Synth Wave",
  "Progressive House",
  "Trance",
  "Experimental",
  "Disco",
  "Hip Hop",
  "Ambient",
  "Garage",
];

const Pagination = ({ eventsPerPage, totalEvents, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalEvents / eventsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          justifyContent: "center",
          padding: 0,
        }}>
        {pageNumbers.map((number) => (
          <li key={number} style={{ margin: "0 10px" }}>
            <button
              onClick={() => paginate(number)}
              style={{
                border: "none",
                background: "none",
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "16px",
              }}>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const EventCard = ({ event }) => {
  const formattedDate = new Date(event.start_date_time).toLocaleDateString(
    "en-US",
    {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  const handleRedirect = () => {
    console.log("click", event);
  };

  return (
    <EventCardWrapper onClick={handleRedirect}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <EventImage src={event.image} alt={event.name} />
        <EventDetails>
          <EventDate>{formattedDate}</EventDate>
          <EventVenue>{event.venue}</EventVenue>
          <EventTitle>{event.name}</EventTitle>
        </EventDetails>
      </div>
      <EventGenres>
        {event.genres &&
          event.genres
            .split(";")
            .filter((genre) => genre.trim() !== "")
            .map((genre, index) => <Genre key={index}>{genre}</Genre>)}
      </EventGenres>
    </EventCardWrapper>
  );
};

const EventSearchComponent = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [eventsPerPage] = useState(10);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleGenreSelection = (genre) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(
        selectedGenres.filter((selectedGenre) => selectedGenre !== genre)
      );
    } else {
      setSelectedGenres([...selectedGenres, genre]);
    }
  };

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(
          "https://webflow-server-lohdb.ondigitalocean.app/api/events"
        );
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();

        setEvents(data);
        setFilteredEvents(data);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    };
    fetchEvents();
  }, []);

  useEffect(() => {
    let result = events;

    if (selectedGenres.length > 0) {
      result = result.filter((event) => {
        const eventGenres = event.genres
          ? event.genres.split(";").map((genre) => genre.trim().toLowerCase())
          : [];
        return selectedGenres.some((genre) =>
          eventGenres.includes(genre.toLowerCase())
        );
      });
    }

    if (searchQuery) {
      result = result.filter(
        (event) =>
          event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          event.venue.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredEvents(result);
    setCurrentPage(1);
  }, [selectedGenres, searchQuery, events]);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = filteredEvents.slice(
    indexOfFirstEvent,
    indexOfLastEvent
  );

  return (
    <Container>
      <SearchHeader>
        <DateSelector>Select date</DateSelector>
        <Dropdown>Select one...</Dropdown>
        <SearchInput
          placeholder="Search by venue or event name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <GenreFilter>Filter by genre</GenreFilter>
      </SearchHeader>
      <GenresList>
        {genresFilter.map((genre) => (
          <GenreBubble
            key={genre}
            onClick={() => toggleGenreSelection(genre)}
            style={{
              backgroundColor: selectedGenres.includes(genre)
                ? "#00BFFF"
                : "#fff",
            }}>
            {genre}
          </GenreBubble>
        ))}
      </GenresList>

      {currentEvents.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}

      <Pagination
        eventsPerPage={eventsPerPage}
        totalEvents={events.length}
        paginate={paginate}
      />
    </Container>
  );
};

export default EventSearchComponent;
