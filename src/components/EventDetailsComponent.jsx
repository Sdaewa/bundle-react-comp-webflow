import * as React from "react";
import styled from "styled-components";

const EventDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`;

const EventImage = styled.img`
  aspect-ratio: 0.71;
  object-fit: cover;
  width: 100%;
`;

const EventName = styled.h1`
  color: #000;
  margin-top: 16px;
  font: 500 38px/116% Roboto, sans-serif;
`;

const EventType = styled.h2`
  color: #000;
  margin-top: 16px;
  font: 300 32px/112.5% Roboto, sans-serif;
`;

const EventDateTimeContainer = styled.div`
  display: flex;
  align-items: flex-end;
  margin-top: 21px;
  gap: 6px;
  font-size: 14px;
  color: #fff;
`;

const EventDateTime = styled.time`
  font: 400 14px/20px Roboto, sans-serif;
`;

const EventTime = styled.time`
  font: 400 14px/143% Roboto, sans-serif;
`;

const EventIconsContainer = styled.div`
  display: flex;
  margin-top: 15px;
  gap: 8px;
`;

const EventIcon = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
`;

const LineupTitle = styled.h2`
  color: #08c4d5;
  margin-top: 26px;
  font: 500 24px Roboto, sans-serif;
`;

const LineupContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 17px;
  width: 100%;
  border-bottom: 1px solid rgba(255, 255, 255, 1);
`;

const LineupItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 20px;
  color: #000;
  font-weight: 500;
  padding: 11px 0;
  border-top: 1px solid rgba(255, 255, 255, 1);

  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const LineupItemDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const LineupItemArtist = styled.div`
  display: flex;
  gap: 10px;
  font-size: 24px;
`;

const LineupItemArtistImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
`;

const LineupItemArtistName = styled.span`
  font: 500 24px/1 Roboto, sans-serif;
  margin: auto 0;
`;

const LineupItemTrack = styled.div`
  display: flex;
  margin-top: 12px;
  gap: 10px;
  font-size: 12px;
  color: #333;
  line-height: 133%;
`;

const LineupItemTrackIcon = styled.img`
  width: 20px;
  height: 18px;
  object-fit: cover;
`;

const LineupItemTrackName = styled.span`
  font: 400 12px/133% Inter, sans-serif;
  margin: auto 0;
`;

const LineupItemTrackDetails = styled.div`
  color: #000;
  margin-top: 11px;
  font: 10px/210% Lucida Grande, sans-serif;
`;

const LineupItemGenre = styled.div`
  display: inline-block;
  justify-content: center;
  border-radius: 20px;
  border: 1px solid rgba(64, 224, 208, 1);
  margin-top: 5px;
  white-space: nowrap;
  padding: 6px 11px;
  font: 400 14px/143% Roboto, sans-serif;

  @media (max-width: 991px) {
    white-space: initial;
  }
`;

const LineupItemImage = styled.img`
  width: 100px;
  height: auto;
  object-fit: cover;
  margin: auto 0;

  @media (max-width: 991px) {
    width: 100%;
    max-width: 100%;
  }
`;

const VenueMapNotice = styled.p`
  color: #000;
  margin-top: 40px;
  font: 400 14px/143% Roboto, sans-serif;
`;

const VenueTypeTitle = styled.h3`
  color: #08c4d5;
  letter-spacing: 1px;
  margin-top: 7px;
  font: 500 18px/133% Roboto, sans-serif;
`;

const VenueType = styled.p`
  color: #000;
  margin-top: 11px;
  font: 400 14px/143% Roboto, sans-serif;
`;

const TicketsButton = styled.button`
  align-self: flex-start;
  justify-content: center;
  border-radius: 20px;
  background-color: #08c4d5;
  color: #fff;
  white-space: nowrap;
  text-align: center;
  padding: 14px 53px;
  font: 400 14px/143% Roboto, sans-serif;
  border: none;
  cursor: pointer;

  @media (max-width: 991px) {
    white-space: initial;
    padding: 14px 20px;
  }
`;

function EventDetailsComponent() {
  return (
    <EventDetailsContainer>
      <EventImage
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/461389d5168d9fad676b5f7486facfc101d585001c0733604d498fadd9525c60?apiKey=864b9c8251d04513a8327c922a94b89a&"
        alt={"eventName"}
      />
      <EventName>{"eventName"}</EventName>
      <EventType>{"eventType"}</EventType>
      <EventDateTimeContainer>
        <EventDateTime>
          {"eventDate"}
          <br />
          {"eventDay"}
        </EventDateTime>
        <EventTime>{"eventTime"}</EventTime>
      </EventDateTimeContainer>
      <EventIconsContainer>
        {/* {eventIcons.map((icon, index) => (
          <EventIcon key={index} src={icon} alt="Event Icon" />
        ))} */}
      </EventIconsContainer>
      <LineupTitle>LINEUP</LineupTitle>
      <LineupContainer>
        {/* {lineupItems.map((item, index) => (
          <LineupItem key={index}>
            <LineupItemDetails>
              <LineupItemArtist>
                <LineupItemArtistImage
                  src={item.trackIcon}
                  alt={item.artistName}
                />
                <LineupItemArtistName>{item.artistName}</LineupItemArtistName>
              </LineupItemArtist>
              <LineupItemTrack>
                <LineupItemTrackIcon src={item.trackIcon} alt="Track Icon" />
                <LineupItemTrackName>{item.trackName}</LineupItemTrackName>
              </LineupItemTrack>
              <LineupItemTrackDetails>
                {item.trackArtist} · {item.trackName}
              </LineupItemTrackDetails>
              <LineupItemGenre>{item.trackGenre}</LineupItemGenre>
            </LineupItemDetails>
            <LineupItemImage src={item.trackImage} alt={item.trackName} />
          </LineupItem>
        ))} */}
      </LineupContainer>
      <VenueMapNotice>
        Click 'View larger map' above to see Google photos of the venue
      </VenueMapNotice>
      <VenueTypeTitle>Venue type</VenueTypeTitle>
      <VenueType>{"venueType"}</VenueType>
      <TicketsButton>Tickets</TicketsButton>
    </EventDetailsContainer>
  );
}

export default EventDetailsComponent;
