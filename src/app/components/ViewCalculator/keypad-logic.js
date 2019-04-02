import { MATH_OPERATIONS } from '../../constants/global'

const keysPerRow = (keyStartIndex, mathOperation) => {
  const rowKeys = []
  let i = 0
  while (i < 3) {
    rowKeys.push({
      keyId: `seq-${keyStartIndex + i}`,
      displayName: `${keyStartIndex + i}`,
      value: `${keyStartIndex + i}`
    })
    i += 1
  }

  if (mathOperation) {
    rowKeys.push({
      keyId: `seq-${mathOperation}`,
      displayName: `${mathOperation}`,
      value: `${mathOperation}`
    })
  }

  return rowKeys
}

// eslint-disable-next-line import/prefer-default-export
export const keypadSequence = [
  {
    keyId: 'seq-row-1',
    keys: [
      { keyId: 'seq-delete', delete: true, displayName: 'D' },
      { keyId: 'seq-blank-1', blank: true },
      { keyId: 'seq-blank-2', blank: true },
      { keyId: 'seq-blank-3', blank: true }
    ]
  },
  {
    keyId: 'seq-row-2',
    keys: keysPerRow(1, MATH_OPERATIONS.ADD)
  },
  {
    keyId: 'seq-row-3',
    keys: keysPerRow(4, MATH_OPERATIONS.SUB)
  },
  {
    keyId: 'seq-row-4',
    keys: keysPerRow(7, MATH_OPERATIONS.MUL)
  },
  {
    keyId: 'seq-row-5',
    keys: [
      { keyId: 'seq-.', displayName: '.', value: '.' },
      { keyId: 'seq-0', displayName: '0', value: '0' },
      { keyId: `seq-${MATH_OPERATIONS.DISPLAY}`, displayName: MATH_OPERATIONS.DISPLAY, value: MATH_OPERATIONS.DISPLAY },
      { keyId: `seq-${MATH_OPERATIONS.DIV}`, displayName: MATH_OPERATIONS.DIV, value: MATH_OPERATIONS.DIV }
    ]
  }
]
