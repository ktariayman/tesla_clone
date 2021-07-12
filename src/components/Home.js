import React from 'react'
import styled from 'styled-components';
import Section from './Section';

function Home() {
    return (
        <Container>
            <Section 
                title="Model S"
                description ="Order Online for Touchless Delivery"
                backgroundImg = "model-s.jpg"
                LeftBtnText ="Custom Order"
                RightBtnText ="existing inventory"
            />
            <Section 
                 title="Model Y "
                description ="Order Online for Touchless Delivery"
                backgroundImg="model-y.jpg"
                LeftBtnText ="Custom Order"
                RightBtnText ="existing inventory"
            />
            <Section    
                title="Model 3 "
                description ="Order Online for Touchless Delivery"
                backgroundImg="model-3.jpg"
                LeftBtnText ="Custom Order"
                RightBtnText ="existing inventory" 
            />
            <Section 
                title="Model X "
                description ="Order Online for Touchless Delivery"
                backgroundImg="model-x.jpg"
                LeftBtnText ="Custom Order"
                RightBtnText ="existing inventory" 
            />
            <Section 
                title="Solar Panel"
                description ="Lowest Cost Solar Panels in America"
                backgroundImg="solar-panel.jpg"
                LeftBtnText ="Custom Order"
                RightBtnText ="existing inventory" 
            />
            <Section 
                title="Accessoiries"
                description =""
                backgroundImg="accessories.jpg"
                LeftBtnText ="Shop Now"
            />
        </Container>
    )
}

const Container = styled.div `
    height: 100vh;
`;
export default Home; 
