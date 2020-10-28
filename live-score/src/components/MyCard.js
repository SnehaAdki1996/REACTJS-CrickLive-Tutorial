import React, { Component ,useState, Fragment,useEffect} from 'react';
import { Card, CardContent, Typography, DialogContentText, CardActions, Button, Grid, DialogTitle, DialogContent, DialogActions } from '@material-ui/core';
//import {vs} from '../img/vs'
import myIcon from '../img/vs.jpg'
import { getMatchDetails } from '../api/API';


const MyCard = ({ match }) =>{

    const [details , setDetails] = useState({})
    const [open , setOpen] = useState({})

    const handleClose=() =>{
        setOpen(false)   
    }

    const handleOpen= ()=>{
        setOpen(true)
    }

    const getDialog = ()=> (
        <dialog open={open} onClose={handleClose}>
            <DialogTitle id="alert-dialog-title">
                {"Match Details!...."}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    <Typography>
                        {details.stat}
                    </Typography>
                    <Typography>
                        Match 
                        <span style={{fontStyle : "italic",fontWeight:"bold"}}>
                            {details.matchStarted ? "Started" : "Still Not Started"} {""}
                        </span>
                    </Typography>
                    <Typography>
                        Score
                        <span style={{fontStyle : "italic",fontWeight:"bold"}}>
                        {details.score}
                        </span>
                    </Typography>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Close
                </Button>
            </DialogActions>
        </dialog>
    );

    const handleClick = (id)=>{
        getMatchDetails(id)
        .then(data => {
            console.log(open)
            console.log(data)
            setDetails(data)
            handleOpen();
        })
        .catch(error => {console.log(error)})
    }

    const getMatchCard = ()=> {
        return (
            <Card style={{marginTop : 20 }}>
                <CardContent>
                    <Grid container justify = "center" alignItems="center"spacing = {4}>
                        <Grid item>
                            <Typography variant="h5">
                                {match["team-1"]}
                            </Typography>
                        </Grid>
                        <Grid item>
                            <img 
                            style={{width : 200}} 
                            src = { myIcon} alt=""></img>
                        </Grid>
                        <Grid item>
                        <Typography variant="h5">
                                {match["team-2"]}
                            </Typography>
                        </Grid>
                    </Grid>
                    {/* <Typography variant="h5">
                        This is Card
                    </Typography> */}
                </CardContent>
                <CardActions>
                    <Grid container justify="center">
                        <Button variant="contained" color="primary" onClick={()=>{
                            handleClick(match.unique_id )
                        }}>
                            Show Details
                        </Button>
                        <Button style={{marginLeft : 5 }} variant="contained">
                            Start Time: {new Date(match.dateTimeGMT).toLocaleString()}
                        </Button>
                    </Grid>
                </CardActions>
        </Card>
        );
    }


    return (
        <Fragment>
            
       {getMatchCard()}
       {getDialog()}
        </Fragment>
    );
}

export default MyCard