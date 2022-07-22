// Imports go first

import { makePottery } from "./PotteryWheel"



// Make 5 pieces of pottery at the wheel
let mug = makePottery(potteryShape, potteryWeight, potteryHeight)
let plate = makePottery(potteryShape, potteryWeight, potteryHeight)
let vase = makePottery(potteryShape, potteryWeight, potteryHeight)
let bowl = makePottery(potteryShape, potteryWeight, potteryHeight)
let flask = makePottery(potteryShape, potteryWeight, potteryHeight)

// Fire each piece of pottery in the kiln
import { firePottery } from "./kiln"

firePottery(mug, 1000)
firePottery(plate, 1000)
firePottery(vase, 1000)
firePottery(bowl, 1000)
firePottery(flask, 1300)
// Determine which ones should be sold, and their price
import { toSellOrNotToSell } from "./potteryCatalog"

import { usePottery} from "./potteryCatalog"


toSellOrNotToSell(mug)
toSellOrNotToSell(plate)
toSellOrNotToSell(vase)
toSellOrNotToSell(bowl)
toSellOrNotToSell(flask)

// Invoke the component function that renders the HTML list



