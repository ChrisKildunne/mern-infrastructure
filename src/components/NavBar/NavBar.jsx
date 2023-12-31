import { Link } from "react-router-dom";
import * as userService from '../../utilities/users-service'

export default function NavBar({ user, setUser }){

    function handleLogOut(){
        userService.logOut();

        setUser(null);

    }

    return (
        <nav>
           
            <Link to="/bike"> Biking Trails</Link>
            &nbsp; | &nbsp;
            <Link to="/hike">Hiking Trails</Link>
            &nbsp; | &nbsp;
            <span>Welcome, {user.name}</span>
            &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>LogOut</Link>

        </nav>
    )
}