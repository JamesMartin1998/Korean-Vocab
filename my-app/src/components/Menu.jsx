import React from "react";

const Menu = (props) => {
    const {title, links} = props;

    return (
        <div className="Menu">
            <h1 className="Menu--heading">{title}</h1>
            <div className="Menu--links">
                {links}
            </div>
        </div>
    );
}

export default Menu;