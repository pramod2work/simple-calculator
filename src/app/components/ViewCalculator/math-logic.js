import { MATH_OPERATIONS } from '../../constants/global'

// eslint-disable-next-line import/prefer-default-export
export const calculateLogic = (number) => {
  const arrayNumbers = number.split(/[^\d|.]/g)
  const arrayOperators = number.split(/[\d|.]/g)
  const operations = []

  arrayOperators.forEach((opr) => {
    if (opr) {
      operations.push(opr)
    }
  })

  let prevArg = Number(arrayNumbers[0] || 0)
  operations.forEach((opr, idx) => {
    const nextArg = Number(arrayNumbers[idx + 1] || 0)
    switch (opr) {
      case MATH_OPERATIONS.DIV:
        if (prevArg === 0 || nextArg === 0) {
          prevArg = 0
        } else {
          prevArg /= nextArg
        }
        break
      case MATH_OPERATIONS.MUL:
        if (prevArg === 0 || nextArg === 0) {
          prevArg = 0
        } else {
          prevArg *= nextArg
        }
        break
      case MATH_OPERATIONS.SUB:
        prevArg -= nextArg
        break
      default:
      case MATH_OPERATIONS.ADD:
        prevArg += nextArg
        break
    }
  })

  return prevArg
}
