import { useEffect, useState } from "react";

interface DetailsProp { isSelected: boolean;
                        id: number;
                    }

type UserDetail = {
                    id: number;
                    name:string;
                    avatar: string;
                    details: {
                        city: string;
                        company: string;
                        position: string;
                    }
                }


const userDetailList = [
    {
        "id": 1,
        "name": "Dorthy McClure Sr.",
        "avatar": "https://i.pravatar.cc/300",
        "details": {
            "city": "Sipesfort",
            "company": "Hilll LLC",
            "position": "Regional Identity Supervisor"
        }
    },
    {
        "id": 2,
        "name": "Kyleigh Ortiz",
        "avatar": "https://i.pravatar.cc/300",
        "details": {
            "city": "Strosinfort",
            "company": "Wilkinson Inc",
            "position": "Dynamic Branding Consultant"
        }
    },
    {
        "id": 3,
        "name": "Delia Halvorson",
        "avatar": "https://i.pravatar.cc/300",
        "details": {
            "city": "East Marielle",
            "company": "Heller LLC",
            "position": "Product Paradigm Facilitator"
        }
    },
    {
        "id": 5,
        "name": "Mohamed Kertzmann",
        "avatar": "https://i.pravatar.cc/300",
        "details": {
            "city": "Ruthiehaven",
            "company": "Toy LLC",
            "position": "Future Functionality Administrator"
        }
    },
    {
        "id": 6,
        "name": "Vladimir Tromp",
        "avatar": "https://i.pravatar.cc/300",
        "details": {
            "city": "Feestville",
            "company": "Kuhn - Lueilwitz",
            "position": "International Factors Specialist"
        }
    },
    {
        "id": 7,
        "name": "Laron Trantow",
        "avatar": "https://i.pravatar.cc/300",
        "details": {
            "city": "South Aydenmouth",
            "company": "Jacobson LLC",
            "position": "Investor Integration Consultant"
        }
    },
    {
        "id": 8,
        "name": "Adolph Rohan",
        "avatar": "https://i.pravatar.cc/300",
        "details": {
            "city": "Meredithshire",
            "company": "Yundt, Wisoky and Little",
            "position": "Investor Data Supervisor"
        }
    },
    {
        "id": 9,
        "name": "Dr. Grady Abernathy",
        "avatar": "https://i.pravatar.cc/300",
        "details": {
            "city": "South Angelicaberg",
            "company": "Schneider and Sons",
            "position": "District Response Facilitator"
        }
    },
    {
        "id": 10,
        "name": "Robbie Mayer",
        "avatar": "https://i.pravatar.cc/300",
        "details": {
            "city": "Kassulkeport",
            "company": "Jacobson - Davis",
            "position": "Dynamic Accountability Strategist"
        }
    },
]

export default function Details(props: DetailsProp): JSX.Element {
    const [idUserView, setIDSelected] = useState(props.id)

    let userSelected: UserDetail = {
        id: 0,
        name: "string",
        avatar: "string",
        details: {
            city: "string",
            company: "string",
            position: "string",
        }
    }

    //async function loadUsers() {
    //function loadUsers() {
        //const url = `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${String(idUserView)}.json`
        //const responce = await fetch(url);
        //const data = await responce.json();
        //userSelected = data
        //setIDSelected(userSelected.id)
        //console.log(url)
        //console.log(userSelected)
    //    userSelected = userDetailList[idUserView-1]
    //    setIDSelected(userSelected.id)
    //}
    
    useEffect(() => {
        //loadUsers()
        userSelected = userDetailList[idUserView-1]
        setIDSelected(userSelected.id)
      }, [props.id])

    if (props.isSelected) {
        return (
            <>
                <h1>I am in Details</h1>
                <p>{userSelected.name}</p>
                <p>{props.id}</p>
                <p>{userSelected.id}</p>
                <p>{idUserView}</p>
            </>
        )
    } else {
        return (
            <></>    
        )
    }
}