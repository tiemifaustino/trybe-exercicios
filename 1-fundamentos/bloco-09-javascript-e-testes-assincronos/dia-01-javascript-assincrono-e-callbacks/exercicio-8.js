// 8 - Para o próximo exercício, você vai sentir na pele o primeiro dia de um treinador Pokémon! No laboratório do Professor Carvalho, você é informado de que existem três pokémons disponíveis: Bulbasaur, Charmander e Squirtle. Complete a chamada da função getPokemonDetails de modo que ela imprima no console os detalhes do pokémon que você escolheu. PS: é possível que o sistema do Professor Carvalho apresente erros caso o pokémon não exista no banco de dados, então não se esqueça de tratá-los também, combinado?

const pokemons = [
    {
        name: 'Bulbasaur',
        type: 'Grass',
        ability: 'Razor Leaf',
    },
    {
        name: 'Charmander',
        type: 'Fire',
        ability: 'Ember',
    },
    {
        name: 'Squirtle',
        type: 'Water',
        ability: 'Water Gun',
    },
];
  
function getPokemonDetails(filter, callback) {
setTimeout(() => {
    // Se o nome do pokemón não for encontrado => mensagem de erro
    if (pokemons.find(filter) === undefined) {
    return callback(new Error('Não temos esse pokémon para você :('), null);
    }
    // Aqui é feito um filter para procurar no array o pokemon dado no parâmetro da função
    const pokemon = pokemons.find(filter);

    // Desestruturação do objeto pokemon
    const { name, type, ability } = pokemon;

    // Formação da mensagem do pokemon passado na função
    const messageFromProfOak = `Olá, seu pokémon é o ${name}, o tipo dele é ${type} e a habilidade principal dele é ${ability}`;
    callback(null, messageFromProfOak);
}, 2000);
}
  
getPokemonDetails(
    // filtro da função
    (pokemon) => pokemon.name === 'Charmander',

    // callback da função
    (error, message) => error ? console.log(error) : console.log(message)
    // A callback recebe 2 parâmetros, por isso possui o error (null) e message (messageFromProfOak)
);

module.exports = {
getPokemonDetails,
};