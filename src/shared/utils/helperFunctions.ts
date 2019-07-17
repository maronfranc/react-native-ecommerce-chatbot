
// Se a string for mais longa que o limit, não mostra mais o resto e adiciona '...'
export function truncateChars(input: string, limit: number): string {
  return input.length > limit ? `${input.substring(0, limit)}...` : input;
}

// Recebe um número, deixa com duas casas decimais e muda o ponto para vírgula
export function replaceDotWithComma(number: number): string {
  return number.toFixed(2).toString().replace(".", ",");
}

