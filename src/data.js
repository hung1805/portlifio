import landingpage from "asset/img/landingpage.png";
import cart from "asset/img/cart.png";
import movieapp from "asset/img/movie_app.png";
import todo from "asset/img/todo.png";

const projects = [
  {
    name: "Shopping Cart",
    image: cart,
    desc: "A simple shopping cart made with Reactjs, Redux Toolkit and Firebase and TailwindCss",
    learning:
      "By doing this project, I learned Reactjs, global state management with Redux( Redux Toolkit), handle asynchronous requests in redux toolkit, permission in a web app, use firebase and firestore for authentication and saving user data.",
    link_demo: "https://cart2-hung1805.vercel.app/",
    link_code: "https://github.com/hung1805/cart",
  },
  {
    name: "Movie App",
    image: movieapp,
    desc: "A simple movie trailer app made with Reactjs and TailwindCss",
    learning:
      "In this project, I learned Reactjs, how to fetch data from API( the movieDb), and use TailwindCss library for stying web app",
    link_demo: "https://movie-app-zeta-opal.vercel.app/",
    link_code: "https://github.com/hung1805/movie_app",
  },
  {
    name: "Todo App",
    image: todo,
    desc: "Todo App with Reactjs",
    learning:
      "In project, I learned HTML, CSS and JS, how to use JS for interacting with DOM",
    link_demo: "https://todo-app-hung1805.vercel.app/",
    link_code: "https://github.com/hung1805/todo-app",
  },
  {
    name: "Restaurant Landing Page",
    image: landingpage,
    learning:
      "In project, I learned HTML, SASS and JS, how to  use JS for interacting with DOM",
    desc: "Landing Page with HTML, SASS and a little JS",
    link_demo: "https://landingpage-psi-nine.vercel.app/",
    link_code: "https://github.com/hung1805/landingpage",
  },
];

export { projects };
