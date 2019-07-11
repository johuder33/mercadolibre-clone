const routes = require("next-routes");

const router = routes();

router
.add('search', '/', 'index')
.add('result', '/items', 'result')
.add('detail', '/items/:id', 'detail');

export { router };
