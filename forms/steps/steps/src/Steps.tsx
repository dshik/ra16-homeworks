import React, { useState } from "react"

interface Step {
    strDateStep: string;
    distance: number;
    id: string;
}

const arrStep: Step[] = [
    {
        strDateStep: '01.07.2023',
        distance: 5,
        id: "2023-07-01"
    },
    {
        strDateStep: '02.07.2023',
        distance: 7,
        id: "2023-07-02"
    },
    {
        strDateStep: '04.07.2023',
        distance: 9,
        id: "2023-07-04"
    },
]

function convertDateString(strDate0: string): string {
    let strDate1 = strDate0.substring(8) + '.';
    strDate1 = strDate1 + strDate0.substring(5,7) + '.'
    strDate1 = strDate1 + strDate0.substring(0,4);

    return strDate1;
}

function comparateStep(a: Step, b: Step) {
    if (a.id > b.id) {
      return 1;
    }
    if (a.id < b.id) {
      return -1;
    }
    return 0;
}

function add2Array(elemNew: Step): void {
    let isNew: boolean = true
    for (const el of arrStep) {
        if (el.id === elemNew.id) {
            isNew = false;
            el.distance += elemNew.distance;
        }
      }
    if (isNew) {
        arrStep.push(elemNew);
        arrStep.sort(comparateStep);
    }
}

function removeStep(stepID: string): void {
    for (let i=0; i<arrStep.length; i++) {
        if (arrStep[i].id === stepID) {
            arrStep.splice(i, 1);
            break;
        }
    }
}

export default function Steps() {
    const [arrActualSteps, SetArrActualSteps] = useState([...arrStep]);
    
    const handlerAddStep = (event: any): void => {
        event.preventDefault()

        let strDate = event.target.dateInput.value
        if (strDate === "") {
            alert("Введите дату обязательно");
        } else {
            let newStep: Step = {
                strDateStep: convertDateString(strDate),
                distance: parseInt(event.target.distanceInput.value),
                id: strDate
            };

            add2Array(newStep);
            SetArrActualSteps([...arrStep]);

            event.target.dateInput.value = "";
            event.target.distanceInput.value = "";
       }
    }

    const handlerRemoveStep = (stepID: string): void => {
        removeStep(stepID);
        SetArrActualSteps([...arrStep]);
    }

    return ( 
        <>
            <div> 
                <h1>I in Steps</h1>
                <form onSubmit={handlerAddStep}>
                    <fieldset>
                        <legend>Добавить прогулку</legend>
                        <label htmlFor="dateInput">Дата   </label>
                        <input
                            type="date"
                            id = "dateInput"
                            placeholder="DD.MM.YYYY"
                        />
                        <label htmlFor="distanceInput">   Пройдено   </label>
                        <input
                            id = "distanceInput"
                            placeholder="км"
                        />
                        <button>ОК</button>                        
                   </fieldset>
                </form>
 
                <ul>
                    {
                        arrActualSteps.map((step: Step) => (
                                <li key={ step.id }>
                                    { step.strDateStep } ____ { step.distance } км
                                    <button onClick={() => handlerRemoveStep(step.id)}>Del</button>
                                </li>
                            )
                        )
                    }
                </ul>
            </div>
        </>
    )
}