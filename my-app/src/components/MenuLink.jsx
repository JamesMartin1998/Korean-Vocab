import React from "react";
import { Link } from "react-router-dom";

const MenuLink = (props) => {
    const {slug, title, extraClass} = props;

    return (
        <Link 
            className={extraClass ? `MenuLink ${extraClass}` : "MenuLink"}
            to={`${slug}`}
        >
            {title}
        </Link>
    )
}

export default MenuLink;