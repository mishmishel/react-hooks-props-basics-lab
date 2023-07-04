import React from "react";

function Links( {links} ) {
    return (
        <React.Fragment>
        <h3>Links</h3>
        <a href={links.github}>{links.github}</a>
        <a href={links.linkedin}>{links.linkedin}</a>
    </React.Fragment>
    )
}

export default Links;

