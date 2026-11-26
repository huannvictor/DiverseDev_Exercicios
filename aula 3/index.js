const input1 = Number(process.argv[2]);
const input2 = Number(process.argv[3]);

const maior = input1 > input2 ? input1 : input2;
const menor = input1 < input2 ? input1 : input2;

const media = (input1 + input2) / 2;

console.log(`O maior é: ${maior}`);
console.log(`O menor é: ${menor}`);
console.log(`A média é: ${media}`);
