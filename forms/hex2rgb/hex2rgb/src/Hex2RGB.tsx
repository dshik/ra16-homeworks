import React, { useState } from "react"

type ColorObj = {
    backgroundValue: string,
    rgbField: string
}

function checkHex(hex: string): boolean {
    let regexp = /^[\da-f]+$/i; // Десятичные цифры и буквы от A до F.
    if (regexp.test(hex))
      return true;
    else
        return false;
}

function convertHex2RGBString(hex: string): string {
    let rizult: string = "RGB("
    rizult = rizult + parseInt(hex.substring(1,2), 16).toString(10) + ",";
    rizult = rizult + parseInt(hex.substring(3,4), 16).toString(10) + ",";
    rizult = rizult + parseInt(hex.substring(5,6), 16).toString(10) +")";
    return rizult;
}

function convertHex2ColorObject(inputValue: string): ColorObj {
    let rizult: ColorObj = {backgroundValue: "white", rgbField: "RGB не определён"};
    if (inputValue.length == 7) {
        if (inputValue[0] === "#") {
            inputValue = inputValue.substring(1);
        } else {
            rizult = { backgroundValue: "red", rgbField: "Ошибка ввода"};
            return rizult;
        }
        if (checkHex(inputValue)) {
            rizult = { backgroundValue: "#" + inputValue, rgbField: convertHex2RGBString(inputValue)};
        } else {
            rizult = { backgroundValue: "red", rgbField: "Ошибка ввода"};
            return rizult;
        }
    }
    return rizult;
}

export default function Hex2RGB() {
    const [colorObject, SetColorObject] = useState({backgroundValue: "white", rgbField: ""});

    const handlerHex = (event: React.ChangeEvent<HTMLInputElement>): void => {
        event.preventDefault();
        SetColorObject(convertHex2ColorObject(event.target.value));
    }
    
    return ( 
        <>
            <div style={ { backgroundColor: colorObject.backgroundValue } } > 
                <h1>I in Hex2RGB</h1>
                <form>
                    <fieldset>
                        <legend>Конвертер Hex в RGB</legend>
                        <input
                            id = "hex"
                            name = "hex"
                            placeholder="#FFFFFF"
                            onChange={handlerHex}
                        />
                        <br />
                        <label htmlFor="RGB"> {colorObject.rgbField} </label>
                    </fieldset>
                </form>
            </div>
        </>
    )
}