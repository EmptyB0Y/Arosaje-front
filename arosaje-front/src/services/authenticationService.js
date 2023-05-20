export const login = async (email, password) => {

    const response = await fetch('http://127.0.0.1:3000/auth/login', {
      method: 'POST',
      headers: {
        "content-type": "application/json",
        "accept": "*/*"
      },
      body: JSON.stringify({
        'email' : email,
        'password' : password
      })
    });

    return response;
};

export const signup = async (email, password) => {

  const response = await fetch('http://127.0.0.1:3000/auth/signup', {
    method: 'POST',
    headers: {
      "content-type": "application/json",
      "accept": "*/*"
    },
    body: JSON.stringify({
      'email' : email,
      'password' : password
    })
  });

  return response;
};