import React, { Component } from "react";

class CurrencyConverter extends Component {
    render() {
        return (
            <div>
                <h2 style={{ textAlign: "center" }}>Currency converter</h2>
                <form>
                    <label htmlFor="money">Amount :</label>
                    <input className="money" type="number" name="money" placeholder="100" min="0" />
                    <br /><br />
                    <div className="Currency-e" style={{ display: "flex", alignItems: "center" }}>
                        <h4 style={{ padding: "1em" }}>From</h4>
                        <select className="selectCurrency">
                            <option>USD</option>
                            <option>MAD</option>
                        </select>
                        <h4 style={{ padding: "1em" }}>To</h4>
                        <select className="selectCurrency">
                            <option>USD</option>
                            <option>MAD</option>
                        </select>
                        <button type="submit" className="Convertbtn">Convert</button>
                    </div>
                </form>
                <h3 id="Results" style={{ textAlign: "center" }}>????</h3>
            </div>
        );
    }
}

export default CurrencyConverter;