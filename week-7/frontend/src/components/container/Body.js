import {Route, Switch} from "react-router-dom";
import Home from '../pages/Home';
import Search from '../pages/Search';
import BookClub from '../pages/BookClub'

export default function Body(){
    return(
        <div id="body">
            <Switch>
                <Route exact ={true} path='/'>
                    <Home />
                </Route>
                <Route exact ={true} path='/Search'>
                    <Search />
                </Route>
                <Route exact ={true} path='/BookClub'>
                    <BookClub />
                </Route>
            </Switch> 
        </div>
    )
}