import { tailwindColours } from '@/store/features/colours/tailwindColours'

const computeDistance = ({
  baseColour,
  tailwindColour,
}: {
  baseColour: [number, number, number]
  tailwindColour: [number, number, number]
}): number => {
  return Math.sqrt(
    Math.pow(tailwindColour[0] - baseColour[0], 2) +
      Math.pow(tailwindColour[1] - baseColour[1], 2) +
      Math.pow(tailwindColour[2] - baseColour[2], 2)
  )
}

export const getClosestTailwindColour = (
  baseColour: [number, number, number]
): string => {
  type ColourNameToDistance = Record<string, number>

  const colourDistances: ColourNameToDistance = Object.entries(
    tailwindColours
  ).reduce((acc, current) => {
    const [colourName, colourRgb] = current

    return {
      ...acc,
      [colourName]: computeDistance({
        baseColour,
        tailwindColour: colourRgb,
      }),
    }
  }, {} as ColourNameToDistance)

  const closestTailwindColours = Object.entries(colourDistances).reduce(
    (acc, current) => {
      const [colourName, distance] = current

      if (distance < acc.distance) {
        return { colourName, distance }
      }

      return acc
    },
    { colourName: '', distance: 256 }
  )

  return closestTailwindColours.colourName
}
