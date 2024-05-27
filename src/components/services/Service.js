import Config from './Config';
import CurrencyExchanger from 'currency-exchanger-js';


export default class Service {
    constructor() {
        this.host = Config.host;
    }

    signUp(firstName, lastName, username, email, password) {
        return new Promise((resolve, reject) => {
            const signUpUrl = `${this.host}/register`;
            const xhr = new XMLHttpRequest();
            
            xhr.open('POST', signUpUrl, false);
            xhr.setRequestHeader('Content-Type', 'application/json');

            xhr.onload = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    const response = JSON.parse(xhr.responseText);
                    resolve(response);
                } else {
                    reject(new Error('Sign-up failed'));
                }
            };

            xhr.ontimeout = () => {
                reject(new Error('Request timed out'));
            };

           

            const userData = {
                firstName,
                lastName,
                username,
                email,
                password
            };

            xhr.send(JSON.stringify(userData));
        });
    }

    signIn(username, password) {
        return new Promise((resolve, reject) => {
            const signInUrl = `${this.host}/login`;
            const xhr = new XMLHttpRequest();
            
            xhr.open('POST', signInUrl, false);
            xhr.setRequestHeader('Content-Type', 'application/json');

            xhr.onload = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    const response = JSON.parse(xhr.responseText);
                    resolve(response);
                } else {
                    reject(new Error('Sign-in failed'));
                }
            };

            xhr.ontimeout = () => {
                reject(new Error('Request timed out'));
            };

            xhr.onerror = () => {
                reject(new Error('Network error'));
            };

            const userData = {
                username,
                password
            };

            xhr.send(JSON.stringify(userData));
        });
    }

    convertCurrency(amount, fromCurrency, toCurrency) {
        return new Promise((resolve, reject) => {
            const currencyExchanger = new CurrencyExchanger();
            currencyExchanger.convert(amount, fromCurrency, toCurrency)
                .then(response => {
                    resolve(response.convertedAmount);
                })
                .catch(error => {
                    reject(new Error('Error converting currency. Please try again.'));
                });
        });
    }
}