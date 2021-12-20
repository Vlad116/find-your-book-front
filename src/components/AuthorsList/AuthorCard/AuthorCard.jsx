import React from 'react';
import { 
	Link as RouterLink,
} from 'react-router-dom';
import MaterialLink from '@mui/material/Link';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PersonIcon from '@mui/icons-material/Person';
import "../../../App.css";
import { borderRadius, width } from '@mui/system';
import { isNull } from 'lodash';

const AuthorCard = ({ id, name, biography }) => {
	// console.log(id);
	// console.log(description);
	// console.log(year);
	// console.log(year)
	// console.log(authors);
	return (
	<Card sx={{ maxWidth: 1400 }}>
		<CardContent>
			<Typography gutterBottom variant="h5" component="div" sx={{textAlign: "start", display: "flex", flexDirection: "row"}}>
				{<MaterialLink 
							component={RouterLink}
							underline="none"
							color="inherit" 
							sx={{ display: "flex", alignItems: "center", justifyContent: "center", paddingLeft: "1vw"}}
							to={`/books/${id}`}>
							<PersonIcon/> {name}
				</MaterialLink>
				}
				{/* {authors.map((author, i) => <MaterialLink 
							component={RouterLink}
							underline="none"
							color="inherit" 
							sx={{ display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem", paddingLeft: "0.5vw"}}
							to={`/authors/${author.id}`}>
							{`${i === 0 ? '— ' : ''} ${author.name}${(i + 1) === authors.length ? '.':', '}`}
						</MaterialLink>
				)} */}
			</Typography>
			{/* <Typography variant="body2" color="text.secondary" sx={{ textAlign: ""}}>
				{biography}
        	</Typography> */}
		</CardContent>
  	</Card>
  );
};

export default AuthorCard;
