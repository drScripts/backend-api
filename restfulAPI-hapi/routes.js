const {
  addHandler,
  getHandler,
  getIdHandler,
  updateHandler,
  deleteHandler,
} = require("./handler");
const routes = [
  {
    method: "GET",
    path: "/notes/{id}",
    handler: addHandler,
    options: {
      cors: {
        origin: ["*"],
      },
    },
  },
  {
    method: "POST",
    path: "/notes",
    handler: getHandler,
    options: {
      cors: {
        origin: ["*"],
      },
    },
  },
  {
    method: "GET",
    path: "/notes",
    handler: getIdHandler,
    options: {
      cors: {
        origin: ["*"],
      },
    },
  },
  {
    method: "PUT",
    path: "/notes/{id}",
    handler: updateHandler,
    options: {
      cors: {
        origin: ["*"],
      },
    },
  },
  {
    method: "DELETE",
    path: "/notes/{id}",
    handler: deleteHandler,
    options: {
      cors: {
        origin: ["*"],
      },
    },
  },
];

module.exports = { routes };
