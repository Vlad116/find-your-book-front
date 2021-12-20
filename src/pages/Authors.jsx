import React, { useState, useEffect } from 'react';
import AuthorsList from '../components/AuthorsList/AuthorsList.jsx';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
	gridContainer: {
	  paddingLeft: "10vw",
	  paddingRight: "10vw"
	}
  });

const Authors = (props) => {
	const classes = useStyles();
	const [filterBy, setFilter] = useState("all")

	
    return (
		<>
			<AuthorsList filterBy={filterBy} />
		</>
    )
}

export default Authors;
