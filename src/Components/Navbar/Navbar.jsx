import {Link} from "react-router-dom";
import React from "react";

function Navbar () {
    return(
        <navbar>
            <Link to="/Women">Women</Link>
            <Link to="/Men">Men</Link>
            <Link to="/Boys">Boys</Link>
            <Link to="/Girls">Girls</Link>
            <Link to="/Sale">Sale</Link>
        </navbar>
    )

}
export default Navbar;