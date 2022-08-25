
import Home from "../Page/Home/home";
import Employee from "../Page/Employee/Employee"
import CreatEmployee from "../Page/CreatEmployee/CreatEmployee";
import ListEmployee from "../Page/ListEmployee/ListEmployee";
import UpdateFilm from "../Page/UpdateFilm/UpdateFilm";
const publicRoutes = [
    {path : '/' , component : Home},
    {path : '/Employee' , component: Employee},
    {path : '/create' , component: CreatEmployee , layout :'null'},
    {path : '/listEmployee' , component: ListEmployee , layout :'null'},
    {path : '/EditFilm/:id' , component : UpdateFilm , layout:null},
    {path : '/MovieDetail/:slug' , component : MovieDetail , layout:null}
]

const privateRoutes =[];

export {publicRoutes , privateRoutes};