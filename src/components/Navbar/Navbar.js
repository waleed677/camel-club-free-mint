import React, { useEffect, useState, useRef } from "react";
import { connect } from "../../redux/blockchain/blockchainActions";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../redux/data/dataActions";
import {Link} from 'react-scroll'
import { 
    Nav, 
    NavLogo,
    NavContainer,
    MobileIcon,
    NavMenu,
    NavItems,
    NavLink,
    StyledButton,
    StyledButtonMobile  
} from './Navbar.element'
import {FaBars,FaTimes} from 'react-icons/fa';
import { IconContext } from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";

import * as s from "../../styles/globalStyles";


const Navbar = () => {
    const [scrollNav,setScrollNav] = useState(false);
    const changeNav = () => {
      if(window.scrollY>=100){
        setScrollNav(true)
      }else{
        setScrollNav(false)
      }

    }

    useEffect(()=>{
      window.addEventListener('scroll',changeNav)
    },[])


    const dispatch = useDispatch();
    const blockchain = useSelector((state) => state.blockchain);
    const data = useSelector((state) => state.data);
    const [claimingNft, setClaimingNft] = useState(false);
    const [feedback, setFeedback] = useState(`Click buy to mint your NFT.`);
    const [mintAmount, setMintAmount] = useState(1);
    const [CONFIG, SET_CONFIG] = useState({
      CONTRACT_ADDRESS: "",
      SCAN_LINK: "",
      NETWORK: {
        NAME: "",
        SYMBOL: "",
        ID: 0,
      },
      NFT_NAME: "",
      SYMBOL: "",
      MAX_SUPPLY: 1,
      WEI_COST: 0,
      DISPLAY_COST: 0,
      GAS_LIMIT: 0,
      MARKETPLACE: "",
      MARKETPLACE_LINK: "",
      SHOW_BACKGROUND: false,
    });
  
     const getData = () => {
      if (blockchain.account !== "" && blockchain.smartContract !== null) {
        dispatch(fetchData(blockchain.account));
      }
    };
  
    const getConfig = async () => {
      const configResponse = await fetch("/config/config.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const config = await configResponse.json();
      SET_CONFIG(config);
    };
  
    useEffect(() => {
      getConfig();
    }, []);
  
    useEffect(() => {
      getData();
    }, [blockchain.account]);
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const toggleHome = () => {
      scroll.scrollToTop();
    }

    const homeLink = () =>{
      window.location.replace("https://mutantagecamelclub.io/")
    }

    const openSea = () =>{
      window.location.replace("https://opensea.io/collection/mutant-age-camel-club")
    }
    return (
        <>

        <Nav scrollNav={scrollNav}>
          <NavContainer>
            <NavLink >
                <NavLogo alt={"logo"} src={"config/images/logo.png"} onClick={toggleHome}></NavLogo>
            </NavLink>
          <NavMenu onClick={handleClick} click={click}>
              <NavItems>
                  <NavLink onClick={homeLink} spy={true} smooth={true} offset={-80} duration={500}>Home</NavLink> 
                </NavItems>
                
        
               
                {/* <NavItems>
                <StyledButtonMobile 
                  onClick={(e) => {
                          e.preventDefault();
                          dispatch(connect());
                          getData();
                        }}
                  >CONNECT</StyledButtonMobile>
                </NavItems> */}
               
              </NavMenu>
            
              <MobileIcon onClick={handleClick}>
              {click ? <FaTimes/> : <FaBars/>}
              </MobileIcon>

             
                {/* <StyledButton 
                  onClick={(e) => {
                          e.preventDefault();
                          dispatch(connect());
                          getData();
                        }}
                  >CONNECT</StyledButton> */}
              
             
          </NavContainer>
        </Nav>
        </>
    )
}

export default Navbar
