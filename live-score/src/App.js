import React,{useEffect,useState, Fragment} from "react"
import logo from './logo.svg';
import './App.css';
import {Button, Typography} from '@material-ui/core'
import Navbar from './components/Navbar';
import {Grid } from '@material-ui/core';
import MyCard from './components/MyCard';
import {getMatches} from './api/API'

function App() {

  const [matches,setMatches] = useState([])

  //Like ngOninit its lifecycle hook
  useEffect(()=>{
    {
      getMatches()
      .then(
        data =>{
          console.log(data)
          setMatches(data.matches)
          //this.MatchData = data.matches
        }
      )
      .catch(
       error=>{
         alert("Could not load Data!....")
       } 
      )
    }
  },[])

  return (
    <div className="App">
      <Navbar></Navbar>
        <Typography variant = "h3" style={{marginTop : 20}}>
        Welcome My Live Score APP
        </Typography>
     {/* <MyCard/> */}
    

    <Grid container>
      <Grid  sm="2">
      </Grid>
      <Grid sm="8">
        {
      matches.map((match) => (
        <Fragment  key={match.unique_id}>
          {
            (match.type == "Twenty20" ? <MyCard match={match}/> :"")
          }
        </Fragment>
      ))}
      </Grid>
    </Grid>

     

    {/* 
     variant => outlined means bordered
     variant => contianer mean fully colored */}
     {/* <Button variant="outlined" color="primary">click Here</Button> */}
    </div>
  );
}

export default App;
