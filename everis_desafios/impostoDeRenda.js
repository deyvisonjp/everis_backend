let salario = prompt();
salario = parseFloat(salario);

if (salario <= 2000) {
  console.log("Isento");
} else if (salario > 2000.00 && salario <= 3000.00) {
  var acc = salario - 2000;
  console.log("R$ " + (acc * 0.08).toFixed(2))
} else if (salario > 3000 && salario <= 4500.00) {
  let acc1 = (1000 * 0.08);
  let acc2 = (salario - 3000) * 0.18;
  let imp = (acc1 + acc2)
  console.log("R$ " + (imp).toFixed(2))
} else {
  let imp1 = (1000 * 0.08)
  let imp2 = (1500 * 0.18)
  let imp3 = (salario - 4500) * 0.28;
  imp = parseFloat(imp1 + imp2 + imp3);
  console.log("R$ " + imp.toFixed(2));
}


let calc = 4500;
calc = parseFloat(calc);

if (calc<=2000){
  console.log('Isento');
} else if (calc<=3000) {
  segundaFaixa = (calc - 2000)*0.08;
  result = parseFloat(segundaFaixa);
  result = result.toFixed(2);
  console.log('R$ ' + result);
} else if (calc<=4500) {
    aux1 = calc - 2000;
    aux2 = calc - 3000;
    aux2 = aux2>=0 ? aux2 : 0;
    segundaFaixa = ((calc - 2000)-aux2)* 0.08;
    terceiraFaixa = (calc - 3000) * 0.18;
    result = parseFloat(segundaFaixa+terceiraFaixa);
    result = result.toFixed(2);
      console.log('R$ ' + result);
} else {
    aux1 = calc - 2000;
    aux2 = calc - 3000;
    aux3 = calc - 4500;
    aux2 = aux2>=0 ? aux2 : 0;
    aux3 = aux3>=0 ? aux3 : 0;
    segundaFaixa = ((calc - 2000)-aux2)* 0.08;
    terceiraFaixa = ((calc - 3000)-aux3) * 0.18;
    quartaFaixa =  (calc-4500) * 0.28;
    result = parseFloat(segundaFaixa+terceiraFaixa+quartaFaixa);
    result = result.toFixed(2);
   console.log('R$ ' + result);
}