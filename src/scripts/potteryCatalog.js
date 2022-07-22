const potteryCatalog = []

export const toSellOrNotToSell = (potteryObject) => {
    if (potteryObject.weight >= 6 && potteryObject.cracked == false) {
        potteryObject.price = 40
    }
    else if (potteryObject.weight < 6 && potteryObject.cracked == false) {
        potteryObject.price = 20
    }
    if (potteryObject.cracked == false) {
        potteryCatalog.push(potteryObject)
    }
    return potteryObject
}


export const usePottery = () => {
    return potteryCatalog.map((pottery => ({...pottery})))
}