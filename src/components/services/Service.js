import Config from './Config';

export default class Service {
    constructor() {
        this.host = Config.host;
    }

    getSessionToken() {
        return localStorage.getItem('sessionToken');
    }

    signUp(firstName, lastName, username, email, password) {
        return new Promise((resolve, reject) => {
            const signUpUrl = `${this.host}/register`;
            const xhr = new XMLHttpRequest();
            
            xhr.open('POST', signUpUrl, true);
            xhr.setRequestHeader('Content-Type', 'application/json');

            xhr.onload = function() {
                if (xhr.status === 200) {
                    const response = JSON.parse(xhr.responseText);
                    resolve(response);
                } else {
                    reject(new Error('Sign-up failed'));
                }
            };

            xhr.ontimeout = () => {
                reject(new Error('Request timed out'));
            };

            xhr.onerror = () => {
                reject(new Error('Network error'));
            };

            const userData = { firstName, lastName, username, email, password };
            xhr.send(JSON.stringify(userData));
        });
    }

    signIn(username, password) {
        return new Promise((resolve, reject) => {
            const signInUrl = `${this.host}/login`;
            const xhr = new XMLHttpRequest();
    
            xhr.open('POST', signInUrl, true);
            xhr.setRequestHeader('Content-Type', 'application/json');
    
            xhr.onload = function() {
                if (xhr.status === 200) {
                    const response = JSON.parse(xhr.responseText);
                    if (response.sessionToken) {
                        localStorage.setItem('sessionToken', response.sessionToken);
                        resolve(response);
                    } else {
                        reject(new Error('Session token not found in response'));
                    }
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
    
            const userData = { username, password };
            xhr.send(JSON.stringify(userData));
        });
    }

    checkCredentialCall() {
        return new Promise((resolve, reject) => {
            const checkUrl = `${this.host}/checkcredential`;
            const xhr = new XMLHttpRequest();
            const sessionToken = this.getSessionToken();

            xhr.open('POST', checkUrl, true);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.setRequestHeader('Authorization', `Bearer ${sessionToken}`);

            xhr.onload = function() {
                if (xhr.status === 200) {
                    const response = JSON.parse(xhr.responseText);
                    resolve(response);
                } else {
                    reject(new Error('Credential check failed'));
                }
            };

            xhr.ontimeout = () => {
                reject(new Error('Request timed out'));
            };

            xhr.onerror = () => {
                reject(new Error('Network error'));
            };

            xhr.send();
        });
    }

    logout() {
        return new Promise((resolve, reject) => {
            const logoutUrl = `${this.host}/logout`;
            const xhr = new XMLHttpRequest();
            xhr.open('POST', logoutUrl, true);
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    
            xhr.onload = function() {
                if (xhr.status === 200) {
                    localStorage.removeItem('sessionToken');
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
            const sessionToken = this.getSessionToken();

            xhr.open('POST', sendMoneyUrl, true);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.setRequestHeader('Authorization', `Bearer ${sessionToken}`);

            xhr.onload = function() {
                const response = JSON.parse(xhr.responseText);
                if (xhr.status === 200) {
                    resolve(response);
                } else {
                    reject(new Error(response.error || 'Error sending money'));
                }
            };

            xhr.ontimeout = () => {
                reject(new Error('Request timed out'));
            };

            xhr.onerror = () => {
                reject(new Error('Network error'));
            };

            const data = { receiver, amount, currency };
            xhr.send(JSON.stringify(data));
        });
    }

    getBalance() {
        return new Promise((resolve, reject) => {
            const url = `${this.host}/balance`;
            const xhr = new XMLHttpRequest();
            const sessionToken = this.getSessionToken();

            xhr.open('GET', url, true);
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.setRequestHeader('Authorization', `Bearer ${sessionToken}`);
      
            xhr.onload = function() {
                if (xhr.status === 200) {
                    const response = JSON.parse(xhr.responseText);
                    resolve(response);
                } else {
                    reject(new Error('Error fetching balance'));
                }
            };
      
            xhr.onerror = () => {
                reject(new Error('Network error'));
            };
      
            xhr.send();
        });
    }
}