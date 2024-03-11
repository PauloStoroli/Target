function inverterString(string) {
    let stringInvertida = "";
  
    for (let i = string.length - 1; i >= 0; i--) {
      stringInvertida += string[i];
    }
  
    return stringInvertida;
  }
  
  let textoOriginal = "Me contrata Target!";
  let textoInvertido = inverterString(textoOriginal);
  console.log("Texto original:", textoOriginal);
  console.log("Texto invertido:", textoInvertido);
  
  /*
  Saida:

Texto original: Me contrata Target!
Texto invertido: !tegraT atartnoc eM

*/