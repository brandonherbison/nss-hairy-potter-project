//import { makePottery } from "./PotteryWheel.js"

export const firePottery = (potteryObject, temperature) => {
    potteryObject.fired = true
    if (temperature > 2200) {
        potteryObject.cracked = true
    }
    if (temperature <= 2200) {
        potteryObject.cracked = false
    }
    return potteryObject
}