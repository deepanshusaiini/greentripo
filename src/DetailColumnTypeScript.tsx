import { useState } from "react";
import Categories from "./Categories";
import MapTypeScript from "./MapTypeScript";
import PriceDropdownTypeScript from "./PriceDropdownTypeScript";
import EnquiryFormTypeScript from "./EnquiryFormTypeScript";
import CategoriesTypescript from "./CategoriesTypeScript";
import TourDetailTypeScript from "./TourDetailTypeScript";

const DetailColumnTypeScript = () => {
  //   const [isOpen, setIsSopen] = useState<boolean>(true);

  //   const toggleDropdown = () => {
  //     setIsSopen(!isOpen);
  //   };

  return (
    <div className="column-container">
      <div className="columncontainer-left">
        <div className="columncontainer-inside">
          <img
            className="bigimages"
            src="https://media.istockphoto.com/id/505272770/photo/lake-nicaragua.jpg?s=612x612&w=0&k=20&c=GBv4-QQfToXg3FCi1ZbQmMvZ5pzZjglRlmj8YtWVnso="
          ></img>
          <div className="columncontainerinside-img">
            <h2>
              <strong style={{ color: "black " }}>Written by:</strong>Cultural
              ExpertsJune 19, 2024{" "}
            </h2>
            <h1>Discover Granada's Moorish Heritage</h1>
            <p>
              {" "}
              Step into a living masterpiece of Islamic art and architecture in
              Granada, where the legacy of Al-Andalus comes alive. This 7-day,
              6-night journey immerses you in the rich Moorish heritage of
              southern Spain, from the breathtaking Alhambra palace complex to
              the winding alleys of the Albayzín quarter.
              <br />
              <br />
              Experience the unique blend of cultures that makes Granada special
              - where the scent of orange blossoms mingles with the sound of
              flamenco guitars, and where tapas bars sit in the shadow of
              medieval Islamic monuments. This tour reveals why Granada was the
              last stronghold of Moorish rule in Spain and how its legacy
              continues to shape the city today.{" "}
            </p>
            <h3>
              "Granada Is A Dream of The Orient, Where Water Whispers In Hidden
              Courtyards And Intricate Stucco Work Tells Stories of A Brilliant
              Civilization."{" "}
            </h3>
            <h2
              className="h2"
              style={{ color: " rgb(87, 95, 99) ", fontSize: "15px" }}
            >
              Andalusian Cultucral Foundation
            </h2>
            <hr className="curve-top" />

            <p className="second-paragraph">
              Your journey includes premium accommodations in the historic
              center, skip-the-line access to major monuments, and expert-guided
              tours led by specialists in Islamic Spain. From the mathematical
              perfection of Nasrid palaces to the secret viewpoints of the
              Sacromonte caves, this tour offers an unparalleled immersion into
              Granada's Moorish soul.{" "}
            </p>
            <h1>
              Why Explore Granada's Moorish <br />
              Heritage With Us?
            </h1>
            <p>
              Our carefully curated itinerary goes beyond the typical tourist
              experience to reveal the true depth of Granada's Islamic past.
              You'll enjoy private evening access to the Alhambra, learn the
              secrets of Andalusian cuisine in a cooking class, and discover
              hidden courtyards that even many locals don't know about. This
              package includes all entrance fees, most meals, and the services
              of our passionate local guides.{" "}
            </p>

            <div className="images-container">
              <img
                className="imagescontainer-left"
                src="https://cdn.pixabay.com/photo/2017/04/25/10/29/nicaragua-2259258_640.jpg"
              ></img>
              <img
                className="imagescontainer-right"
                src="https://cdn.pixabay.com/photo/2017/04/25/10/29/nicaragua-2259258_640.jpg"
              ></img>
            </div>
            <div>
              <p className="third-paragraph">
                With comfortable 4-star accommodations in prime locations,
                convenient
                <br /> transportation, and carefully planned sightseeing, this
                tour offers exceptional value.
                <br /> Our small group sizes ensure personalized attention,
                while free time built into the <br />
                itinerary allows you to explore at your own pace.{" "}
              </p>
              <hr style={{ color: "rgb(208,208,208)", height: "1px" }}></hr>
            </div>
            <div className="days-highlight">
              <h1>Itinerary Highlights</h1>
              <div className="itinerary">
                <hr className="seven-lines"></hr>

                <p> Day 01: Arrival in Granada-orientation</p>
                <hr className="seven-lines"></hr>
                <p> Day 02: The Alhambra-Crown Jewel Of Islamic Spain</p>
                <hr className="seven-lines"></hr>
                <p> Day 03: Albayjin Quarter & Moorish Tea Houses</p>
                <hr className=" seven-lines"></hr>
                <p> Day 04:Science & Medicine Of Ai-Andalus </p>
                <hr className="seven-lines"></hr>
                <p> Day 05:Day Trip to Corboda </p>
                <hr className="seven-lines"></hr>
                <p> Day 06: Gardens & Gestronomy </p>
                <hr className="seven-lines"></hr>
                <p> Day 07: Departure</p>
              </div>
              <h1>TOUR MAP</h1>
            </div>
            {/* <div className="map-view"> */}
            <div>
              <MapTypeScript />
            </div>
          </div>
        </div>
        <div className="right-part">
          <PriceDropdownTypeScript />
          <EnquiryFormTypeScript />
          <TourDetailTypeScript />
          <CategoriesTypescript />
        </div>
      </div>
    </div>
  );
};

export default DetailColumnTypeScript;
