function criptografar(frase, chave) {
    const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    //const alfabeto = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let resultado = "";

    //Transforma a chave em um deslocamento
    chave = chave.toUpperCase();
    const deslocamento = alfabeto.indexOf(chave);

    //Converte toda a frase para letras maiúsculas
    frase = frase.toUpperCase();

    //Percorrer cada caractere
    for (let i = 0; i < frase.length; i++) {
        const char = frase[i];

        //Verificar se o caractere está no alfabeto
        if (alfabeto.includes(char)) {
            const index = alfabeto.indexOf(char);
            const novoIndex = (index + deslocamento) % 26;
            resultado += alfabeto[novoIndex];
        }
        // Caracteres que não estão no alfabeto permanecem inalterados
        else {
            resultado += char;
        }
    }
    return resultado;
}

function descriptografar(frase, chave) {
    const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    let resultado = "";

    // Transforma a chave em um deslocamento
    chave = chave.toUpperCase();
    const deslocamento = alfabeto.indexOf(chave);

    // Converte toda a frase para letras maiúsculas
    frase = frase.toUpperCase();

    // Percorrer cada caractere
    for (let i = 0; i < frase.length; i++) {
        const char = frase[i];

        // Verificar se o caractere está no alfabeto
        if (alfabeto.includes(char)) {
            const index = alfabeto.indexOf(char);
            // Retrocede no alfabeto (considera números negativos)
            const novoIndex = (index - deslocamento + 26);
            resultado += alfabeto[novoIndex];
        } 
        // Caracteres que não estão no alfabeto permanecem inalterados
        else {
            resultado += char;
        }
    }
    return resultado;
}

//console.log(criptografar("Olá, bom dia. Meu nome é Alexandre!", "F"));
console.log(descriptografar("TQÁ, GTR INF. RJZ STRJ É FQJCFSIWJ!", "F"));