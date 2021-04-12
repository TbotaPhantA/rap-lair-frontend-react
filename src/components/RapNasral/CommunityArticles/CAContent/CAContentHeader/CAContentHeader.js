import React, { useState } from 'react';
import './CAContentHeader.css';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from "@material-ui/core/FormControl";
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    sort: {
        width: "20vw",

    },
}))

const darkTheme = createMuiTheme({
    palette: {
        type: 'dark'
    }
})

function CAContentHeader() {
    const styles = useStyles();
    const [sortBy, setSortBy] = useState('newest');    
    const [search, setSearch] = useState('')
    
    const handleSortChange = (event) => {
        setSortBy(event.target.value);
        console.log(sortBy);
    }

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    }
    
    return (
        <>
        <ThemeProvider theme={darkTheme}>
            <div className="CA_content_header">
                <div className="CA_content_sort">
                        <FormControl>
                            <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
                            <Select
                                className={styles.sort}
                                color="primary"
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                darkMode="true"
                                value={sortBy}
                                onChange={handleSortChange}
                            >

                                <MenuItem value={'mostPopular'}>Most Popular</MenuItem>
                                <MenuItem value={'newest'}>newest</MenuItem>
                                <MenuItem value={'oldest'}>oldest</MenuItem>
                            </Select> 
                        </FormControl>
                </div> 
                <div className="CA_content_search">
                    <SearchIcon />
                    <TextField 
                    value={search} 
                    onChange={handleSearchChange} 
                    id="standard-basic" 
                    label="Search" 
                    autoComplete="off" />
                </div> 
            </div>
        </ThemeProvider>
        </>
    );
}

export default CAContentHeader;