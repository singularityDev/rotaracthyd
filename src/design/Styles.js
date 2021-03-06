import styled, { createGlobalStyle, keyframes } from "styled-components"
import { Link } from "gatsby"
import Slider from "react-styled-carousel"
import ImageComponent from "../components/WorkImages"

export const GlobalStyle = createGlobalStyle`
* {
box-sizing: border-box;
margin: 0;
padding: 0;
font-family: ${props => props.theme.fonts.dFont};
}
body, html {
font-family: ${props => props.theme.fonts.dFont};
height: 100%;
background-color: ${props => props.theme.colors.bgColor}; 
scroll-behavior:smooth;
}
h1, h2, h3, h4, h5, h6{
    font-family:${props => props.theme.fonts.hFont};
    font-weight: ${props => props.theme.fontWeight.bold};
}
p{
font-family: ${props => props.theme.fonts.pFont};
  @media ${props => props.theme.mediaQuery.Laptop} {
      font-size: ${props => props.theme.fontSize.small};
    }
}
`

export const Container = styled.section`
  margin: 0 auto;
  width: 90%;
  padding: 10px 5px;
  position: relative;
  height: ${props => props.height};
  padding: ${props => props.padding};
  background-color: ${props => props.bgcolor};
  display: ${props => props.display};
  flex-direction: ${props => props.flexDirection};
  flex-wrap: ${props => props.flexWrap};
  background: ${props => props.background};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  text-align: ${props => props.textAlign};
`
export const SectionWrapper = styled.div`
  background-color: ${props => props.bgcolor};
  display: ${props => props.display};
  flex-direction: ${props => props.flexDirection};
  flex-wrap: ${props => props.flexWrap};
  background: ${props => props.background};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  text-align: ${props => props.textAlign};
  &#contact {
    h1 {
      word-spacing: 10px;
      text-transform: uppercase;
      padding-bottom: 2rem;
      color: white;
    }
  }
`
export const Div = styled.div`
  background-color: ${props => props.bgcolor};
  display: ${props => props.display};
  flex-direction: ${props => props.flexDirection};
  flex-wrap: ${props => props.flexWrap};
  justify-content: ${props => props.justifyContent};
  margin: ${props => props.margin};
  align-content: ${props => props.alignContent};
  align-items: ${props => props.alignItems};
  @media ${props => props.theme.mediaQuery.Tablet} {
  }
`
export const NavBar = styled.header`
  width: 100%;
  height: 3.6rem;
  position: absolute;
  top: 0;
  z-index: 10;
  transition: 0.3s ease-in;
  img {
    filter: brightness(0) invert(1);
  }
  &.scrolling-active {
    position: fixed;
    background-color: ${props => props.theme.colors.bgColor};
    height: 3rem;
    box-shadow: ${props => props.theme.boxShadowLite};
    img {
      filter: none;
      height: 2rem;
    }
  }
`
export const Burger = styled.div`
  display: none;
  @media ${props => props.theme.mediaQuery.Tablet} {
    flex-direction: column;
    display: inherit;
    margin-top: 7px;
    div {
      width: 25px;
      height: 2.5px;
      background-color: ${props => props.theme.colors.bgColor};
      margin: 2px;
      ${NavBar}.scrolling-active & {
        background-color: ${props => props.theme.colors.primaryColor};
      }
      transition: 0.3s ease-in;
    }
  }
`
export const NavContent = styled(Container)`
  /* width: 100%; */
  /* padding: 0 5%; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  ${NavBar}.scrolling-active & {
    padding: 7px 0px;
  }
`
export const NavLinks = styled(NavContent)`
  width: 50%;
  @media ${props => props.theme.mediaQuery.Tablet} {
    display: none;
  }
`
export const ResNavLinks = styled.div`
  display: none;
  @media ${props => props.theme.mediaQuery.Tablet} {
    position: fixed;
    margin: 0;
    background: ${props => props.theme.colors.secondaryColor};
    right: 0;
    top: 3.6rem;
    ${NavBar}.scrolling-active & {
      top: 3rem;
      height: calc(100vh - 3rem);
    }
    height: calc(100vh - 3.6rem);
    width: 0%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: 0.4s;
  }
`

export const NavLink = styled(Link)`
  color: ${props => props.theme.colors.bgColor};
  text-decoration: none;
  text-transform: uppercase;
  font-size: ${props => props.theme.fontSize.xsmall};
  font-weight: ${props => props.theme.fontWeight.normal};
  letter-spacing: 1px;
  &:after {
    display: block;
    content: "";
    border-bottom: 2px solid ${props => props.theme.colors.bgColor};
    transform: scaleX(0);
    transform-origin: 0% 50%;
    transition: transform 350ms ease-in-out;
  }
  &:hover:after {
    transform: scaleX(1);
  }
  .active & {
    border-bottom: 2px solid ${props => props.theme.colors.primaryColor};
  }
  ${NavBar}.scrolling-active & {
    font-weight: ${props => props.theme.fontWeight.normal};
    color: ${props => props.theme.colors.secondaryColor};
    &:after {
      border-bottom: 2px solid ${props => props.theme.colors.primaryColor};
    }
  }

  @media ${props => props.theme.mediaQuery.Laptop} {
    font-size: ${props => props.theme.fontSize.xsmall};
    ${NavBar}.scrolling-active & {
      font-size: ${props => props.theme.fontSize.xxsmall};

      font-weight: ${props => props.theme.fontWeight.normal};
    }
  }
`
export const ResNavLink = styled(NavLink)`
  display: none;
  transition: 0.5s ease;
  margin-bottom: 2em;
  width: 7rem;
  text-align: center;
  @media ${props => props.theme.mediaQuery.Tablet} {
    ${NavBar}.scrolling-active & {
      font-size: ${props => props.theme.fontSize.small};
      color: ${props => props.theme.colors.bgColor};
    }
    font-size: ${props => props.theme.fontSize.small};
  }
`
export const NavLinkJoin = styled(NavLink)`
  color: ${props => props.theme.colors.lightColor};
  background-color: ${props => props.theme.colors.primaryColor};
  text-decoration: none;
  text-transform: uppercase;
  padding: 6px 30px;
  font-weight: ${props => props.theme.fontWeight.bold};
  border: 2px solid ${props => props.theme.colors.bgColor};
  border-radius: 25px;
  transition: 0.4s ease-out;
  &:hover {
    transition: 0.3s ease-in;
    color: ${props => props.theme.colors.primaryColor};
    border: 2px solid ${props => props.theme.colors.primaryColor};
    background-color: ${props => props.theme.colors.bgColor};
  }
  &:after {
    border-bottom: none;
  }
  ${NavBar}.scrolling-active & {
    color: ${props => props.theme.colors.primaryColor};
    background-color: ${props => props.theme.colors.bgColor};
    border: 2px solid ${props => props.theme.colors.primaryColor};
    font-weight: ${props => props.theme.fontWeight.normal};
    padding: 4px 20px;

    &:hover {
      color: ${props => props.theme.colors.bgColor};
      border: 2px solid ${props => props.theme.colors.primaryColor};
      background-color: ${props => props.theme.colors.primaryColor};
      box-shadow: none;
    }
    &:after {
      border-bottom: none;
    }
  }
  @media ${props => props.theme.mediaQuery.Tablet} {
    display: none;
  }
`
export const NavLinkJoinMobile = styled(NavLinkJoin)`
  transition: 1s;
  width: 8rem;
  text-align: center;
`
export const NavLogo = styled(Link)`
  transition: 1s ease-in-out;
  padding-top: 2px;
  img {
    margin: 0;
    max-height: 2.2rem;
  }
  @media ${props => props.theme.mediaQuery.Laptop} {
    img {
      max-height: 1.8rem;
    }
  }
  @media ${props => props.theme.mediaQuery.Tablet} {
    ${NavBar}.scrolling-active & {
      img {
        max-height: 2rem;
      }
    }
  }
`

export const LandingImage = styled.section`
  position: relative;
  .landingImg img {
    position: fixed;
  }
  .landingImg:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(155deg, #e9025a 0%, rgba(0, 109, 255, 1) 90%);
    opacity: 0.85;
  }
  @media ${props => props.theme.mediaQuery.Tablet} {
    .landingImg img,
    .landingImg:after {
      display: none;
    }
    height: 25rem;
    background: linear-gradient(155deg, #e9025a 0%, rgba(0, 109, 255, 1) 90%);
    opacity: 0.85;
  }
`
export const LandingContent = styled.section`
  width: 100%;
  position: absolute;
  z-index: 2;
  bottom: 10%;
  right: 50%;
  transform: translateX(50%);
  color: #fff;
  text-align: center;

  .content-wrap {
    margin: 0 auto;
    width: 34%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  p {
    font-weight: ${props => props.theme.fontWeight.light};
    margin-bottom: 0;
    padding-bottom: 0;
  }
  h1 {
    margin: 0;
    font-weight: ${props => props.theme.fontWeight.black};
    font-size: ${props => props.theme.fontSize.xlarge};
    word-spacing: 15px;
    padding-bottom: 1rem;
  }
  h3 {
    margin-top: 1rem;
    margin-bottom: 2rem;
    font-weight: ${props => props.theme.fontWeight.light};
    font-size: ${props => props.theme.fontSize.medium};
    word-spacing: 5px;
  }
  h4 {
    font-weight: ${props => props.theme.fontWeight.normal};
    font-size: ${props => props.theme.fontSize.medium};
  }
  @media ${props => props.theme.mediaQuery.Laptop} {
    bottom: 10%;
    h1 {
      font-size: ${props => props.theme.fontSize.large};
    }
    h3 {
      font-size: ${props => props.theme.fontSize.medium};
    }
    h4 {
      font-size: ${props => props.theme.fontSize.medium};
    }
    .content-wrap {
      width: 48%;
    }
  }
  @media ${props => props.theme.mediaQuery.Tablet} {
    padding: auto 1em;
    width: 100%;
    h1 {
      margin: 2rem 1rem 1rem 1rem;
      font-size: 2em;
    }
    h3 {
      font-size: ${props => props.theme.fontSize.medium};
    }
    h4 {
      font-size: ${props => props.theme.fontSize.small};
    }
    p {
      font-size: ${props => props.theme.fontSize.xsmall};
    }
    .content-wrap {
      width: 90%;
    }
  }
`
export const AboutSection = styled(SectionWrapper)`
  width: 100%;
  padding: 3rem 5%;
  @media ${props => props.theme.mediaQuery.Tablet} {
    padding: 3rem 5% 1rem 5%;
  }
  background-color: ${props => props.theme.colors.bgColor};
  z-index: 2;
  text-align: center;
  display: flex;
  flex-direction: column;
  position: relative;
  border-bottom: solid 4px coral;

  /* margin-bottom: 2rem; */
  h1 {
    /* color: white; */
    word-spacing: 10px;
    font-family: ${props => props.theme.fonts.hFont};
    font-weight: ${props => props.theme.fontWeight.bold};
    font-size: ${props => props.theme.fontSize.large};
    text-transform: uppercase;
  }
  img {
    position: absolute;
    top: -7.5%;
    left: 50%;
    transform: translateX(-50%);
    max-height: 5rem;
    max-width: 5rem;
    @media ${props => props.theme.mediaQuery.Laptop} {
      top: -8%;
    }
    @media ${props => props.theme.mediaQuery.Tablet} {
      top: -4.5%;
    }
  }
`
export const AboutHeader = styled.div`
  text-align: center;
  p {
    margin-top: 2.2rem;
    @media ${props => props.theme.mediaQuery.Tablet} {
      margin-top: 1rem;
    }
    font-weight: ${props => props.theme.fontWeight.light};
    color: ${props => props.theme.colors.primaryColor};
  }
`
export const AboutContent = styled.section`
  width: 100%;
  margin: 0 auto;
  p {
    word-spacing: 2px;
    /* color: white; */
    line-height: 2em;
    /* font-weight: ${props => props.theme.fontWeight.light}; */
    font-size: ${props => props.theme.fontSize.small};
    @media ${props => props.theme.mediaQuery.Laptop} {
      font-size: ${props => props.theme.fontSize.xsmall};
    }
  }
`

export const OurGoalSection = styled(Container)`
  text-align: center;
  padding-top: 5rem;
  padding-bottom: 5rem;
  @media ${props => props.theme.mediaQuery.Tablet} {
    padding-top: 2rem;
    padding-bottom: 3rem;
  }
  h1 {
    word-spacing: 10px;
    text-transform: uppercase;
  }
  p {
    margin-top: 2rem;
    font-weight: ${props => props.theme.fontWeight.light};
    color: ${props => props.theme.colors.primaryColor};
  }
`

export const OurGoalCardSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

export const OurGoalCard = styled.div`
  height: 12rem;
  width: 25rem;
  margin: 2rem .5rem 0 .5rem;
  border: solid 2px pink;
  position: relative;
  transition: 0.1s ease-in-out;
  @media ${props => props.theme.mediaQuery.Laptop} {
    height: 12rem;
    width: 25rem;
    h3{
    font-size: ${props => props.theme.fontSize.small};
    }
  }
  :before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.colors.secondaryColor};
    opacity: 0.7;
  }
  h3{
    color: white;
    text-transform: uppercase;
    margin: 0;
    padding: 0 2rem;
    line-height: 2em;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    word-spacing: 8px;
  }
  :hover {
    box-shadow: ${props => props.theme.boxShadow};
  }
  :hover:after{
      transition: 0.5s ease-in-out;
      color: white;
      line-height: 1.3em;
      background-color: palevioletred;
      padding: 1.5rem;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      @media ${props => props.theme.mediaQuery.Laptop} {
        font-size: ${props => props.theme.fontSize.xsmall};
        line-height: 1.5em;
      }
  }
  &:nth-child(1) {
    background-image:url(https://www.rotary.org/sites/default/files/styles/w_2800/public/peace%20hero.jpg?itok=D9BbOHiP);
    background-position: center; 
    background-repeat: no-repeat; 
    background-size: cover;
    &:hover:after {
      content: "${props => props.theme.promotingPeace}";
    }
  }
  &:nth-child(2) {
    background-image: url(https://www.rotary.org/sites/default/files/styles/w_2160/public/cause%20disease%20hero%202800x1800.JPG?itok=i7HJ73tH);
    background-position: center; 
    background-repeat: no-repeat; 
    background-size: cover;
    &:hover:after {
      content: "${props => props.theme.fightingDisease}";
    }
  }
  &:nth-child(3) {
    background-image: url(https://www.rotary.org/sites/default/files/styles/w_2160/public/new%20water%20hero%202.jpg?itok=kuIJmchv);
    background-position: center; 
    background-repeat: no-repeat; 
    background-size: cover;
    &:hover:after {
      content: "${props => props.theme.providingCWSH}";
    }
  }
  &:nth-child(4) {
    background-image: url(https://www.rotary.org/sites/default/files/styles/w_2160/public/cause%20women%20hero%202800x1800.jpg?itok=raWI45Jk);
    background-position: center; 
    background-repeat: no-repeat; 
    background-size: cover;
    &:hover:after {
      content: "${props => props.theme.savingMothersnChildren}";
    }
  }
  &:nth-child(5) {
    background-image: url(https://www.rotary.org/sites/default/files/styles/w_2160/public/cause%20education%20hero%202800x1800.JPG?itok=w0FpiBY2);
    background-position: center; 
    background-repeat: no-repeat; 
    background-size: cover;
    &:hover:after {
      content: "${props => props.theme.supportingEducation}";
    }
  }
  &:nth-child(6) {
    background-image: url(https://www.rotary.org/sites/default/files/styles/w_350/public/cause%20CI%20economy%20700x500.JPG?itok=rPMD-Yn-);
    background-position: center; 
    background-repeat: no-repeat; 
    background-size: cover;
    &:hover:after {
      content: "${props => props.theme.growingLocalEcon}";
    }
  }
  &:nth-child(7) {
    background-image: url(https://www.rotary.org/sites/default/files/styles/w_2160/public/Area_of_focus_Environment_Hero_SHU1317118457.jpg?itok=ja7KYpRM);
    background-position: center; 
    background-repeat: no-repeat; 
    background-size: cover;
    &:hover:after {
      content: "${props => props.theme.supportingEnvironment}";
    }
  }
`
export const OurTeamWrapper = styled(SectionWrapper)`
  width: 100%;
  padding: 6rem 5% 5rem 5%;
  @media ${props => props.theme.mediaQuery.Tablet} {
    padding: 3rem 5% 5rem 5%;
  }
  border-bottom: solid 4px lightcoral;
  position: relative;
  h1 {
    margin-bottom: 0;
    text-align: center;
    padding-bottom: 1rem;
    word-spacing: 10px;
    text-transform: uppercase;
    color: white;
  }
  p {
    text-align: center;
    color: beige;
  }
  a {
    font-size: ${props => props.theme.fontSize.xsmall};
    position: absolute;
    right: 50%;
    transform: translateX(50%);
    text-decoration: none;
    text-align: center;
    color: white;
    padding: 0.5rem 1rem;
    border: solid 2px palegoldenrod;
    :hover {
      opacity: 0.7;
    }
  }
`

export const OurTeamSection = styled(SectionWrapper)`
  padding: 1rem 0 1rem 0;
  color: white;
`
export const MemberCard = styled.div`
  width: 20rem;
  margin: 1rem 0rem;
  h4 {
    margin-bottom: 0.5rem;
  }
  p {
    color: white;
    text-align: left;
    margin-bottom: 0;
    font-size: ${props => props.theme.fontSize.xsmall};
    span {
      font-weight: ${props => props.theme.fontWeight.light};
      font-size: ${props => props.theme.fontSize.xxsmall};
    }
  }
  img {
    margin-right: 1rem;
    margin-bottom: 0;
    height: 5rem;
    width: 5rem;
    border-radius: 100px;
    padding: 2px;
    border: solid 2px paleturquoise;
    /* background-color: white; */
  }
  &:nth-child(1) {
    &:nth-child(1) {
      img {
        /* border: solid 2px red; */
      }
    }
  }
  @media ${props => props.theme.mediaQuery.Laptop} {
    width: 18rem;
    img {
      height: 4rem;
      width: 4rem;
    }
    p {
      font-size: ${props => props.theme.fontSize.xxsmall};
    }
  }
`

export const OurWorkWrapper = styled(SectionWrapper)`
  width: 100%;
  padding: 5rem 7% 7rem 7%;
  @media ${props => props.theme.mediaQuery.Tablet} {
    padding: 3rem 5% 5rem 5%;
  }
  border-bottom: solid 4px coral;
  h1,
  h3 {
    margin-bottom: 0;
    text-align: center;
    padding-bottom: 1rem;
    word-spacing: 10px;
    text-transform: uppercase;
    color: white;
  }
  h3 {
    margin-top: 2rem;

    font-weight: ${props => props.theme.fontWeight.light};
  }
  p {
    text-align: center;
    color: ${props => props.theme.colors.bgColor};
    font-weight: ${props => props.theme.fontWeight.light};
  }
  a {
    font-size: ${props => props.theme.fontSize.xsmall};
    position: absolute;
    right: 50%;
    transform: translateX(50%);
    text-decoration: none;
    text-align: center;
    color: white;
    padding: 0.5rem 1rem;
    border: solid 2px palevioletred;
    :hover {
      opacity: 0.7;
    }
  }
`
export const ImagesCarousel = styled(Slider)`
  margin: 2rem 0 1rem 0;
  padding: 1rem 0.5rem;
  background-color: whitesmoke;
  @media ${props => props.theme.mediaQuery.Tablet} {
    background-color: #1b6ca8;
  }
  box-shadow: ${props => props.theme.boxShadowLite};
  img {
    /* border-radius: 2.5em; */
    max-height: 22rem;
    max-width: 100%;
    margin: auto;
    padding: 0 2rem;
  }
`
export const Image = styled(ImageComponent)`
  width: fit-content;
`

export const ContactSection = styled(Container)`
  width: 100%;
  margin: 0 auto;
  padding: 5rem 0;
  color: white;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  border-bottom: solid 4px lightcoral;
  @media ${props => props.theme.mediaQuery.Tablet} {
    flex-direction: column;
    padding: 3rem 0;
    h1 {
      margin-bottom: 0rem;
    }
  }
`
export const ContactContent = styled.div`
  width: 40%;
  padding: 0 1.5rem;
  @media ${props => props.theme.mediaQuery.Laptop} {
    width: 55%;
  }
  @media ${props => props.theme.mediaQuery.Tablet} {
    width: 95%;
    padding: 0 1rem;

    p {
      span {
        font-size: ${props => props.theme.fontSize.small};
      }
    }
  }
  p {
    line-height: 2em;
    font-weight: ${props => props.theme.fontWeight.light};
    span {
      line-height: 2.1em;
      border-bottom: 4px solid ${props => props.theme.colors.primaryColor};
      font-size: ${props => props.theme.fontSize.xlarge};
      @media ${props => props.theme.mediaQuery.Tablet} {
        font-size: ${props => props.theme.fontSize.large};
      }
      @media ${props => props.theme.mediaQuery.Mobile} {
        font-size: ${props => props.theme.fontSize.medium};
      }
    }
  }
`
export const ContactUsForm = styled.form`
  min-width: 27%;
  margin: 1rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  border-radius: 6px;
  color: ${props => props.theme.colors.secondaryColor};
  font-size: ${props => props.theme.fontSize.xsmall};
  padding-top: 0;
  @media ${props => props.theme.mediaQuery.Laptop} {
    width: 35%;
  }
  @media ${props => props.theme.mediaQuery.Tablet} {
    width: 90%;
  }
  h3 {
    margin: 0 0 0.5rem 0;
    align-self: center;
    padding: 1.5rem 0;
    text-transform: uppercase;
    font-weight: ${props => props.theme.fontWeight.normal};
    word-spacing: 7px;
  }
  label {
    display: flex;
    flex-direction: column;
    margin-top: 0.8rem;
  }
  input,
  textarea {
    padding: 0.5em;
    width: 100%;
    font-weight: ${props => props.theme.fontWeight.light};
    padding-left: 0;
  }

  input[type="text"],
  input[type="email"],
  input[type="tel"],
  input[type="date"] {
    box-sizing: border-box;
    border: none;
    border-bottom: 2px solid ${props => props.theme.colors.primaryColor};
    height: 1.8rem;
    ::placeholder {
      font-size: ${props => props.theme.fontSize.xsmall};
      opacity: 0.5;
    }
    @media ${props => props.theme.mediaQuery.Laptop} {
      border-bottom-width: 1.5px;
    }
  }
  textarea {
    height: 4rem;
    border: none;
    border-bottom: 2px solid ${props => props.theme.colors.primaryColor};
    ::placeholder {
      font-size: ${props => props.theme.fontSize.xsmall};
      opacity: 0.5;
    }
    @media ${props => props.theme.mediaQuery.Laptop} {
      border-bottom-width: 1.5px;
    }
  }
  button {
    background-color: #3cbc8d;
    color: white;
    margin-top: 1.5rem;
    padding: 0.5em;
    width: 8rem;
    border: none;
    font-weight: ${props => props.theme.fontWeight.normal};
    cursor: pointer;
    :hover {
      opacity: 0.8;
    }
  }
`
export const FooterSection = styled.footer`
  width: 80%;
  margin: 0 auto;
  bottom: 0;
  display: ${props => props.display};
  flex-direction: ${props => props.flexDirection};
  flex-wrap: ${props => props.flexWrap};
  justify-content: ${props => props.justifyContent};
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  video {
    padding: 1rem 0;
  }
  @media ${props => props.theme.mediaQuery.Laptop} {
    width: 90%;
  }
  @media ${props => props.theme.mediaQuery.Tablet} {
    width: 100%;
    video {
      width: 13rem;
      margin-right: 1em;
    }
  }
  @media ${props => props.theme.mediaQuery.Mobile} {
    text-align: center;
    margin: 0 5%;
    width: 90%;
    flex-wrap: inherit;
    flex-direction: column;
    justify-content: space-between;
    video {
      width: 13rem;
      margin-right: 0;
    }
  }
  h4 {
    font-weight: ${props => props.theme.fontWeight.normal};
  }
`
export const SocialMedia = styled(Div)`
  width: 10rem;
  text-align: center;

  img {
    width: 1.5rem;

    :hover {
      opacity: 0.7;
    }
  }
  @media ${props => props.theme.mediaQuery.Tablet} {
    img {
      width: 1rem;
    }
  }
  @media ${props => props.theme.mediaQuery.Mobile} {
    margin-top: 1rem;
  }
`
export const RawMedia = styled(SocialMedia)`
  height: 7rem;
  width: 10rem;
  text-align: center;
  p {
    font-size: ${props => props.theme.fontSize.xsmall};
    margin-bottom: 0.5em;
  }
  @media ${props => props.theme.mediaQuery.Tablet} {
    width: 12rem;
    height: 5rem;
    p {
      font-size: ${props => props.theme.fontSize.xxsmall};
    }
  }
  @media ${props => props.theme.mediaQuery.Mobile} {
    margin-top: 1rem;
  }
`
export const CopyRight = styled.p`
  margin: 0;
  padding: 1rem;
  background-color: ${props => props.bgcolor};
  display: ${props => props.display};
  flex-wrap: ${props => props.flexWrap};
  justify-content: center;
  a {
    color: blueviolet;
    text-decoration: none;
    margin-left: 0.5em;
    :hover {
      color: ${props => props.theme.colors.primaryColor};
    }
  }
  @media ${props => props.theme.mediaQuery.Tablet} {
    font-size: ${props => props.theme.fontSize.xxsmall};
  }
`
export const FooterJoinLink = styled(Link)`
  color: ${props => props.theme.colors.bgColor};
  background-color: ${props => props.theme.colors.primaryColor};
  text-decoration: none;
  text-transform: uppercase;
  padding: 5px 25px;
  font-size: ${props => props.theme.fontSize.xsmall};
  font-weight: ${props => props.theme.fontWeight.normal};
  border: 2px solid ${props => props.theme.colors.primaryColor};
  border-radius: 25px;
  transition: 0.4s ease-out;
  cursor: pointer;
  &:hover {
    transition: 0.3s ease-in;
    color: ${props => props.theme.colors.primaryColor};
    border: 2px solid ${props => props.theme.colors.primaryColor};
    background-color: ${props => props.theme.colors.bgColor};
    box-shadow: ${props => props.theme.boxShadow};
  }
  @media ${props => props.theme.mediaQuery.Tablet} {
    font-size: ${props => props.theme.fontSize.xxsmall};
    padding: 3px 20px;
  }
`

export const JoinUsSection = styled(ContactSection)`
  padding-top: 8rem;
  align-items: flex-start;
  @media ${props => props.theme.mediaQuery.Tablet} {
    padding-top: 6rem;
    width: 100%;
    margin: 0 auto;
  }
`
export const JoinUsContent = styled(ContactContent)`
  @media ${props => props.theme.mediaQuery.Tablet} {
    margin: 0 auto;
  }
`
export const JoinUsForm = styled(ContactUsForm)`
  @media ${props => props.theme.mediaQuery.Tablet} {
    margin: 0 auto;
    h3 {
      /* width: 100%; */
      margin: 0 0 0rem 0;
      align-self: center;
      padding: 1.5rem 0;
      text-transform: uppercase;
      font-size: ${props => props.theme.fontSize.medium};
      word-spacing: 2px;
    }
  }
`

// ${props => props.theme.};

// @media ${props => props.theme.mediaQuery.Laptop} { }
// @media ${props => props.theme.mediaQuery.Tablet} { }
// @media ${props => props.theme.mediaQuery.Mobile} { }
