import styled from "styled-components";
import { ImageSlider } from "./ImageSlider";
import { Views } from "./Views";
import { Recommends } from "./Recommends";
import { NewDisney } from "./NewDisney";
import { Originals } from "./Originals";
import { Trending } from "./Treding";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { collection, onSnapshot } from "firebase/firestore";
import db from "../config/firebase";
import { setMovies } from "../features/movies/movieSlice";
import { selectUserName } from "../features/userSlice";

export const Home = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "movies"), (snapshot) => {
      const newRecommends = [];
      const newOriginals = [];
      const newNewDisneys = [];
      const newTrending = [];

      snapshot.docs.forEach((doc) => {
        switch (doc.data().type) {
          case "recommend":
            newRecommends.push({ id: doc.id, ...doc.data() });
            break;

          case "new":
            newNewDisneys.push({ id: doc.id, ...doc.data() });
            break;

          case "originals":
            newOriginals.push({ id: doc.id, ...doc.data() });
            break;

          case "trending":
            newTrending.push({ id: doc.id, ...doc.data() });
            break;
          default:
            console.error("Unexpected type:", doc.data().type);
        }
      });

      dispatch(
        setMovies({
          recommend: newRecommends,
          newDisney: newNewDisneys,
          original: newOriginals,
          trending: newTrending,
        })
      );
    });

    return () => {
      unsubscribe();
    };
  }, [userName ,dispatch]);

  return (
    <Container>
      <ImageSlider />
      <Views />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250vh);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background-image: url(${require("../image/home-background.png")}); center center/cover no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;
