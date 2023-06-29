import './main.css'

type MainImage = {
    listing_image_id: number,
    hex_code: null,
    red: null,
    green: null,
    blue: null,
    hue: null,
    saturation: null,
    brightness: null,
    is_black_and_white: null,
    creation_tsz: null,
    listing_id: number,
    rank: null,
    url_75x75: string,
    url_170x135: string,
    url_570xN: string,
    url_fullxfull: string,
}

type OfferCardList = {
    listing_id: number,
    state: string,
    error_messages?: Array<any>,
    user_id?: number | undefined,
    category_id?: any,
    title?: string,
    description?: string,
    creation_tsz?: number,
    ending_tsz?: number,
    original_creation_tsz?: number,
    last_modified_tsz?: number,
    price?: string,
    currency_code?: string,
    quantity?: number,
    sku?: Array<string | undefined>,
    tags?: Array<string>,
    category_path?: Array<string>,
    category_path_ids?: Array<any>,
    materials?: Array<string>,
    shop_section_id?: number | null,
    featured_rank?: number | null,
    state_tsz?: number,
    url?: string,
    views?: number,
    num_favorers?: number,
    shipping_template_id?: number | null,
    processing_min?: number | null,
    processing_max?: number | null,
    who_made?: string,
    is_supply?: string,
    when_made?: string,
    item_weight?: null,
    item_weight_unit?: string,
    item_length?: null,
    item_width?: null,
    item_height?: null,
    item_dimensions_unit?: string,
    is_private?: boolean,
    recipient?: string | null,
    occasion?: null,
    style?: Array<string> | null,
    non_taxable?: boolean,
    is_customizable?: boolean,
    is_digital?: boolean,
    file_data?: string,
    should_auto_renew?: boolean,
    language?: string,
    has_variations?: boolean,
    taxonomy_id?: number,
    taxonomy_path?: Array<string>,
    used_manufacturer?: boolean,
    MainImage: MainImage,
}

type ArrayOfferCardList = {
    data: Array<OfferCardList>
}

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
    let data5: Array<OfferCardList> = []
    let point3: string = ''
    if (props.data.length > 5) {
        data5 = props.data.slice(0, 5)
        point3 = "..."
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
