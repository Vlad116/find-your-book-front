import React from 'react';
import { 
	Link as RouterLink,
} from 'react-router-dom';
import MaterialLink from '@mui/material/Link';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import PersonIcon from '@mui/icons-material/Person';
import "../../../App.css";

const AuthorCard = ({ id, name, biography }) => {
	return (
	<Card sx={{ maxWidth: 1400 }}>
		<CardContent>
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
		</CardContent>
  	</Card>
  );
};

export default AuthorCard;
