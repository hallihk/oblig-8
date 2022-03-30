import { NavLink } from "react-router-dom";

export default function Nav() {
    return (
        <header>
            <div>
                <NavLink to="/movies">
                    Home
                </NavLink>
                <NavLink to="/movies">
                    Movielist
                </NavLink>
                <NavLink to="/actors">
                    Actorlist
                </NavLink>
            </div>
        </header>
    )
}