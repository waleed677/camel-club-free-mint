import  styled  from "styled-components";
import {Link as LinkS } from "react-scroll";

export const Nav= styled.nav`
  background :${({scrollNav}) => (scrollNav ? "#101522" : "transparent")};
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
  font-size: 1.3rem;
  clear: both;
  margin-top:-100px;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavContainer= styled.div`
  display: flex;
  justify-content:space-evenly;
  height: 100px;
  z-index: 1;
  width: 100%;
  padding:0 24px;
  max-width: 2200px;
  transform: translateX(-55%);
  left: 50%;
  position: absolute;

  @media screen and (max-width: 960px) {
    transform: translateX(-52%);
  }
`;


export const NavLogo = styled.img`
  width: 150px;
  cusror: pointer;
  display: flex;
  align-items: center;
  margin-left: 24px;
  margin-top  : 20px;
  justify-self:flex-start;
  transition: width 0.5s;
  transition: height 0.5s;
  padding-bottom:2vh;
  @media (min-width: 767px) {
    width: 240px;
    margin-top  : 30px;
  }`;

  
export const MobileIcon = styled.div`
display:none;
  @media (max-width: 960px) {
    display:block;
    position:absolute;
    top:0;
    right:0;
    transform:translate(-100%,150%);
    fontSize:1.5rem;
    cusror: pointer;
    color: #fff;
    z-index:1;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  float: left;
  justify-content: flex-start;
  margin-right: -22px;
 

  @media screen and (max-width: 960px) {
    display:flex;
    flex-direction:column;
    content: '';
    width:100%;
    max-width: 100%;
    height:100vh;
    position:absolute;
    top:0px;
    left: ${({click}) => (click ? '0%' : '-140%')};
    opacity:1;
    transition: all 0.5s ease;
    background-color: #101522;
    
  }`;



  export const NavItems = styled.li`
    height:80px;
    border-bottom:2px solid transparent;
    list-style: none;
    $:hover{
      border-bottom:2px solid #5FCDE4;
    }

    @media screen and (max-width: 960px) {
      height:0%;
      margin-top:15vh;
      $:hover{
        border:none;
      }
    }
    `;

  export const NavLink = styled(LinkS)`
    text-decoration:none;
    color:#fff;
    align-items:center;
    height:100%;
    padding:0 1rem;
    display:flex;
    cursor:pointer;
    &:hover{
      color:var(--primary);
    }
    &:active{
      border-bottom: 3px solid #01bf71;
    }
    
    @media screen and (max-width: 960px) {
      text-align:center;
      width:100%;
      display:table;
    
      &:hover{
        color:#4b59f7;
        transition: all 0.5s ease;
        }
    }
    `;



  export const StyledButton = styled.button`
   background-color: var(--primary);
    padding: 10px 22px;
    border-radius: 10px;
    white-space: nowrap;
    height:40px;
    outline: none;
    ${'' /* margin-left: 10rem; */}
    border: none;
    font-weight: bolder;
    color: var(--primary-text);
    margin-top:1.1vw;
    cursor: pointer;
    transition: 0.5s all ease-in-out;
    :active {
      box-shadow: none;
      -webkit-box-shadow: none;
      -moz-box-shadow: none;
    }

    @media screen and (max-width: 960px) {
      display:none;
    }

  `;

  export const StyledButtonMobile = styled.button`
   background-color: var(--primary);
    padding: 10px 22px;
    border-radius: 10px;
    white-space: nowrap;
    outline: none;
    border: none;
    font-weight: bolder;
    color: var(--primary-text);
    margin-top:1.1vw;
 
    cursor: pointer;
    display:none;
    transition: 0.5s all ease-in-out;
    :active {
      box-shadow: none;
      -webkit-box-shadow: none;
      -moz-box-shadow: none;
    }

    @media screen and (max-width: 960px) {
      text-align:center;
      display:flex;
      justify-content:center;
    }

  `;


