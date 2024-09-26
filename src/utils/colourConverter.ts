const componentToHex = (c: number): string => {
  const hex = c.toString(16)
  return hex.length === 1 ? '0' + hex : hex
}

export const rgbToHex = (r: number, g: number, b: number): string => {
  return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`
}

export const hexToRgb = (hexColour: string): [number, number, number] => {
  const hex = hexColour.replace(/^#/, '')
  const bigint = parseInt(hex, 16)

  const red = ((bigint >> 16) & 255) as number
  const green = ((bigint >> 8) & 255) as number
  const blue = (bigint & 255) as number

  return [red, green, blue]
}
