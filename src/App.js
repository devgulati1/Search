import logo from './logo.svg';
import './App.css';
import { SearchBar } from './components/search-bar/search-bar.component';
import { CardList } from './components/card-list/card-list.component';
import { Card, Grid, CardContent, CardHeader, Container, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

const App=()=>{
  // HOOKS
  // ---------USESTATE---------------------
  const [searchFiled,setSearchField]=useState("");
  const [users,setUsers]=useState([]);
  // ------------------------------


  //----- USEEFFECT -----------
  useEffect(()=>{
fetch("https://jsonplaceholder.typicode.com/posts").
then(resp=>resp.json()).
then((data)=>setUsers(data))
  },[])

const searchFiledHandler=(e)=>{
  setSearchField(e.target.value);
  console.log(e.target.value)
}
const filterUsers=users.filter((user)=>{
  return user.title.includes(searchFiled);
})


  return (
    <div>
      <Grid container spacing={5} >
        <Grid item md={12}> <Typography color="primary" variant="h1">POST</Typography></Grid>
        <Grid item xs={12} md={12}>  <SearchBar searchFiledHandler={searchFiledHandler}/></Grid>
        <Grid item   xs={12}  md={12}>  <CardList filterUsers={filterUsers}/></Grid>
      </Grid>
      {/* <SearchBar searchFiledHandler={searchFiledHandler}/>
      <CardList filterUsers={filterUsers}/> */}
    </div>
  )
}

export default App;
