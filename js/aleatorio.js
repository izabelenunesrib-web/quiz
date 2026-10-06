const nomes = ["Helena", "Rafael", "Luna", "Davi", "Iara", "Caio", "Nina"];

export function aleatorio(lista) {
    const posicao = Math.floor(Math.random() * lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes);
