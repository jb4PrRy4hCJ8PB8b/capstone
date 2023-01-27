import CollapsibleExample from "./CollapsibleExample";
import Footer from "./Footer";
import "./Events.css";
import Iframe from "react-iframe";
import EventsCarousel from "./EventsCarousel";

const Events = () => {
    return <div className="events-page">
        <div className="body"> 
        <div className="location-info">
            <h2> Event Locations</h2> 
            <p id="text"> We host our events at a number of different locations spraed across local senior centers, museums,
            and public recreation spaces centered around the New England area. Depending on your membership level, different levels of access are granted for events </p>
        </div>

        <EventsCarousel/>

        <div className="seasonal"> 
            <h2> Seasonal Events</h2>
            <p id="text"> We host a number of seasonal events (weather permitting). In the fall, we do an annual trip to Vermont, in the Spring, we do a 
            botanical and arboretum tour, and in the Summer, we do a number of beach trips to Cape Cod. Access to diffent events are dependent on 
            membership your level. </p>
        </div>

        <div className="upcoming-events"> 
            <h2> Upcoming Events</h2> 
            <p id="text"> Please check out our upcoming events below! If you are interested, feel free to add the upcoming events to your Google Calendar by clicking
            the icon on the bottom right of the calendar below.
             </p>
        </div> 
        <div className="calendar">
        <Iframe src="https://calendar.google.com/calendar/embed?src=0b37717cd7ef3a96ed5af32c9d8def115cd82e5b4c258519d47fa56d9b45ba39%40group.calendar.google.com&ctz=America%2FNew_York" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></Iframe>
        </div>       
        </div>
        <Footer/>
    </div>
};

export default Events;