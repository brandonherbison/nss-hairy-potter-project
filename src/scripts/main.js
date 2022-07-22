// Imports go first

import { makePottery } from "./PotteryWheel.js"



// Make 5 pieces of pottery at the wheel
let mug = makePottery("mug", 2, 3)
let plate = makePottery("plate", 4, 1)
let vase = makePottery("vase", 7, 15)
let bowl = makePottery("bowl", 3, 5)
let flask = makePottery("flask", 2, 3)

// Fire each piece of pottery in the kiln
import { firePottery } from "./kiln.js"

let fancyMug = firePottery(mug, 1000)
let fancyPlate = firePottery(plate, 1000)
let fancyVase = firePottery(vase, 1000)
let fancyBowl = firePottery(bowl, 1000)
let fancyFlask = firePottery(flask, 1000)
// Determine which ones should be sold, and their price
import { toSellOrNotToSell } from "./potteryCatalog.js"

//import { usePottery } from "./potteryCatalog"


toSellOrNotToSell(fancyMug)
toSellOrNotToSell(fancyPlate)
toSellOrNotToSell(fancyVase)
toSellOrNotToSell(fancyBowl)
toSellOrNotToSell(fancyFlask)

// Invoke the component function that renders the HTML list
import { PotteryList } from "./potteryList.js"

const parentHTMLElement = document.querySelector(".potteryList")

parentHTMLElement.innerHTML = PotteryList()
