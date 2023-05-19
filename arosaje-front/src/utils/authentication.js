// Utility file for handling authentication (mock implementation)

export const authenticateUser = (username, password) => {
    // Perform authentication logic
    // Return a promise with the authentication result
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Mock implementation: Accept any username and password for demonstration purposes
        if (username && password) {
          resolve(true); // Authentication success
        } else {
          reject(new Error('Invalid username or password')); // Authentication failure
        }
      }, 1000);
    });
  };
  