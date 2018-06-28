import { server } from "../config";

class Api {
  static get(endpoint) {
    return fetch(`http://${server.HOST}:${server.PORT}/${endpoint}`, {
      method: "GET"
    })
      .then(response => response.json())
      .catch(error => error);
  }

  static post({ endpoint, title, price }) {
    const body = JSON.stringify({
      title: title,
      price: price
    });

    return fetch(`http://${server.HOST}:${server.PORT}/${endpoint}`, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json"
      }),
      body: body
    })
      .then(response => response.json())
      .catch(error => error);
  }

  static delete({ endpoint, id }) {
    return fetch(`http://${server.HOST}:${server.PORT}/${endpoint}/${id}`, {
      method: "DELETE"
    })
      .then(response => response.json())
      .catch(error => error);
  }
}

export default Api;
