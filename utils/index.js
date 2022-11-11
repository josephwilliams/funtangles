export const rgbToHex = (r, g, b) => {
  if (typeof r === 'number' && typeof g === 'number' && typeof b === 'number') {
    return (
      '#' +
      [r, g, b]
        .map(x => {
          const hex = x.toString(16)
          return hex.length === 1 ? '0' + hex : hex
        })
        .join('')
    )
  } else {
    // throw new Error('Incorrect RBG format')
    return '#000000'
  }
}
