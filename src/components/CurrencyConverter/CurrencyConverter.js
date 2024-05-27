import React, { Component } from "react";
import Service from '../services/Service';

class CurrencyConverterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amount: '',
            fromCurrency: 'USD',
            toCurrency: 'MAD',
            convertedAmount: null,
            error: null
        };
        this.service = new Service();
    }

    handleInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleFormSubmit = async (event) => {
        event.preventDefault();
        const { amount, fromCurrency, toCurrency } = this.state;

        if (amount <= 0) {
            this.setState({ error: "Please enter a valid amount." });
            return;
        }

        try {
            const convertedAmount = await this.service.convertCurrency(amount, fromCurrency, toCurrency);
            this.setState({ convertedAmount, error: null });
        } catch (error) {
            this.setState({ error: "Error converting currency. Please try again." });
        }
    }

    render() {
        const { amount, fromCurrency, toCurrency, convertedAmount, error } = this.state;

        return (
            <div>
                <h2 style={{ textAlign: "center" }}>Currency converter</h2>
                <form onSubmit={this.handleFormSubmit}>
                    <label htmlFor="amount">Amount :</label>
                    <input
                        className="money"
                        type="number"
                        name="amount"
                        value={amount}
                        onChange={this.handleInputChange}
                        placeholder="100"
                        min="0"
                    />
                    <br /><br />
                    <div className="Currency-e" style={{ display: "flex", alignItems: "center" }}>
                        <h4 style={{ padding: "1em" }}>From</h4>
                        <select
                            className="selectCurrency"
                            name="fromCurrency"
                            value={fromCurrency}
                            onChange={this.handleInputChange}
                        >
                            <option value="USD">USD</option>
                            <option value="MAD">MAD</option>
                            {/* Add more options as needed */}
                        </select>
                        <h4 style={{ padding: "1em" }}>To</h4>
                        <select
                            className="selectCurrency"
                            name="toCurrency"
                            value={toCurrency}
                            onChange={this.handleInputChange}
                        >
                            <option value="USD">USD</option>
                            <option value="MAD">MAD</option>
                            {/* Add more options as needed */}
                        </select>
                        <button type="submit" className="Convertbtn">Convert</button>
                    </div>
                </form>
                {convertedAmount !== null && (
                    <h3 id="Results" style={{ textAlign: "center" }}>
                        Converted Amount: {convertedAmount}
                    </h3>
                )}
                {error && (
                    <h3 id="Results" style={{ textAlign: "center", color: "red" }}>
                        {error}
                    </h3>
                )}
            </div>
        );
    }
}

export default CurrencyConverterComponent;