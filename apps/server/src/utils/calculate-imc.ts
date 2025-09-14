export function calculateIMC({ height, weight }: { height: number, weight: number }) {
  const imc = (weight / (height * height))

  return imc.toFixed(1)
}