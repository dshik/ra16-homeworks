import React from "react";

export default function Popular(props: any): JSX.Element {
    return (
        <div className="wrap-item wrap-item-popular">
            <span className="label">Popular!</span>
            {props.children}
        </div>
    )
};