import React,{Component} from "react";
 
class Signup extends Component{
	render(){
    return(
        <section id="three" className="wrapper style1 fade-up">
        <div className="inner">
            <h2 style={{ marginLeft: '4em', marginBottom: '2.6em' }}>Become a customer of EliteBank</h2>
            <div className="split style1">
                <section>
                    <form method="post">
                        <div className="fields">
                            <div className="field half">
                                <label htmlFor="fname">First name</label>
                                <input type="text" name="fname" id="fname" required minLength="6" placeholder="First name" autoFocus/>
                            </div>
                            <div className="field half">
                                <label htmlFor="lname">Last name</label>
                                <input type="text" name="lname" id="lname" required minLength="6" placeholder="Last name" autoFocus/>
                            </div>
                            <div className="field half">
                                <label htmlFor="username">Username</label>
                                <input type="text" name="username" id="username"  placeholder="Username"/>
                            </div> 

                            <div className="field half">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" id="email"  placeholder="Email"/>
                            </div>
                            <div className="field half">
                                <label htmlFor="password">Password</label>
                                <input type="password" name="password" id="password" required minLength="8" placeholder="password"/>
                            </div>
                            <div className="field half">
                                <label htmlFor="dateOfBith">Date of birth</label>
                                <input type="date" name="dateOfBith" id="dateOfBith" style={{ backgroundColor: '#00457C' }} />
                            </div>
                            <div className="field half">
                                <label htmlFor="gender">Gender</label>
                               <select>
                                <option value="m">Male</option>
                                <option value="f">Female</option>
                               </select><br />
                            </div>  
                            <div className="field half">
                                <label htmlFor="nationality">Nationality</label>
                                <select>
                                    <option value="m">Morocco</option>
                                    <option value="o">other</option>
                                </select>
                             </div> 
                            <div className="field half">
                                <label htmlFor="idtype">ID type</label>
                               <select>
                                <option value="n">National ID</option>
                                <option value="p">Passport</option>
                                <option value="d">Driver's License</option>
                               </select>
                             </div>
                             <div className="field half">
                                <label htmlFor="idNumber">ID Number</label>
                            <input type="text" placeholder="ID Number" id="idNumber" required minLength="4" />
                        </div> 
                           
                        </div>
                            <ul className="actions">
                                <input type="submit" name="signup" id="signup" value="sign up" style={{ marginLeft: '1em' }} />
                            </ul>
                            <p style={{ textAlign: 'center', fontSize: '1.3em' }}>Have an account?<a style={{ color: '#ffffff', fontSize: '1.1em' }} href="authentification">  log in</a> </p>
                            
                                
                     </form>
                </section>
                
                <section>
                    <ul className="contact" >
                       
                            <h3>Social</h3>
                            <ul className="icons"  >
                                <li><a href="https://twitter.com/EliteBank" className="icon brands fa-twitter" style={{ fontSize: '2em', padding: '0.2em' }}><span className="label">Twitter</span></a></li>
                                <li><a href="https://Facebook.com/EliteBank" className="icon brands fa-facebook-f" style={{ fontSize: '2em', padding: '0.2em' }}><span className="label">Facebook</span></a></li>
                                <li><a href="https://GitHub.com/EliteBank" className="icon brands fa-github" style={{ fontSize: '2em', padding: '0.2em' }}><span className="label">GitHub</span></a></li>
                                <li><a href="https://Instagram.com/EliteBank" className="icon brands fa-instagram" style={{ fontSize: '2em', padding: '0.2em' }}><span className="label">Instagram</span></a></li>
                                <li><a href="https://LinkedIn.com/EliteBank" className="icon brands fa-linkedin-in" style={{ fontSize: '2em', padding: '0.2em' }}><span className="label">LinkedIn</span></a></li>
                            </ul>

                    </ul>
                </section>
            </div>
        </div>
    </section>
  );
}
}
export default Signup