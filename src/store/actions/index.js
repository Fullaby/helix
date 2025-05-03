import { DELETE_MOVIE, EDIT_MOVIE, GENRE_DETAIL, GENRE_FETCH_SUCCESS, MOVIE_DETAIL_ID, MOVIE_FETCH_SUCCESS, NEW_MOVIE } from "./actiontypes";
import axios from "axios";
const baseUrl= 'http://localhost:3000'


export const fetchDetailMovieSuccess=(payload)=>{
    return{
        type: MOVIE_DETAIL_ID,
        payload
    }
}

export const changePassword = (passwords) => async () => {
    const response = await fetch(`${baseUrl}/users/change-password`, {
        method: "PUT",
        headers: {
            access_token: localStorage.getItem("access_token"),
            "Content-Type": "application/json",
        },
        body: JSON.stringify(passwords),
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to change password");
    }

    return await response.json();
};

export const googleLogin = (response) => async () => {
    return await axios(baseUrl + "/users/google", {
      method: "POST",
      headers: {
        token_google: response.credential
      }
    });
  };
  
export const fetchDetailMovie= (id)=>{
   return (dispatch,getState)=>{ fetch(`${baseUrl}/movies/${id}`,{
        method: 'get',
        headers:{
            access_token: localStorage.getItem("access_token"),
            'Content-Type':'application/json'
        }
    })
    .then((response)=>{
        return response.json()
    })
    .then((data)=>{
        dispatch(fetchDetailMovieSuccess(data))
    })
    .catch((error)=>{
        console.log(error);
    })
}
}



export const fetchMovieSuccess= (payload)=>{
    return{
        type: MOVIE_FETCH_SUCCESS,
        payload
    }
}

export const fetchMovie= ()=>{
    return (dispatch,getState)=>{
     return fetch(`${baseUrl}/movies`,{
        method: 'get',
        headers:{
            'Content-Type':'application/json',
            access_token: localStorage.getItem("access_token")
        }
     })
       .then((response)=>{
           if(!response.ok){
               throw new Error('Network response was not OK')
           }
           return response.json()
       })
       .then((data)=>{
        dispatch(fetchMovieSuccess(data))
       })
       .catch((error)=>{
        console.log('There has been a problem with your fetch operation',error);
       })
      
    }
}

export const fetchGenreSuccess= (payload)=>{
    return{
        type: GENRE_FETCH_SUCCESS,
        payload
}
}

export const fetchGenre= ()=>{
    return(dispatch,getState)=>{
        return fetch(`${baseUrl}/genres`,{
            method: 'get',
            headers:{
                'Content-Type':'application/json',
                access_token: localStorage.getItem("access_token")
            }
         })
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            dispatch(fetchGenreSuccess(data))
        })
        .catch((error)=>{
            console.log(error);
        })
    }
}

export const deleteMovie=(id)=>{
    return(dispatch)=>{
       return fetch(`${baseUrl}/movies/${id}`,{
            method: 'delete',
            headers:{
                access_token: localStorage.getItem("access_token")
            }
        })
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            dispatch(fetchMovie())
        })
        .catch((error)=>{
            console.log(error);
        })
    }
}

export const addMovie = (input)=>{
    return(dispatch)=>{
       return fetch(`${baseUrl}/movies`,{
            method: 'post',
            body: JSON.stringify(input),
            headers: {
                access_token: localStorage.getItem("access_token"),
                'Content-Type': 'application/json'
            }
        })
       
    }
}

export const editMovie= (id,input)=>{
    return (dispatch)=>{
       return fetch(`${baseUrl}/movies/${id}`,{
            method: 'put',
            body: JSON.stringify(input),
            headers:{
                access_token: localStorage.getItem("access_token"),
                'Content-Type': 'application/json'
            }
        })
        
    }
}

export const deleteGenres= (id)=>{
    return(dispatch)=>{
        fetch(`${baseUrl}/genres/${id}`,{
            method: 'delete',
            headers:{
                access_token : localStorage.getItem("access_token")
            }
        })
        .then((response)=>{
            return response.json()
        })
        .then(()=>{
            dispatch(fetchGenre())
        })
    }
}

export const fetchGenreDetailSuccess= (payload)=>{
    return{
        type: GENRE_DETAIL,
        payload
    }
}

export const genreDetail = (id)=>{
    return(dispatch)=>{
        fetch(`${baseUrl}/genres/${id}`,{
            method:'get',
            headers:{access_token:localStorage.getItem("access_token")}
        })
        .then((response)=>{
            return response.json()
        })
        .then((data)=>{
            dispatch(fetchGenreDetailSuccess(data))
        })
        .catch((error)=>{
            console.log(error);
        })
    }
}

export const editGenre= (id,input)=>{
    return(dispatch)=>{
       return fetch(`${baseUrl}/genres/${id}`,{
            method: 'put',
            body: JSON.stringify(input),
            headers:{ 
                access_token: localStorage.getItem("access_token"),
                'Content-Type': 'application/json'
            }
        })

       
    }
}

export const registerUser= (input)=>{
    return (dispatch)=>{
       return fetch(`${baseUrl}/users`, {
            method: 'post',
            body: JSON.stringify(input),
            headers: {
                access_token: localStorage.getItem("access_token"),
                'Content-Type': 'application/json'
            }
        })
       
    }
}

export const addGenre= (input)=>{
    return(dispatch)=>{
       return fetch(`${baseUrl}/genres`,{
            method: 'post',
            body: JSON.stringify(input),
            headers: {
                access_token: localStorage.getItem("access_token"),
                'Content-Type': 'application/json'
            }
        })
       
    }
}


export const loginUser= (input)=>{
    return(dispatch)=>{
       return fetch(`${baseUrl}/users/login`, {
            method:'post',
            body: JSON.stringify(input),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then((data)=>{
            return data.json()
        })
    }
}