import React, { Component } from "react";

class Transfer extends Component {
    render() {
        return (
            <div >
                <form action="index.html" method="post">
                    <h2>Send money to</h2>
                    <input type="text" name="receiver" placeholder="Email, username" /> <br />
                    <div style={{ display: "flex", alignItems: "center" }}> 
                        <input type="number" name="money" placeholder="Min 5 USD" min="5" />
                        <select name="currency">
                            <option>USD</option>
                            <option>MAD</option>
                        </select>
                    </div>
                    <button style={{ backgroundColor: "#03087f", marginTop: "3em" }}>Send</button>
                </form>
            </div>
        );
    }
}

export default Transfer;