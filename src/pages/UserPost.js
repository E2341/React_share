import React, { useEffect, useState } from "react";
import { fetchData } from "../helper/FetchData";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Container, CircularProgress  } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import { formatDateFunc } from "../helper/FormatDate"




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


 function UserPost() {
    const { id } = useParams;
    const mainStyled = styles();


    const [userPost, setUserPost] = useState();
    useEffect(() => {
        fetchData(`/user/${id}`)
        .then((res) => setUserPost(res))
        .catch()
        .finally();
   
    }, [id]);
        
    
    return (
      <Container className={mainStyled.wrappper}> 
            {!userPost ? (
        <CircularProgress />
      ) : (
        <React.Fragment>
          <img src={userPost?.picture} alt="user" />
          <Typography variant="h4">{userPost?.firstName}</Typography>
          <Typography variant="h4">{userPost?.lastName}</Typography>
          {userPost?.registerDate && (
            <Typography variant="h4">{formatDateFunc(userPost)}</Typography>
          )}
          <Typography variant="h4">{userPost?.phone}</Typography>
        </React.Fragment>
      )}     
        </Container>
                      
                
    );
                
  }
               

export default UserPost;