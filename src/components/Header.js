import React ,{useState}from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import  {selectCars } from "../features/car/carSlice"
import {useSelector} from 'react-redux'
function Header() {
    
    const [burgerStatus,setBurgerStatus] = useState(false);
    const cars = useSelector(selectCars)
    return (
     
            <Container>
                <a>
                    <img src='/images/logo.svg' al=""/>
                </a>

                <Menu>
                { cars && cars.map((car) =>
                    <a  href="#">{car}</a>
                )}
                </Menu>
                <RightMenu >
                    <a href="">Shop</a>
                    <a href="">account</a>
                    <span onClick={() => setBurgerStatus(true)}>Menu</span>

                </RightMenu>

                <BurgerNav show={burgerStatus}>
                    <CloseWrapper>
                        <CustomClose onClick={() => setBurgerStatus(false)}/>

                    </CloseWrapper>

                    { cars && cars.map((car) =>
                        <li><a href="#">{car}</a></li>
                    )}
                    <li><a href="#">existing inventory</a></li>
                    <li><a href="#">Used inventory</a></li>
                    <li><a href="#">Trade-in</a></li>
                    <li><a href="#">Test Drive</a></li>
                    <li><a href="#">Powerwann</a></li>
                    <li><a href="#">Commercial Energy</a></li>
                    <li><a href="#">Utilities</a></li>
                    <li><a href="#">Charging</a></li>
                    <li><a href="#">Find us</a></li>
                    <li><a href="#">Support</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">Account</a></li>
                    <li><a href="#">More</a></li>

                </BurgerNav>
            </Container>
    )
}


const Container = styled.div`
    min-height: 4rem;
    position : fixed;
    display:flex;
    align-items: center;
    justify-content:space-between;
    padding: 0 1.25rem;
    top:0;
    right:0;
    left:0;
    z-index:1;
`;

const Menu = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    flex:1;
    a{
        font-weight:600;
        text-transform:uppercase;
        padding : 0 10px;
        flex-wrap: nowrap;
    }
    @media (max-width:1020px){
        display:none;
    }
`;
const RightMenu  = styled.div`
    a{
        font-weight:600;
        margin-right : 7px;
        margin:16px;
        padding: 5px;
        &:hover{  
            background : rgba(0,0,0,0.1);
            border-radius:20px;
        }
        @media (max-width:1020px){
        display:none;
    }
    }
    span {
        padding:5px;
        margin-right : 16px;
        font-weight:600;
        cursor:pointer;
        &:hover{
            
        background : rgba(0,0,0,0.1);
        border-radius:20px;
        }
    }

`;
const CustomMenu = styled(MenuIcon)`
    cursor:pointer;
`;

const BurgerNav = styled.div`
    position : fixed;
    top:0;
    bottom:0;
    right:0;
    width :20rem;
    background:white;
    z-index:10;
    list-style:none;
    padding:1.25rem;
    text-align:start;
    transform : ${props => props.show ? 'translateX(0)' : 'TranslateX(100%)' };
    transition : transform 0.2s ease-out ;
    li{
        padding:1rem 0;
        border-bottom: 1px solid rgba(0,0,0,0.2);
        font-weight:600;  
        &:hover{
        background : rgba(0,0,0,0.1);
        border-radius:20px;
    } 
    }
`;

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`;

const CloseWrapper = styled.div`
display:flex;
justify-content:flex-end;`;

export default Header;
