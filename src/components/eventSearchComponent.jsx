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
`;

const Genre = styled.div`
  border-radius: 128px;
  border: 2px solid rgba(64, 224, 208, 1);
  background-color: #fff;
  padding: 7px 10px;
  font-family: Roboto, sans-serif;
`;

const ResultsSummary = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  margin-top: 20px;
  font-family: Roboto, sans-serif;
`;

const EventList = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`;

const EventCard = styled.article`
  border-radius: 14px;
  background-color: #2e2e2e;
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 10px;
  margin-bottom: 10px;
`;

const Image = styled.img`
  width: 90px;
  height: 90px;
  object-fit: cover;
  border-radius: 10px;
  margin-right: 10px;
`;

const EventInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

const EventDate = styled.div`
  font-weight: 700;
  font-family: Roboto, sans-serif;
`;

const EventLocation = styled.div`
  color: #08c4d5;
  margin-top: 12px;
  font-weight: 500;
  font-size: 18px;
  font-family: Roboto, sans-serif;
`;

const EventName = styled.div`
  margin-top: 12px;
  font-weight: 300;
  font-family: Roboto, sans-serif;
`;

const EventGenres = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

const EventGenre = styled.div`
  border-radius: 10px;
  background-color: #08c4d5;
  padding: 5px 10px;
  font-family: Roboto, sans-serif;
`;

const EventSearchComponent = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await fetch(
          "https://webflow-server-lohdb.ondigitalocean.app/api/genres"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
        setGenres(data);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    };

    fetchGenres();
  }, []);

  return (
    <main>
      <SearchHeader>
        <DateSelector>Select date</DateSelector>
        <Dropdown>Select one...</Dropdown>
        <SearchInput placeholder="Search by venue or event name" />
        <GenreFilter>Filter by genre</GenreFilter>
        <GenresList>
          {genres.map((genre) => (
            <Genre key={genre.slug}>{genre.name}</Genre>
          ))}
        </GenresList>
        <ResultsSummary>
          <span>1</span> results
        </ResultsSummary>
      </SearchHeader>
      <EventList>
        <EventCard>
          <Image src="#" />
          <EventInfo>
            <EventDate>Saturday, March 30, 2024</EventDate>
            <EventLocation>Berghain | Panorama Bar</EventLocation>
            <EventName>Oster Klubnacht</EventName>
          </EventInfo>
          <EventGenres>
            {["Techno", "Electro", "House"].map((genre) => (
              <EventGenre key={genre}>{genre}</EventGenre>
            ))}
          </EventGenres>
        </EventCard>
      </EventList>
    </main>
  );
};

export default EventSearchComponent;
