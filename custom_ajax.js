function HttpRequest() {
  this.http = new XMLHttpRequest();
}
HttpRequest.prototype.GET = function (url) {
  return new Promise((resolve, reject) => {
    if (url === "") {
      return reject("URL cannot be an empty string ");
    }
    if (typeof url === "undefined") {
      return reject("URL cannot undefined");
    }
    this.http.open("GET", url, true);
    this.http.onload = () => {
      if (this.http.status === 200 || this.http.status < 400) {
        resolve(this.http.responseText);
      } else {
        resolve("Error: " + this.http.status);
      }
    };
    this.http.send();
  });
};
HttpRequest.prototype.POST = function (url, data) {
  return new Promise((resolve, reject) => {
    if (url === "") {
      return reject("URL cannot be an empty string ");
    }
    if (typeof url === "undefined") {
      return reject("URL cannot undefined");
    }
    if (typeof data !== "object") {
      return reject("data must be an object");
    }

    this.http.open("POST", url, true);
    this.http.setRequestHeader("Content-type", "application/json");
    this.http.onload = () => {
      resolve(this.http.responseText);
    };
    this.http.send(JSON.stringify(data));
  });
};
HttpRequest.prototype.PUT = function (url, data, callback) {
  // PUT request
  return new Promise((resolve, reject) => {
    if (url === "") {
      return reject("URL cannot be an empty string ");
    }
    if (typeof url === "undefined") {
      return reject("URL cannot undefined");
    }
    if (typeof data !== "object") {
      return reject("data must be an object");
    }

    this.http.open("PUT", url, true);
    this.http.setRequestHeader("Content-type", "application/json");
    this.http.onload = () => {
      resolve(this.http.responseText);
    };
    this.http.send(JSON.stringify(data));
  });
};
