
// Recebe um número, deixa com duas casas decimais e muda o ponto para vírgula
export const replaceDotWithComma = (number: number): string => {
  return number.toFixed(2).replace(".", ",");
}

/* 
'Typescript: Função Genérica'
Tipo genérico T deve ser pelo menos um array de objetos com id: numérico; 
Para ter id numérico ou string mudar para <T extends { id: number | string}>;
nomeDaFunction<Tipo>(array, item);
*/
// Retorna o tipo T {ex:Produto} se estiver no array {ex:Carrinho} com quantidade diferente;
// Senão retorna undefined; "T | undefined"
export const findInArrayOfObjects = <T extends { id: number }>(array: T[], item: T): T | undefined => {
  return array.find((arrayItem: T) => {
    if (arrayItem.id === item.id)
      return arrayItem;
  });
}