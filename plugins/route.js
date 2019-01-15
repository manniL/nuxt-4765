import axios from "axios";

export default ({ app }) => {
  app.router.beforeEach(async function(to, from, next) {
    await axios.get(`https://jsonplaceholder.typicode.com/posts/1`);
    next();
  });
};
