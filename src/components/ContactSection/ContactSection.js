import React,{Component} from "react";

class  ContactSection extends Component {
    render(){
    return(
        <section id="three" className="wrapper style1 fade-up">
            <div className="inner">
                <h2>Contact us</h2>
                <div className="split style1">
                    <section>
                        <form method="post" action="log in.html">
                            <div className="fields">
                                <div className="field half">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" name="name" id="name" required />
                                </div>
                                <div className="field half">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" id="email" required />
                                </div>
                                <div className="field half">
                                    <label htmlFor="subject">Subject</label>
                                    <select>
                                        <option>Opportunities</option>
                                        <option>Complaint</option>
                                        <option>Assistance</option>
                                        <option>Be contacted</option>
                                    </select>
                                </div>
                                <div className="field">
                                    <label htmlFor="message">Message</label>
                                    <textarea name="message" id="message" rows="5"></textarea>
                                </div>
                            </div>
                            <ul className="actions">
                                <li><input type="submit" id="submit" name="Send Message" /></li>
                            </ul>
                        </form>
                    </section>
                    <section>
                        <ul className="contact">
                            <li>
                                <h3>Address</h3>
                                <span>23, Boulevard Hassan II, Quartier Al Adarissa Béni Mellal<br /></span>
                            </li>
                            <li>
                                <h3>Email</h3>
                                <a href="mailto:support@Elitebank.com">support@Elitebank.com</a>
                            </li>
                            <li>
                                <h3>Phone</h3>
                                <a href="tel:+212777777777"><span>(+212 777-777777)</span></a>
                            </li>
                            <li>
                                <h3>Social</h3>
                                <ul className="icons">
                                    <li><a href="https://twitter.com/EliteBank" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
                                    <li><a href="https://Facebook.com/EliteBank" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
                                    <li><a href="https://GitHub.com/EliteBank" className="icon brands fa-github"><span className="label">GitHub</span></a></li>
                                    <li><a href="https://Instagram.com/EliteBank" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
                                    <li><a href="https://LinkedIn.com/EliteBank" className="icon brands fa-linkedin-in"><span className="label">LinkedIn</span></a></li>
                                </ul>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </section>
    );
}
}

export default ContactSection;