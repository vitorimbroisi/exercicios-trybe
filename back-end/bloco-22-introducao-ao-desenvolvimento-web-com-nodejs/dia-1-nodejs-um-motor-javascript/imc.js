const imc = (peso, altura) =>  {
  const imc1 = (peso / (altura * altura)).toFixed(2)
  console.log("seu imc é:", imc1);
  if (imc1 < 18.5) {
    console.log('Situação: Abaixo do peso (magreza)');
    return;
  }

  if (imc1 >= 18.5 && imc1 < 25) {
    console.log('Situação: Peso normal');
    return;
  }

  if (imc1 >= 25 && imc1 < 30) {
    console.log('Situação: Acima do peso (sobrepeso)');
    return;
  }

  if (imc1 >= 30 && imc1 < 35) {
    console.log('Situação: Obesidade grau I');
    return;
  }

  if (imc1 >= 35 && imc1 < 40) {
    console.log('Situação: Obesidade grau II');
    return;
  }

  console.log('Situação: Obesidade graus III e IV');
}

module.exports = {
  imc
}