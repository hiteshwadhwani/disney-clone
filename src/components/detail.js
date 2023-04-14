import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { db } from "../firebase";
import { useState } from "react";
// import { Slide } from "react-awesome-reveal";

const Detail = (props) => {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState({});
  useEffect(() => {
    db.collection("movies")
      .doc(id)
      .get()
      .then((doc) => {
        try {
          if (doc.exists) {
            setMovieDetail(doc.data());
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        } catch (err) {
          console.log("Something went wrong", err);
        }
      });
  }, [id]);
  return (
    <Container>
      <Background>
        <img
          src={movieDetail.backgroundImg}
          alt={movieDetail.title}
        />
      </Background>
      <ImageTitle>
        <img
          src={movieDetail.titleImg}
          alt={movieDetail.title}
        />
      </ImageTitle>
      {/* <Slide triggerOnce> */}
      <ContentMeta>
        <Controls>
          <Player>
            <img src="/images/play-icon-black.png" alt="" />
            <span>play</span>
          </Player>
          <Trailer>
            <img src="/images/play-icon-white.png" alt="" />
            <span>trailer</span>
          </Trailer>
          <AddList>
            <span></span>
            <span></span>
          </AddList>
          <Group>
            <img src="/images/group-icon.png" alt="" />
          </Group>
        </Controls>
        <SubTitle>{movieDetail.subTitle}</SubTitle>
        <Description>{movieDetail.description}</Description>
      </ContentMeta>
      {/* </Slide> */}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  height: calc(100vh - 100px);
  top: 70px;
  overflow: hidden;
  width: 100%;
  padding: 0px 20px 0px;
`;
const Background = styled.div`
    inset: 0px;
    top: 0px;
    opacity: 0.8;
    z-index:-1;
    position: fixed;
    img{
        height: 100vh;
        width: 100vw;
        @media (max-width: 767px) {
            width = initial
        }
    }
`;
const ImageTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  height: 25vw;
  min-height: 150px;
  width: 100%;
  img {
    width: 25vw;
    min-width: 200px;
    max-width: 600px;
  }
`;
const ContentMeta = styled.div`
  margin-top: 3vw;
  max-width: 874px;
`;
const Controls = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin: 24px 0px;
  align-items: center;
  min-height: 56px;
  margin-top: 20px;
`;
const Player = styled.button`
  font-size: 15px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0px 24px;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  border-radius: 6px;
  margin: 0px 20px 0px 0px;
  background: rgb(249, 249, 249);
  height: 56px;
  border: none;
  cursor: pointer;
  img {
    width: 35px;
  }
  &:hover {
    background: rgb(231 231 231);
  }
`;
const Trailer = styled(Player)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid #b5b4b4;
  color: white;
  &:hover {
    background: rgba(0, 0, 0, 0.2);
  }
`;
const AddList = styled.div`
  margin-right: 16px;
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;
  span {
    background-color: rgb(249, 249, 249);
    display: inline-block;
    &:first-child {
      height: 2px;
      transform: translate(1px, 0px) rotate(0deg);
      width: 16px;
    }
    &:nth-child(2) {
      height: 16px;
      transform: translateX(-8px) rotate(0deg);
      width: 2px;
    }
  }
`;
const Group = styled.button`
  margin-right: 16px;
  height: 44px;
  width: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  border: 2px solid white;
  cursor: pointer;
  padding: 0px;
  img {
    height: 100%;
    width: 100%;
  }
`;
const SubTitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Description = styled.div`
  color: rgb(249, 249, 249);
  font-size: 20px;
  line-height: 1.4;
  padding: 20px 0px;
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

export default Detail;
