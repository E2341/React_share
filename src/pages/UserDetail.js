import React, { useEffect, useState } from "react";
import { fetchData } from "../helper/FetchData"
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';



const styles = makeStyles((theme) => ({
    wrappper: {
      marginTop: "10rem",
      height: "calc(100vh - 19.0625rem)",
      textAlign: "center"
    },
    avatar: {
      margin: "1rem auto",
      backgroundColor: theme.palette.secondary.main
    }
  }));


function UserDetail() {
    const { id } = useParams;
    const mainStyled = styles();


    const [userDetail, setUserDetail] = useState();
    useEffect(() => {
        fetchData(`/user/${id}`)
        .then((res) => setUserDetail(res))
        .catch()
        .finally();
   
    }, [id]);
        
    
    return <Container className={mainStyled.wrappper} > 
                {JSON.stringify(userDetail)}
                <img src={userDetail.picture} alt="user"/> 
                <Typography variant="h4" >{userDetail.firstName}</Typography>
                <Typography variant="h4" >{userDetail.lastName}</Typography>
                <Typography variant="h4" >{userDetail.registreDetail}</Typography>
                <Typography variant="h4" >{userDetail.phone}</Typography>
            </Container>
                
}

export default UserDetail;