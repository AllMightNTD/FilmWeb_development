
import Home from "../Page/Home/home";
import Employee from "../Page/Employee/Employee"
import CreatEmployee from "../Page/CreatEmployee/CreatEmployee";
import ListEmployee from "../Page/ListEmployee/ListEmployee";
import UpdateFilm from "../Page/UpdateFilm/UpdateFilm";
import MovieDetail from "../Page/MovieDetail/MovieDetail";
const publicRoutes = [
    {path : '/' , component : Employee},
    {path : '/Employee' , component: Employee},
    {path : '/create' , component: CreatEmployee , layout :'null'},
    {path : '/listEmployee' , component: ListEmployee},
    {path : '/EditFilm/:id' , component : UpdateFilm  },
    {path : '/MovieDetail/:slug' , component : MovieDetail  }
]

const privateRoutes =[];

export {publicRoutes , privateRoutes};