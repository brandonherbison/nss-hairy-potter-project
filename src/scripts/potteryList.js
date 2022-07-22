import { usePottery } from "./potteryCatalog.js"


export const PotteryList = () => {
    const allPottery = usePottery()

    let potteryHTMLString = ""
    for (const pottery of allPottery) {
        potteryHTMLString += `
<section class="pottery" id="pottery--${pottery.id}">
    <h2 class="pottery__shape">${pottery.shape}</h2>
    <div class="pottery__properties">
        Item weighs ${pottery.weight} grams and is ${pottery.height} cm in height
    </div>
    <div class="pottery__price">
        Price is $${pottery.price}
    </div>
</section>
        `
    }
    return potteryHTMLString
}