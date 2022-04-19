export const incQuantity = (num) => {
  return {
    type: "INCREMENT",
    payload: num,
  }
}

export const decQuantity = () => {
  return {
    type: "DECREMENT",
  }
}
