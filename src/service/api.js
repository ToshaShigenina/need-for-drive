import http from "./http";

const url = {
  CITY: 'db/city',
  POINT: 'db/point',
  CAR: 'db/car',
  CATEGORY: 'db/category',
  RATE: 'db/rate',
  ORDER_STATUS: 'db/orderStatus',
  ORDER: 'db/order',
}

const cityCoords = [{
    id: "6011452fad015e0bb6997e1d",
    name: "Уфа",
    coords: [54.735152, 55.958736],
  },
  {
    id: '625f21f873b6110018102d63',
    name: 'Москва',
    coords: [55.755819, 37.617644]
  },
  {
    id: '627116602fcd4e0010a04b47',
    name: 'Воронеж',
    coords: [51.660786, 39.200269]
  },
  {
    id: '6271166b2fcd4e0010a04b49',
    name: 'Анапа',
    coords: [44.894818, 37.316367]
  },
  {
    id: '62718a059093d200112246c0',
    name: 'Казань',
    coords: [55.796127, 49.106414]
  },
  {
    id: "60d6e4d32aed9a0b9b84fa82",
    name: "Краснодар",
    coords: [45.03547, 38.975313],
  },
  {
    id: "627116772fcd4e0010a04b4a",
    name: "Краснодар",
    coords: [45.03547, 38.975313],
  },
  {
    id: "6005b8f9ad015e0bb6997778",
    name: "Санкт-Петербург",
    coords: [59.939099, 30.315877],
  },
  {
    id: "61a3675e05c99b2812794ed7",
    name: "Ростов-на-Дону",
    coords: [47.222078, 39.720358],
  },
  {
    id: "61ab1310bb7a006c05c5497f",
    name: "Екатеринбург",
    coords: [56.838011, 60.597474],
  },
  {
    id: "61b30fe9bb7a006c05c54e2b",
    name: "Ульяновск",
    coords: [54.314192, 48.403132],
  },
  {
    id: "6238c42573b61100181018e1",
    name: "Омск",
    coords: [54.989347, 73.368221],
  },
  {
    id: "615a1d1218f5c2264119b91a",
    name: "Саранск",
    coords: [54.187433, 45.183938],
  },
  {
    id: "61585c3818f5c2264119b859",
    name: "Сочи",
    coords: [43.585472, 39.723098],
  },
  {
    id: "6114e2a22aed9a0b9b85083e",
    name: "Воронеж",
    coords: [51.660786, 39.200269],
  },
  {
    id: "5ea07c3b099b810b946c627b",
    name: "Саратов",
    coords: [51.533562, 46.034266],
  },
];

const pointCoords = [{
    id: "60bb074b2aed9a0b9b82fc71",
    name: "Арт-Квадрат",
    coords: [54.728759, 55.946212],
  },
  {
    id: "6114630f2aed9a0b9b850806",
    name: "Автомобильная парковка",
    coords: [45.046319, 39.030356],
  },
  {
    id: "615ae47018f5c2264119b939",
    name: "Пункт",
    coords: [59.935119, 30.349339],
  },
  {
    id: "61a391e605c99b2812794f1c",
    name: "Администрация",
    coords: [47.221705, 39.712156],
  },
  {
    id: "61adef6bbb7a006c05c54a8a",
    name: "Магнит",
    coords: [56.901277, 60.585967],
  },
  {
    id: "61b310cfbb7a006c05c54e2c",
    name: "Мариинская гимназия",
    coords: [54.31228, 48.395406],
  },
  {
    id: "61ae2822bb7a006c05c54b77",
    name: "Психоневрологический диспансер",
    coords: [55.747059, 37.598402],
  },
  {
    id: "627593dc55c2b50010d50bd3",
    name: "Детская библиотека",
    coords: [54.185784, 45.182986],
  },
  {
    id: "6275942c55c2b50010d50bd4",
    name: "Музей искусства",
    coords: [54.987394, 73.391281],
  },
  {
    id: "627594a355c2b50010d50bd6",
    name: "Больница",
    coords: [51.656948, 39.177317],
  },
];

export default {
  getCities(query) {
    return http.sendGet(url.CITY, query)
      .then(data => {
        data.data = data.data.map(item => {
          const city = cityCoords.find(elem => elem.id === item.id)
          if (city) item.coords = city.coords;
          return item;
        })
        return data;
      });
  },
  getPoints() {
    return http.sendGet(url.POINT)
      .then(data => {
        data.data = data.data.map(item => {
          const point = pointCoords.find(elem => elem.id === item.id)
          if (point) item.coords = point.coords;
          return item;
        })
        return data;
      });
  },
  getCars(query) {
    return http.sendGet(url.CAR, query);
  },
  getCategorys(query) {
    return http.sendGet(url.CATEGORY, query);
  },
  getRates(query) {
    return http.sendGet(url.RATE, query);
  },
  getOrderStatuses(query) {
    return http.sendGet(url.ORDER_STATUS, query);
  },
  getOrder(query, id) {
    return http.sendGet(url.ORDER, query, id);
  },
  postOrder(body) {
    return http.sendPost(url.ORDER, body);
  }
}