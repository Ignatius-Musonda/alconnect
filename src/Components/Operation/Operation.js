
import { Link } from "react-router-dom";
import "./Operation.css"


const Operation = () => {

    // const BookLink ="https://booking.setmore.com/scheduleappointment/91a2a4b5-90b5-4f0c-8ae0-b7df8d8381d2"
    const BookLink ="https://m.me/Nerdarr"


    return (<>

        <div className="operationsContainer">
            <div className="ScheduleCover">
                <div className="scheduleCoverPart">
                    <div className="schHeading">
                        <p>Operating Hours</p>
                    </div>
                    <div className="schWording">
                        <p>Daily</p>
                        <p>8:00am - 4:00pm</p>

                    </div>

                </div>
                <div className="scheduleCoverPart">
                    <div className="schHeading">
                        <p>Reservations</p>
                    </div>
                    <div className="schWording">
                        <p><b>Email us:</b></p>
                        <p><b>blssngslombe@gmail.com</b></p>
                        <p><b>Call us:</b>+260 777685892</p>
                        <Link className='text-link' to={BookLink}><p><b>Book your appointments here</b></p></Link>

                    </div>

                </div>

            </div>
            
        </div>


    </>)
};

export default Operation;