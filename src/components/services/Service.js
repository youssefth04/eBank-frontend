import Config from './Config';



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

    
   
    

  
   
    Logout() {
        return new Promise((resolve, reject) => {
            const logoutUrl = `${this.host}/logout`;
            const xhr = new XMLHttpRequest();
            xhr.open('POST', logoutUrl, true); // Use true for asynchronous request
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    
            xhr.onload = function() {
                if (xhr.status === 200 && xhr.readyState==4) {
                    resolve();
                } else {
                    reject(new Error('Logout failed'));
                }
            };
    
            xhr.onerror = () => {
                reject(new Error('Network error'));
            };
    
            xhr.send();
        });
    }
    sendMoney(receiver, amount, currency) {
        return new Promise((resolve, reject) => {
            const sendMoneyUrl = `${this.host}/send-money`;
            const xhr = new XMLHttpRequest();
            xhr.open('POST', sendMoneyUrl, true); // Use true for asynchronous request
            xhr.setRequestHeader('Content-Type', 'application/json');

            xhr.onload = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    const response = JSON.parse(xhr.responseText);
                    resolve(response);
                } else {
                    reject(new Error('Error sending money'));
                }
            };

            xhr.ontimeout = () => {
                reject(new Error('Request timed out'));
            };

            xhr.onerror = () => {
                reject(new Error('Network error'));
            };

            const data = {
                receiver,
                amount,
                currency
            };

            xhr.send(JSON.stringify(data));
        });
    }
}
