// create a new object (reducing) to only store the values we're actually going to use
//* this is the type that will be fed into PokemonView
export interface Pokemon {
    name: string
    height: number
    weight: number
    moves: string[]
    types: string[]
    pictureURL: string
}