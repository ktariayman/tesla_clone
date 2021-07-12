import React from 'react'
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
function Section({title , description , LeftBtnText , RightBtnText ,backgroundImg }) {
    return (
        <Wrap bgImage={backgroundImg}>
           <Fade bottom >
                <ItemText>
                    <h1>{title}</h1>
                    <p> {description}</p>
                </ItemText>
           </Fade>
            <Buttons>
             
                <Fade bottom >
                    <ButtonGroup>
                        <LeftButton>
                            {LeftBtnText}
                        </LeftButton>
                    {RightBtnText && 
                            <RightButton>
                                {RightBtnText}
                            </RightButton>
                    }
                    </ButtonGroup>
                </Fade>
                <DownArrow src ="/images/down-arrow.svg"/>
      
            </Buttons>
        </Wrap>
    )
}
const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-image: url('/images/model-s.jpg');
    background-position:center ;
    background-repeat: no-repeat;
    display:flex;
    flex-direction: column;
    justify-content:space-between;
    align-items:center;
    background-image: ${props => `url("/images/${props.bgImage}")`};
`;

const ItemText = styled.div`
    padding-top: 16vh;
    text-align: center;
`;
const ButtonGroup = styled.div`
    display:flex;
    margin-bottom:2rem;
    @media (max-width:768px){
        flex-direction:column;
    }
`;
const LeftButton = styled.div`
    background-color: rgba(23,26,32,0.8);
    color:white;
    height:2.5rem;
    width : 16rem;
    display:flex;
    justify-content:center;
    align-items : center;
    border-radius:6rem;
    opacity:0.75;
    text-transform: uppercase;
    font-size: 12px;
    cursor:pointer;
    margin:10px;
`;
const RightButton = styled(LeftButton)`
    background:white;
    opacity:0.65;
    color:black;

`;

const DownArrow = styled.img`
    margin-top:20px;
    height:40px;
    animation : animateDown infinite 1.5s;
    overflow-x:hidden;
`;
const Buttons = styled.div`
`;
export default Section; 

