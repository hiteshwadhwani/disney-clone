import styled from "styled-components";
import ImgSlider from "./imgSlider";
import Viewers from "./Viewers";
import Recommended from './recommended';
import NewDisney from "./NewDisney";
// import Originals from "./Originals";
import Trending from "./Trending";
import {selectTrendingMovie, selectOriginalMovie, selectRecommendedMovie, selectNewDisneyMovie, setMovie} from "../features/movies/movieSlice"
import {selectUserName} from "../features/user/userSlice"
import {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {db} from '../firebase'
import Originals from './OriginalsMovies'


const Home = () => {
    const dispatch = useDispatch()
    const username = useSelector(selectUserName)
    useEffect(() => {
        let recommendeds = []
        let originals = []
        let newDisneys = []
        let trendings = []
        db.collection("movies").onSnapshot((snapshot) => {
                snapshot.docs.map(doc => {
                    switch(doc.data().type){
                        case 'recommend':
                            recommendeds = [...recommendeds, { id: doc.id, ...doc.data() }];
                            break;
                        case 'new':
                            newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
                            break;
                        case 'original':
                            originals = [...originals, { id: doc.id, ...doc.data() }];
                            break;
                        case 'trending':
                            trendings = [...trendings, { id: doc.id, ...doc.data() }];
                            break; 
                    }
                })
                dispatch(setMovie({
                    trending: trendings,
                    original:originals,
                    recommended:recommendeds,
                    newDisney:newDisneys,
                }))
            })
        
    }, [username])
    

    return(
        <Container>
            <ImgSlider />
            <Viewers />
            <Recommended />
            <NewDisney />
            <Originals />
            <Trending />
        </Container>
    )
}
const Container = styled.div`
position: relative;
top:70px;
padding: 3.5vw;
overflow: hidden;
display: block;
min-height: calc(100vh - 250px);

&:after {
    content: "";
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    position: absolute;
    opacity: 1;
    inset: 0px;
    z-index: -1;
}
`;    
export default Home
