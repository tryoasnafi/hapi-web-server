const routes = [
  {
    method: "GET",
    path: "/",
    handler: (request, h) => {
      return "Homepage";
    },
  },
  {
    method: "*",
    path: "/",
    handler: (request, h) => {
      return h
        .response(
          `Halaman tidak dapat diakses dengan method ${request.method.toUpperCase()}`
        )
        .code(400);
    },
  },
  {
    method: "GET",
    path: "/about",
    handler: (request, h) => {
      return "About page";
    },
  },
  {
    method: "*",
    path: "/about",
    handler: (request, h) => {
      return h
        .response(
          `Halaman tidak dapat diakses dengan method ${request.method.toUpperCase()}`
        )
        .code(400);
    },
  },
  {
    method: "GET",
    path: "/hello/{name?}",
    handler: (request, h) => {
      const { name = "stranger" } = request.params;
      const { lang } = request.query;

      if (lang === "id") return `Hai, ${name}!`;
      return `Hello, ${name}!`;
    },
  },
  {
    method: "*",
    path: "/{any*}",
    handler: (request, h) => {
      return h.response("Halaman tidak ditemukan").code(404);
    },
  },
];

module.exports = routes;
