import { Link } from "react-router-dom";

function Header(){
    return(
        <div>
            <ul id="header">
                <li><Link to ="/">Home</Link> </li>
                <li><Link to ="/Search">Search</Link> </li>
                <li><Link to ="/BookClub">BookClub</Link> </li>
            </ul>
        </div>
    )
}

export default Header