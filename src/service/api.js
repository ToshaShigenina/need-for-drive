import sendRequest from "./http";

const url = {
  CITY: 'db/city',
  POINT: 'db/point',
}

export default {
  getCities() {
    return sendRequest(url.CITY);
  },
  getPoints() {
    return sendRequest(url.POINT);
  }
}