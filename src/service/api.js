import sendRequest from "./http";

const url = {
    CITY: 'db/city',
    POINT: 'db/point',
    CAR: 'db/car',
    CATEGORY: 'db/category',
}

export default {
    getCities() {
        return sendRequest(url.CITY);
    },
    getPoints() {
        return sendRequest(url.POINT);
    },
    getCars() {
        return sendRequest(url.CAR);
    },
    getCategorys() {
        return sendRequest(url.CATEGORY);
    }
}