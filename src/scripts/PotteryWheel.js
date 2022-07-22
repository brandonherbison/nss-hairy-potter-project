let potteryNumber = 1;

export const makePottery = (potteryShape, potteryWeight, potteryHeight) => {
        const potteryObject = {
            shape: potteryShape,
            weight: potteryWeight,
            height: potteryHeight,
            id: potteryNumber++
        }
        return potteryObject
}