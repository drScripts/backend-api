const routes = [
  {
    method: "GET",
    path: "/",
    handler: (request, h) => {
      return "Home Page";
    },
  },
  {
    method: "*",
    path: "/",
    handler: (request, h) => {
      return "Halaman tidak dapat diakses dengan method tersebut";
    },
  },
  {
    method: "GET",
    path: "/about",
    handler: (request, h) => {
      return "About Page";
    },
  },
  {
    method: "*",
    path: "/about",
    handler: (request, h) => {
      return "Halaman tidak dapat diakses dengan method tersebut";
    },
  },
  {
    method: "GET",
    path: "/users/{username}",
    handler: (request, h) => {
      const { username } = request.params;
      return `Hello ${username}`;
    },
  },
  {
    method: "*",
    path: "/users/{username}",
    handler: (request, h) => {
      const method = request.method;
      return `Halaman tidak dapat diakses dengan method ${method}`;
    },
  },
  {
    method: "GET",
    path: "/users",
    handler: (request, h) => {
      return `Anda Memerlukan Parameter username untuk mengakses halaman ini`;
    },
  },
  {
    method: "*",
    path: "/{any*}",
    handler: (request, h) => {
      return "Halaman tidak ditemukan";
    },
  },
];

module.exports = { routes };
