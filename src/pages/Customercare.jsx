import { Footer, Navbar } from "../components";

function Customercare() {
    return (
        <>
            <Navbar />
            <div className="container my-5">
                <div className="row justify-content-center">
                    {/* First Card */}
                    <div className="col-md-5 m-2 p-4 shadow rounded text-center bg-light">
                        <i className="fas fa-phone fa-3x text-primary mb-3"></i>
                        <h5 className="fw-bold">Give us a ring</h5>
                        <p>For any queries, support & complaints, feel free to reach out to us at our customer care number <strong>000000000</strong> between 09:00am to 06:00pm (Monday to Saturday).</p>
                        <button className="btn btn-primary">Get In Touch / Contact Us</button>
                    </div>
                    
                    {/* Second Card */}
                    <div className="col-md-5 m-2 p-4 shadow rounded text-center bg-light">
                        <i className="fab fa-whatsapp fa-3x text-success mb-3"></i>
                        <h5 className="fw-bold">Chat with us</h5>
                        <p>Feel free to drop us a text on WhatsApp and chat with our customer care executives in case of any queries at <strong>00000000</strong>.</p>
                        <button className="btn btn-success">WhatsApp</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Customercare;
