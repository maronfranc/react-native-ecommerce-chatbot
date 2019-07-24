
// Se a string for mais longa que o limit, não mostra mais o resto e adiciona '...'
export const truncateChars = (input: string, limit: number): string => {
  return input.length > limit ? `${input.substring(0, limit)}...` : input;
}

// Recebe um número, deixa com duas casas decimais e muda o ponto para vírgula
export const replaceDotWithComma = (number: number): string => {
  return number.toFixed(2).toString().replace(".", ",");
}

/* 
'Typescript: Função Genérica'
Tipo genérico T deve ser pelo menos um array de objetos com id: numérico; 
Para ter id numérico ou string mudar para <T extends { id: number | string}>;
nomeDaFunction<Tipo>(array, item);
*/
// Retorna o Produto, se estiver no carrinho com quantidade diferente; senão retorna undefined;
export const findInArrayOfObjects = <T extends { id: number }>(array: T[], item: T): T | undefined => {
  return array.find((arrayItem: T) => {
    if (arrayItem.id === item.id)
      return arrayItem;
  });
}