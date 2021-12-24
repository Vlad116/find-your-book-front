import React from 'react';
import { 
	Link as RouterLink,
} from 'react-router-dom';
import MaterialLink from '@mui/material/Link';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PersonIcon from '@mui/icons-material/Person';
import CardMedia from '@mui/material/CardMedia';
import authorUndefined from '../../../assets/img/author-undefined.jpg'
import "../../../App.css";

const AuthorCard = ({ id, image, name, biography }) => {
	return (
	<Card sx={{ maxWidth: 1400 }}>
		<CardContent sx={{display: 'flex', flexDirection: "row", alignItems: "flex-start", justifyContent: "space-around"}}>
			<Typography gutterBottom variant="h5" component="div" sx={{textAlign: "start", display: "flex", flexDirection: "row"}}>
				{<MaterialLink 
					component={RouterLink}
					underline="none"
					sx={{ display: "flex", alignItems: "center", justifyContent: "center", paddingLeft: "1vw"}}
					to={`/authors/${id}`}>
					<PersonIcon/> {name}
				</MaterialLink>
				}
			</Typography>
			<CardMedia
				component="img"
				className='CardImage'
				image={image ? image : authorUndefined}
				sx={{ width: '300px', height: '400px', marginInline: '1vw', marginBlock: '1vw' }}
				alt="Card image"
			/>
		</CardContent>
  	</Card>
  );
};

export default AuthorCard;
