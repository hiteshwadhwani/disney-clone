import {Link} from 'react-router-dom'
import styled from 'styled-components'
import {selectOriginalMovie} from "../features/movies/movieSlice"
import {useSelector} from 'react-redux'

const Originals = (props) => {
    const original = useSelector(selectOriginalMovie)
    return(
        <Container>
            <h3>Disney+ originals</h3>
            <Content>
                {original && original.map((movie, key) => (
                    <Wrap key={key}>
                        <Link to={'/detail/' + movie.id}>
                            <img src={movie.cardImg} alt={movie.title} />
                        </Link>
                    </Wrap>
                ))}
            </Content>
        </Container>
    )
} 

const Container = styled.div`
padding: 0px 0px 20px;
`;
const Content = styled.div`
margin-top: 40px;
display: grid;
gap: 30px;
grid-template-columns: repeat(4, minmax(0, 1fr));
@media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
}
`;
const Wrap = styled.div`
    cursor: pointer;
    overflow: hidden;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
        rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    border-radius: 10px;

    img{
        display: block;
        width: 100%;
        height: 100%;
        
    }

    &:hover{
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
            rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        border-color: rgba(249, 249, 249, 0.8);
        transform: scale(1.05);
    }
`;

export default Originals