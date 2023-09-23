import { useEffect, useState } from "react";
import { UserList } from "../App";
import Details from "./Details";


interface ListProp { userList: UserList }

export type UserDetail = {
    id: number;
    name: string;
    avatar: string;
    details: {
        city: string;
        company: string;
        position: string;
    }
}

export default function List(props: ListProp): JSX.Element {
    const userEmpty: UserDetail = {
        id: 0,
        name: "",
        avatar: "",
        details: {
            city: "",
            company: "",
            position: ""
        }
    }
    const controller0 = new AbortController();

    const [isSelected, setSelected] = useState(false)
    const [idUserView, setIDSelected] = useState(0)
    const [userSelected, setUserSelected] = useState(userEmpty)
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setError] = useState(false)
    const [activController, setController] = useState(controller0)

    const handlerUserView = (userID: number): void => {
        setSelected(true);
        setIDSelected(userID);
    }

    useEffect(() => {
        const url = `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${String(idUserView)}.json`
        
        if (isLoading) {
            activController.abort();
            const controller = new AbortController();
            setController(controller);
        }

        const signal = activController.signal

        const fetchUser = async () => {
            setIsLoading(true);
            setError(false);
            try {
                const response = await fetch(url, { signal });
                if (!response.ok) {
                    throw new Error(response.statusText);
                }
                let newUserView = await response.json();
                newUserView.avatar = newUserView.avatar + "?img=" + String(newUserView.id)
                setUserSelected(newUserView);
            } catch (e) {
                setError(true);
            } finally {
                setIsLoading(false);
            }
        }
    
        if (isSelected) {
            fetchUser();
        }
      }, [idUserView])
        
    return (
        <>
            <div>
                {props.userList.map(item => (
                    <button key={item.id} onClick={() => handlerUserView(item.id)}>{item.name}</button>
                    ))
                }

                { isLoading ? (<div>Loading ...</div>) : ( null )}
                { isError ? (<div>Loading error</div>) : ( null )}
                { isSelected && !isError && !isLoading ? <Details userSelected={userSelected} /> : null }
            </div>
        </>
    )
}