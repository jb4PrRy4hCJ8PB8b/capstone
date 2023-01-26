import CollapsibleExample from "./CollapsibleExample";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import "./Connect.css";

const Connect = () => {
    return <div className="connect-page">
        <CollapsibleExample/>
        <p id="words"> Please feel free to reach out to us if you have any questions. We know this can be a hard process
        to navigate, and we are here to help. Submit your full name, email, and message below, and our team will get back to you
        within the next 24 hours.</p>
        <ContactForm/>
        <Footer/>
    </div>
};

export default Connect;