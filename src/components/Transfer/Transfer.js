import React, { Component } from 'react';
import Service from '../services/Service';

class Transfer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            receiver: '',
            amount: '',
            currency: 'USD',
            message: '',
        };

        this.service = new Service();
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { receiver, amount, currency } = this.state;
        this.service.sendMoney(receiver, amount, currency)
            .then(response => {
                this.setState({ message: 'Money sent successfully!' });
            })
            .catch(error => {
                this.setState({ message: 'Failed to send money: ' + error.message });
            });
    };

    render() {
        const { receiver, amount, currency, message } = this.state;

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h2>Send money to</h2>
                    <input
                        type="text"
                        name="receiver"
                        placeholder="Email, username"
                        value={receiver}
                        onChange={this.handleChange}
                    />
                    <br />
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <input
                            type="number"
                            name="amount"
                            placeholder="Min 5 USD"
                            min="5"
                            value={amount}
                            onChange={this.handleChange}
                        />
                        <select
                            name="currency"
                            value={currency}
                            onChange={this.handleChange}
                        >
                            <option value="USD">USD</option>
                            <option value="EUR">EUR</option>
                            <option value="MAD">MAD</option>
                        </select>
                    </div>
                    <button
                        type="submit"
                        style={{ backgroundColor: '#03087f', marginTop: '3em' }}
                    >
                        Send
                    </button>
                </form>
                {message && <p>{message}</p>}
            </div>
        );
    }
}

export default Transfer;
