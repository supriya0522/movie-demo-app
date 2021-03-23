import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.div`
  display: flex;
  height: 100%;
  background: #000000;
`;

export const StyledForm = styled.form`
  margin: ${(props) => (props.inlineForm ? "-.25em 1.15em 0 1.15em" : "0 1em")};
  height: 0.9em;
  width: 30%;
`;

export const SearchIcon = styled(FontAwesomeIcon).attrs({ icon: faSearch })`
  color: white;
  text-align: center;
  font-size: 0.85em;
`;

export const StyledButton = styled.button`
  width: ${(props) => (props.inlineForm ? "1.8em" : "2.75em")};
  height: ${(props) => (props.inlineForm ? "1.8em" : "2.75em")};
  border-radius: 50%;
  border: 2px solid black;
  margin: 0 0 0 0.25em;
  background: #151c24;
  outline: none;

  transition: all 300ms ease-in-out;
  color: white;

  :hover {
    cursor: pointer;
    transform: scale(1.1);
    background: #2769b4;
    color: black;
    border-radius: 10%;
  }
`;

export const SwiperContainer = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  background-color: #000000;
  padding: 0px 15px;
`;

export const Swiperwrapper = styled.div`
  display: flex;
  padding: 0px 15px;
  z-index: 0;
`;

export const Swiperslide = styled.div`
  background: #000000;
  margin-top: 10px;
  padding-top: 15px;
  display: flex;
`;

export const MovieCard = styled.div`
  display: flex;
  box-shadow: 0px 0px 80px -25px rgba(0,0,0, 0.5);
  transition: all 0.4s;
  margin-right: 0px;
`;

export const CardImg = styled.img`
  width: 100%;
  height: 250px;
  :hover {
    transition: all 0.4s;
    cursor: pointer;
    transform: scale(1.06);
    box-shadow: 0px 0px 120px -25px #000000;
    elevation: 30deg;
  }
`;

export const StyledLink = styled(NavLink)`
  border: 1px solid #7ca887;
  border: none;
  box-shadow: 0 0.22em #151c24;
  background: none;
  margin: 0em 1.15em;
  padding: 0 0.5em 0.2em;
  outline: none;
  p-decoration: none;
  font-size: 1.05em;
  font-weight: 600;
  transition: all 0.2s ease-in-out;
  p-align: center;
  :hover {
    cursor: pointer;
    opacity: 75%;
  }
`;

export const StyledNavbar = styled.nav`
  display: flex;
  height: 45px;
  padding: 10px 15px;
  position: fixed;
  top: 0;
  width: 97.2%;
  z-index: 1;
  background: black;
  justify-content: space-between;

  @media screen and (min-width: 1824px) {
    font-size: 18px;
  }

  @media screen and (max-width: 700px) {
    font-size: 18px;

    ${StyledLink} {
      margin: 0 0.75em;
    }
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;

    ${StyledLink} {
    }
  }

  @media screen and (max-width: 375px) {
    font-size: 12px;

    ${StyledLink} {
      margin: 0 0.3em;
    }
  }
`;

export const StyledInput = styled.input`
  width: 20%;
  height: ${(props) => (props.inlineForm ? "" : "2em")};
  transition: all 0.4s ease-in-out;
  background: #151c24;
  padding: 0.25em 0.75em;
  border-radius: 1.5em;
  border: 2px solid white;
  outline: none;
  color: white;
  font-family: inherit;
  margin-top: 0.5em;
  margin-left: 1em;

  :focus {
    border-color: #2769b4;
  }
  /*  */
  ::placeholder {
    font-size: 0.85em;
    color: rgb(225, 225, 225);
  }

  @media screen and (max-width: 900px) {
    width: ${(props) => (props.inlineForm ? "3em" : "40vw")};
    height: ${(props) => (props.inlineForm ? "" : "1.5em")};
  }

  @media screen and (max-width: 480px) {
    width: 50%;
    height: ${(props) => (props.inlineForm ? "" : "1.5em")};
  }
`;

export const MovieTitle = styled.p`
  display: flex;
  font-size: 28px;
  color: #FFFFFF;
  font-weight: bold;
  margin: 0px;
`;

export const RatingTitle = styled.p`
  display: flex;
  font-size: 16px;
  color: rgba(11, 223, 11, 0.589);
  font-weight: normal;
  padding: 6px 0px;
  margin: 0px;
`;

export const ReleaseDate = styled.p`
  font-size: 16px;
  color: #FFFFFF;
  font-weight: normal;
  padding: 5px 0px;
  margin: 0px;
`;

export const MovieDetail = styled.div`
  display: flex;
  flex-direction: row;
`;

export const DetailWrapper = styled.div`
  padding: 10px 20px;
  width: 50%;
`;

export const RatingDetail = styled.div`
  display: flex;
`;

export const MovieDescription = styled.p`
  display: flex;
  font-size: 14px;
  color: #fffffff1;
  font-weight: light;
  padding: 5px 0px;
  margin-top: 0px;
`;

export const PlayButton = styled.div`
  display: flex;
  width: 75px;
  height: 35px;
  margin: 15px 0px;
  border: 1px solid red;
  border-radius: 5px;
  color: white;
  background: red;
  align-items: center;
  justify-content: center;
`;
