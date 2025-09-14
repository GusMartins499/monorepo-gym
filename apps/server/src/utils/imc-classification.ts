import { IMC_CLASSFICATION, IMC_CLASSIFICATION_TO_LABEL } from "./constants"

export function classifyIMC(imc: number): IMC_CLASSFICATION {
  if (imc < 18.5) {
    return IMC_CLASSFICATION.UNDERWEIGHT
  } else if (imc <= 24.9) {
    return IMC_CLASSFICATION.NORMAL
  } else if (imc <= 29.9) {
    return IMC_CLASSFICATION.OVERWEIGHT
  } else if (imc <= 34.9) {
    return IMC_CLASSFICATION.OBESE_I
  } else if (imc <= 39.9) {
    return IMC_CLASSFICATION.OBESE_II
  } else {
    return IMC_CLASSFICATION.OBESE_III
  }
}

export const mapImcClassificationToLabel = (classification: IMC_CLASSFICATION): string =>
  IMC_CLASSIFICATION_TO_LABEL[classification]