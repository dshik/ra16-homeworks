import './main.css'
import type {ArrayOfferCardList} from "./type.tsx"
import type {OfferCardList} from "./type.tsx"

function priceFormat(price: string | undefined, currency_code: string| undefined): string {
    let rizult = "undefined"
    if (typeof price === "string" && typeof currency_code === "string") {
        rizult = price
        if (currency_code === "USD") {
            rizult = "$" + rizult
        }
        if (currency_code === "EUR") {
            rizult = "€" + rizult
        }
        if (currency_code != "EUR" && currency_code != "USD") {
            rizult = rizult + currency_code
        }

    }
    return rizult
}

function getLevelClass(quantity: number | undefined): string {
    let levelClass = ""
    
    if (typeof quantity === "number") {
        levelClass = "item-quantity level-high"

        if (quantity < 10) {
            levelClass = "item-quantity level-low"
            return levelClass
        }
    
        if (quantity < 20) {
            levelClass = "item-quantity level-medium"
            return levelClass
        }    
    }

    return levelClass
}

export default function Listing(props: ArrayOfferCardList) {
    const elemNumber = 3
    let data5: Array<OfferCardList> = []
    let point3: string = ''
    if (props.data.length > elemNumber) {
        data5 = props.data.slice(0, elemNumber)
        point3 = "..."
    } else {
        data5 = props.data
    }

    const offerCardList = data5.map((elem: OfferCardList) =>
        <div className="item-list">
            <div className="item">
                <div className="item-image">
                    <a href={elem.url}>
                        <img src={elem.MainImage.url_570xN} />
                    </a>
                </div>
                <div className="item-details">
                    <p className="item-title">{elem.title}</p>
                    <p className="item-price">{priceFormat(elem.price, elem.currency_code)}</p>
                    <p className= {getLevelClass(elem.quantity)}>{elem.quantity}</p>
                </div>
            </div>
        </div>
    )

    return (
        <>
            <div> 
                <h1>I in Listing</h1>
                {offerCardList}
                <p>{point3}</p>
            </div>
        </>
    )
}
