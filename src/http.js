/**
 * Easy HTTP Library
 * Library for Making HTTP Requests
 * 
 * @version 3.0.0
 * @author Dmytro Tuzov
 * @license MIT
 * 
 * **/

class EasyHTTP {
  // Make an HTTP get request
  async get(url) {
    const response = await fetch(url);
    const respData = await response.json();
    return respData;
  }

  // Make an HTTP post request
  async post(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': "application/json"
      },
      body: JSON.stringify(data)
    })
    const respData = await response.json();
    return respData;
  }

  // Make an HTTP put request
  async put(url, data) {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': "application/json"
      },
      body: JSON.stringify(data)
    });
    const respData = await response.json();
    return respData;
  }

  // Delete post
  async delete(url) {
    const response = fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-type': "application/json"
      }
    });

    const respData = await 'Resourse deleted';
    return respData;
  }
}

export const http = new EasyHTTP();