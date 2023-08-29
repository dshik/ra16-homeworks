import React from "react";
import Article from "./Article";
import Video from "./Video";
import New from "./New";
import { Block } from "../App";
import Popular from "./Popular";

type List = Array<Block>;

interface ListProp { list: List }

export default function List(props: ListProp) {
    return props.list.map(item => {
        let compVA = <></>
        if (item.type === 'video') {
            compVA = <Video {...item} />
        }
        if (item.type === 'article') {
            compVA = <Article {...item} />
        }

        if (item.views < 100) {
            return (
                <New>
                    {compVA}
                </New>
            );
        }

        if (item.views > 1000) {
            return (
                <Popular>
                    {compVA}
                </Popular>
            );
        }

        switch (item.type) {
            case 'video':
                return (
                    <Video {...item} />
                );
            case 'article':
                return (
                    <Article {...item} />
                );
        }

        return (<>{compVA}</>);
    });
};