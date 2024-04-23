import { Pokemon } from "./PokemonType"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';


//lets us add attributes that might be specific to view component
interface PokemonViewProps extends Pokemon {}

function capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

// Dumb component just show Poke info via props
export const PokemonView = ({
    name,
    height,
    weight,
    moves,
    pictureURL,
    types
}: PokemonViewProps) => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center'}}>
        <Card sx={{ maxWidth: 450 }}>
      <CardMedia sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Avatar
        alt={name}
        src={pictureURL}
        sx={{ width: 200, height: 200, border: '1px solid #ccc' }}
        />
     </CardMedia>
      <CardContent>
        <Typography gutterBottom variant="h3" component="div">
          {capitalizeFirstLetter(name)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Height: {height}
          <br />
          Weight: {weight}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            Types: {types.join(', ')}
        </Typography>
        <Divider textAlign="left" sx={{ paddingTop: 2, fontSize: 22 }}>Moves:</Divider>
        <List>
            {moves.slice(0, 5).map((move, index) => (
            <ListItem key={index} sx={{ py: 0, my: 0 }}>
                <ListItemText primary={move} />
            </ListItem>
            ))}
        </List>
      </CardContent>
    </Card>
        </div>
    )
}