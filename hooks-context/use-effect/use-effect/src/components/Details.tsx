import { UserDetail } from "./List";

interface DetailsProp { userSelected: UserDetail; }


export default function Details(props: DetailsProp): JSX.Element | null {

    return (
            <>
                <p>{props.userSelected.name}</p>
                <p>{props.userSelected.avatar}</p>
                <img src={props.userSelected.avatar} />
                <p>City:{props.userSelected.details.city}</p>
                <p>Company:{props.userSelected.details.company}</p>
                <p>Position:{props.userSelected.details.position}</p>
            </>
        )
}