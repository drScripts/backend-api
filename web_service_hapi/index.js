const { routes } = require("./routes");
const hapi = require("@hapi/hapi");

const hapiInit = async () => {
  const server = hapi.server({
    host: "localhost",
    port: 3000,
  });

  server.route(routes);

  await server.start();
  console.log(`Your server start at ${server.info.uri}`);
};

hapiInit();
