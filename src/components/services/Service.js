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

    signIn(username, password,sessionToken) {
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
                password,
                sessionToken
            };

            xhr.send(JSON.stringify(userData));
        });
    }

    checkCredentialCall(sessionToken) {
    return new Promise((resolve, reject) => {
        const checkurl = `${this.host}/checkcredential`;
        const xhr = new XMLHttpRequest();

        xhr.open('POST', checkurl, true);
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

        xhr.send(JSON.stringify({ sessionToken }));
    });
}
   
    Logout() {
        return new Promise((resolve, reject) => {
            const logoutUrl = `${this.host}/logout`;
            const xhr = new XMLHttpRequest();
            xhr.open('POST', logoutUrl, true); // Use true for asynchronous request
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    
            xhr.onload = function() {
                if (xhr.status === 200) {
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
            xhr.open('POST', sendMoneyUrl, true);
            xhr.setRequestHeader('Content-Type', 'application/json');
    
            xhr.onload = function() {
                if (xhr.readyState === 4) {
                    const response = JSON.parse(xhr.responseText);
                    if (xhr.status === 200) {
                        resolve(response);
                    } else if (xhr.status === 400) {
                        reject(new Error(response.error || 'Bad Request'));
                    } else if (xhr.status === 500) {
                        reject(new Error(response.error || 'Internal Server Error'));
                    } else {
                        reject(new Error('Unexpected response status: ' + xhr.status));
                    }
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
    getBalance() {
        return new Promise((resolve, reject) => {
          const url = `${this.host}/balance`; // Adjust the endpoint URL as necessary
          const xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.setRequestHeader('Content-Type', 'application/json');
    
          xhr.onload = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
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