import React from "react";
import { Block } from "../App";

export default function Article(props: Block): JSX.Element {
    return (
        <div className="item item-article" >
            <h3><a href="#">{props.title}</a></h3>
            <p className="views">Прочтений: {props.views}</p>
        </div>
    )
};