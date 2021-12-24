import React from 'react';
import { 
	Link as RouterLink,
} from 'react-router-dom';
import MaterialLink from '@mui/material/Link';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import BookIcon from '@mui/icons-material/Book';
import "../../../App.css";
import bookUndefined from '../../../assets/img/poster-undefined.jpg'
import { isNull } from 'lodash';

const BookCard = ({ id, name, description, image, year, tags, genres, authors }) => {
	// console.log(image)
	return (
	<Card sx={{ maxWidth: 1400, display: 'flex', flexDirection: "row", alignItems: "flex-start", justifyContent: "space-around" }}>
		<CardContent>
			<Typography gutterBottom variant="h5" component="div" sx={{textAlign: "start", display: "flex", flexDirection: "row"}}>
				{<MaterialLink 
							component={RouterLink}
							underline="none"
							color="inherit" 
							sx={{ display: "flex", alignItems: "center", justifyContent: "center", paddingLeft: "1vw"}}
							to={`/books/${id}`}>
							<BookIcon />{name} {year ? `(${year})` : ''}
				</MaterialLink>
				}
				{authors.map((author, i) => <MaterialLink 
							component={RouterLink}
							underline="none"
							color="inherit" 
							sx={{ display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem", paddingLeft: "0.5vw"}}
							to={`/authors/${author.id}`}>
							{`${i === 0 ? '— ' : ''} ${author.name}${(i + 1) === authors.length ? '.':', '}`}
						</MaterialLink>
				)}
			</Typography>
			{genres.length === 0 ? null
				: <Box sx={{
							display: "flex",
							flexDirection: "row",
							flexGrow: 1,
							flexWrap: "wrap",
							width: 'fit-content',
							marginBlock: "0.4vw"
						}}>
					{
						genres.map((genre, i) => <Box
							sx={{
								flexGrow: 1,
								color: '#FFFFFF',
								backgroundColor: '#03aaf9',
								width: 'fit-content',
								borderRadius: '4px',
								paddingInline: '3px',
								paddingBottom: '2px',
								marginLeft: '1vw',
								marginBlock: '2px',
							}}
						>
							{genre}
						</Box>)
					}
				</Box>
			}
			{isNull(tags) ? null 
			: <Box sx={{
				display: "flex",
				flexDirection: "row",
				flexWrap: "wrap",
				flexGrow: 1,
				width: 'fit-content',
				marginBlock: "0.5vw"
			}}>
				{
					tags.map((tag, i) => <Box
						sx={{
							flexGrow: 1,
							color: '#FFFFFF',
							backgroundColor: '#80cc00',
							width: 'fit-content',
							borderRadius: '4px',
							paddingInline: '3px',
							paddingBottom: '2px',
							marginLeft: '1vw',
							marginBlock: '2px'
						}}
					>
						{tag}
					</Box>)
				}
			</Box>}
		</CardContent>
		<CardMedia
			component="img"
			className='CardImage'
			image={image ? image : bookUndefined}
			sx={{ width: '300px', height: '400px', marginInline: '1vw', marginBlock: '1vw' }}
			alt="Card image"
		/>
  	</Card>
  );
};

export default BookCard;
