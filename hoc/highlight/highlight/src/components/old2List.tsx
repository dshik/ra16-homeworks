import React from "react";
import Article from "./Article";
import Video from "./Video";
import New from "./New";
import Popular from "./Popular";

type List = Array<{
    type: string;
    title?: string;
    url?: string;
    views: number;
}>;

interface ListProp { list: List }

export default function List(props: ListProp) {
    return props.list.map(item => {
        let compVA = <></>
        
        switch (item.type) {
            case 'video':
                compVA = <Video {...item} />;
            case 'article':
                compVA = <Article {...item} />;
        }

        //if (item.views < 100) {
        //    return (
        //        <New>
        //            {compVA}
        //        </New>
        //    );
        //}

        //if (item.views > 1000) {
        //    return (
        //        <Popular>
        //            {compVA}
        //        </Popular>
        //    );
        //}

       return compVA;
    });
};