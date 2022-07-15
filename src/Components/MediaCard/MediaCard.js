import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import image from '../../Images/enrique.jpg'
import {cardStyles} from './styles'
const  MultiActionAreaCard = () => {
  return (
    <Card sx={cardStyles}>
      <CardActionArea>
        <CardMedia
          component="img"
        //   height="140"
          image={image}
          alt="Enrique Mejia"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Enrique Mejia
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Hi, My name is Enrique
          </Typography>
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions> */}
    </Card>
  );
}

export default MultiActionAreaCard;