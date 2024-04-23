// Going to house all of the logic
import { PokemonView } from "./PokemonView"
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Pokemon } from "./PokemonType"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

// make types for api's for things you're grabbing
interface PokemonFromAPI {
    name: string
    height: number
    weight: number
    moves: {
        move: {
            name : string
        }
    }[]
    types: {
        type: {
            name: string
        }
    }[]
    sprites: {
        front_default: string
    }
}


export const PokemonController = () => {

    //useState for newPokemon
    const [ pokemon, setPokemon ] = useState<Pokemon>()

    //textField useState
    const [ pokemonText, setPokemonText] = useState<string>('1')

    //pokemonId is parameter that we need to take in from SearchBar
    const fetchPokemon = async (pokemonId: string) => {
        //* wrap everything in a try catch in case given an invalid ID can handle error gracefully
        try {
        //axios stores it return inside the data key
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
        const pokemonFromApi: PokemonFromAPI = data

        console.log(pokemonFromApi)

        // declare object of Pokemon type that is assigned to object literal
        const newPokemon: Pokemon = {
            name: pokemonFromApi.name,
            height: pokemonFromApi.height,
            weight: pokemonFromApi.weight,
            //map function to grab moves
            moves: pokemonFromApi.moves.map(moveObj => moveObj.move.name),
            types: pokemonFromApi.types.map(typeObj => typeObj.type.name),
            pictureURL: pokemonFromApi.sprites.front_default
        }

        console.log(newPokemon)

        //store object by creating useState to store pokemon value
        setPokemon(newPokemon)
    } catch (e) {
        setPokemon(undefined)
    }
    }

    //give this useEffect empty dependency array so it only runs once on page load
    useEffect(() => {
        fetchPokemon('1')
    }, [])

    const handleClick = () => {
        fetchPokemon(pokemonText)
    }


    return (

        <div>
            <br />
            <TextField 
                id="outlined-basic" 
                label="Search Pokemon by ID" 
                variant="outlined" 
                value={pokemonText}
                onChange= {(event) => setPokemonText(event.target.value)}
                type='number'
            />
            
            <Button onClick={handleClick}
            variant="outlined">Search</Button>
            <br />
            <br />
            <br />
            {pokemon ? 
            <PokemonView {...pokemon} /> 
            : 'Not Found'}

        </div>

        
    )

}