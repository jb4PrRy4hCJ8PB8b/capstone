import { Button } from "react-bootstrap";
import CollapsibleExample from "./CollapsibleExample";
import Footer from "./Footer";
import "./About.css";
import dominoes from "../images/dominoes.png";

const About = () => {
return <div className="about-page">
    <div className="body"> 
    <h1> Our Mission</h1>
        <div className="info-block-2"> 
            <img src={dominoes} className="dominoes-img"/>
        <div className="flex-second-info" > 
        
        <h2> How We Serve You</h2>
        <p id="text"> Senior loneliness is an extremely prevelant issue
        in today's world. According to the CDC, senior citizens are the most likely 
        age population to suffer from social isolation as they often live alone, have experienced
        the loss of friends or family, and have chronic illnesses. 
        </p>

        <p id="text"> At Senior Services, we connect older folks to one another
        through various events and meet ups. We also provide shuttle services, 
        as we know mobility is also a major issue in this community.
        </p>
        
        </div>
        </div>
        
        <div className="location"> 
        <h2 id="header-operations"> Where We Operate</h2> 
        <p id="text">We currently operate in the New England Area, with most of our events located in the Massachusetts. We are partnered with
            30 local senior centers in the New England Area, and we also run a number of events independently of these centers. We plan to
            grow over time to run programs throught the United States. </p> 
        </div>

        <div className="flex-third-info"> 
        <div className="info-block"> 
        <h2> Membership</h2>
        </div>
        </div>
        <div className="tiers"> 
            <div className="option-1"> 
                <div className="title">
                    Limited
                </div>
                <div className="content">
                    <ul>
                      <li>Access to the Senior Services network and support systems </li>  
                      <li> Access to all public, group events held by Senior Services</li>  
                      <li> Access to Senior Services field trip outings (ie. museums, bowling)</li>
                    </ul>
                </div>
                <div className="title"> $15 / month</div>
                <div className="button-space"> 
                    <Button id="btn-width" variant="outline-dark" href="https://www.paypal.com/us/home">
                    
                        Sign Up
                        <div className="arrow"> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" >
                        <path d="M15.54,11.29,9.88,5.64a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.95,5L8.46,17a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.3,1,1,0,0,0,.71-.3l5.66-5.65A1,1,0,0,0,15.54,11.29Z"/>
                        </svg>
                        </div>
                        </Button>{' '}     
                </div>
                <div className="asterik"> 
                * You can upgrade this membership at any time.
                </div>
            </div>


            <div className="option-2"> 
                <div className="title">
                    Basic
                </div>
                <div className="content">
                   <ul>
                      <li> Access to all Limited priveleges</li> 
                      <li> Free general shuttle transportion to all public, group events</li>   
                      <li> Access to Senior Services network of at-home caretakers
                          and cleaning services</li>   
                    </ul>
                   
                </div>
                <div className="title"> $30 / month</div>
                <div className="button-space"> 
                    <Button id="btn-width" variant="outline-dark" href="https://www.paypal.com/us/home">
                    
                        Sign Up
                        <div className="arrow"> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" >
                        <path d="M15.54,11.29,9.88,5.64a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.95,5L8.46,17a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.3,1,1,0,0,0,.71-.3l5.66-5.65A1,1,0,0,0,15.54,11.29Z"/>
                        </svg>
                        </div>
                    </Button>{' '} 
                </div>
                <div className="asterik"> 
                * You can upgrade this membership at any time.
                </div>
            </div>

            <div className="option-3"> 
                <div className="title">
                    Premium
                </div>
                <div className="content">
                   <ul>
                      <li> Access to all Basic priveleges</li> 
                      <li> Access and transportation to private, smaller events - including museum tours and other activities</li>  
                      <li> On-call transportation to local senior activity centers</li>   
                    </ul>
                   
                </div>
                <div className="title"> $50 / month</div>
                <div className="button-space"> 
                    <Button id="btn-width" variant="outline-dark" href="https://www.paypal.com/us/home">
                    
                        Sign Up
                        <div className="arrow"> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" >
                        <path d="M15.54,11.29,9.88,5.64a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.95,5L8.46,17a1,1,0,0,0,0,1.41,1,1,0,0,0,.71.3,1,1,0,0,0,.71-.3l5.66-5.65A1,1,0,0,0,15.54,11.29Z"/>
                        </svg>
                        </div>
                    </Button>{' '} 
                </div>
                <div className="asterik"> 
                * You can upgrade this membership at any time.
                </div>
            </div>
        </div>



    </div>
    <Footer/>
    </div>
};

export default About;