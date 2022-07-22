let potteryNumber = 1;

export const makePottery = (clayShape, clayWeight, clayHeight) => {
        const clayObject = {
            shape: clayShape,
            weight: clayWeight,
            height: clayHeight,
            id: potteryNumber++
        }
        return clayObject
}