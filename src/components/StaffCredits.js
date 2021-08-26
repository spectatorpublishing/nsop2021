import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    background-color: #D37462;
    padding: 2rem 0 2rem 0;

    @media only screen and (max-width: 800) {
        padding: 1rem 0 1rem 0;
    }
`;

const Direction = styled.div`
    display: flex;
    flex-direction: row;

    @media only screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

const Text = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex;
    font-family: 'Noto Sans', Calibri, sans-serif;
    font-size: 18px;
    color: white;
    font-weight: 500;
    
    h2 {
        font-family: 'Noto Sans', Calibri, sans-serif;
        font-weight: 600;
        font-size: 24px;
        text-transform: uppercase;
        margin: 0;

        @media only screen and (max-width: 600px) {
            font-size: 18px;
        }

        @media only screen and (max-width: 425px) {
            font-size: 16px;
        }
    }
    
    @media only screen and (max-width: 800px) {
        padding: 0 2rem 0rem 2rem;
    }

    @media only screen and (max-width: 425px) {
        font-size: 14px;
    }
`;

const Column = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2rem;

    @media only screen and (max-width: 1370px) {
        margin: 2rem 0 0 2rem ;
    }

    @media only screen and (max-width: 1270px) {
        margin: 2rem;
    }

    @media only screen and (max-width: 920px) {
        margin: 2rem 0 0 2rem ;
    }

    @media only screen and (max-width: 800px) {
        margin: 0;
    }
`;

const Box = styled.div`
    text-align: left;
    border-style: solid;
    border-width: 5px;
    border-radius: 5px;
    padding: 1rem 1rem 0 1rem;
    margin: 0 0 2rem 0;

    @media only screen and (max-width: 800px) {
        text-align: left;
        margin: 1rem 0 0 0;
    }
`;

const Title = styled.div`
    font-family: 'Noto Sans', Calibri, sans-serif;
    font-weight: 600;
    font-size: 24px;
    color: white;
    text-transform: uppercase;
    text-align: left;
    padding-left: 2rem;

    @media only screen and (max-width: 425px) {
        font-size: 16px;
    }
`;

const CreditsList = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth));
    });

    if (width < 800){
        return (
            <Wrapper>
                <Title>Staff</Title>
                <Text>
                <Column>
                        <Box>
                            <h2>Corporate Board</h2>
                            <p>Sarah Braka, <i>Editor in Chief</i></p>
                            <p>Elizabeth Karpen, <i>Managing Editor</i></p>
                            <p>Tamarah Wallace, <i>Publisher</i></p>
                        </Box>
                        <Box>
                            <h2>Section Name</h2>
                            <p>Name Lastname, <i>Position Position</i></p>
                            <p>Name Lastname, <i>Position Position</i></p>
                            <p>Name Lastname, <i>Position Position</i></p>
                            <p>Name Lastname, <i>Position Position</i></p>
                        </Box>
                        <Box>
                            <h2>Section Name</h2>
                            <p>Name Lastname, <i>Position Position</i></p>
                            <p>Name Lastname, <i>Position Position</i></p>
                        </Box>
                        <Box>
                            <h2>Section Name</h2>
                            <p>Name Lastname, <i>Position Position</i></p>
                            <p>Name Lastname, <i>Position Position</i></p>
                            <p>Name Lastname, <i>Position Position</i></p>
                            <p>Name Lastname, <i>Position Position</i></p>
                        </Box>
                        <Box>
                            <h2>Section Name</h2>
                            <p>Name Lastname, <i>Position Position</i></p>
                            <p>Name Lastname, <i>Position Position</i></p>
                        </Box>
                        <Box>
                            <h2>News</h2>
                            <p>Dia Gill, <i>Editor</i></p>
                            <p>Abby Melbourne, <i>Deputy News Editor</i></p>
                            <p>Stella Padkas, <i>Staff Writer</i></p>
                            <p>Zachary Schermele, <i>Staff Writer</i></p>
                            <p>Irie Sentner, <i>Staff Writer</i></p>
                            <p>Name Lastname, <i>Position Position</i></p>
                            <p>Name Lastname, <i>Position Position</i></p>
                            <p>Name Lastname, <i>Position Position</i></p>                            
                            <p>Name Lastname, <i>Position Position</i></p>
                        </Box>
                        <Box>
                            <h2>Section Name</h2>
                            <p>Name Lastname, <i>Position Position</i></p>
                            <p>Name Lastname, <i>Position Position</i></p>
                            <p>Name Lastname, <i>Position Position</i></p>
                            <p>Name Lastname, <i>Position Position</i></p>                        
                        </Box>
                        <Box>
                            <h2>Section Name</h2>
                            <p>Name Lastname, <i>Position Position</i></p>
                            <p>Name Lastname, <i>Position Position</i></p>
                        </Box>
                        <Box>
                            <h2>Section Name</h2>
                            <p>Name Lastname, <i>Position Position</i></p>
                            <p>Name Lastname, <i>Position Position</i></p>                            
                            <p>Name Lastname, <i>Position Position</i></p>
                            <p>Name Lastname, <i>Position Position</i></p>
                        </Box>                       
                        <Box>
                            <h2>Section Name</h2>
                            <p>Name Lastname, <i>Position Position</i></p>
                            <p>Name Lastname, <i>Position Position</i></p>
                            <p>Name Lastname, <i>Position Position</i></p>
                            <p>Name Lastname, <i>Position Position</i></p>                        
                        </Box>
                        <Box>
                            <h2>Section Name</h2>
                            <p>Name Lastname, <i>Position Position</i></p>
                            <p>Name Lastname, <i>Position Position</i></p>
                            <p>Name Lastname, <i>Position Position</i></p>
                            <p>Name Lastname, <i>Position Position</i></p>                            
                            <p>Name Lastname, <i>Position Position</i></p>
                            <p>Name Lastname, <i>Position Position</i></p>
                            <p>Name Lastname, <i>Position Position</i></p>
                            <p>Name Lastname, <i>Position Position</i></p>                            
                            <p>Name Lastname, <i>Position Position</i></p>
                        </Box>
                        <Box>
                            <h2>Section Name</h2>
                            <p>Name Lastname, <i>Position Position</i></p>
                            <p>Name Lastname, <i>Position Position</i></p>                            
                            <p>Name Lastname, <i>Position Position</i></p>
                            <p>Name Lastname, <i>Position Position</i></p>
                        </Box>
                        <Box>
                            <h2>Section Name</h2>
                            <p>Name Lastname, <i>Position Position</i></p>
                            <p>Name Lastname, <i>Position Position</i></p>
                        </Box>
                    </Column>
                </Text>
            </Wrapper>
        );
    } else if (width >= 800 && width < 1270){
        return (
            <Wrapper>
                <Title>Staff</Title>
                <Text>
                    <Direction>
                    <Column>
                        <Box>
                            <h2>Corporate Board</h2>
                            <p>Sarah Braka, <i>Editor in Chief</i></p>
                            <p>Elizabeth Karpen, <i>Managing Editor</i></p>
                            <p>Tamarah Wallace, <i>Publisher</i></p>
                        </Box>
                        <Box>
                            <h2>Section Name</h2>
                            <p>Name Lastname, <i>Position Position</i></p>
                            <p>Name Lastname, <i>Position Position</i></p>
                            <p>Name Lastname, <i>Position Position</i></p>
                            <p>Name Lastname, <i>Position Position</i></p>
                        </Box>
                        <Box>
                            <h2>Section Name</h2>
                            <p>Name Lastname, <i>Position Position</i></p>
                            <p>Name Lastname, <i>Position Position</i></p>
                        </Box>
                        <Box>
                            <h2>Section Name</h2>
                            <p>Name Lastname, <i>Position Position</i></p>
                            <p>Name Lastname, <i>Position Position</i></p>
                            <p>Name Lastname, <i>Position Position</i></p>
                            <p>Name Lastname, <i>Position Position</i></p>
                        </Box>
                        <Box>
                            <h2>Section Name</h2>
                            <p>Name Lastname, <i>Position Position</i></p>
                            <p>Name Lastname, <i>Position Position</i></p>
                        </Box>

                        <Box>
                            <h2>News</h2>
                            <p>Dia Gill, <i>Editor</i></p>
                            <p>Abby Melbourne, <i>Deputy News Editor</i></p>
                            <p>Stella Padkas, <i>Staff Writer</i></p>
                            <p>Zachary Schermele, <i>Staff Writer</i></p>
                            <p>Irie Sentner, <i>Staff Writer</i></p>
                            <p>Name Lastname, <i>Position Position</i></p>
                            <p>Name Lastname, <i>Position Position</i></p>
                            <p>Name Lastname, <i>Position Position</i></p>                            
                            <p>Name Lastname, <i>Position Position</i></p>
                        </Box>
                        <Box>
                            <h2>Section Name</h2>
                            <p>Name Lastname, <i>Position Position</i></p>
                            <p>Name Lastname, <i>Position Position</i></p>
                            <p>Name Lastname, <i>Position Position</i></p>
                            <p>Name Lastname, <i>Position Position</i></p>                        
                        </Box>                    
                    </Column>
                    <Column>
                        <Box>
                            <h2>Section Name</h2>
                            <p>Name Lastname, <i>Position Position</i></p>
                            <p>Name Lastname, <i>Position Position</i></p>
                        </Box>
                        <Box>
                            <h2>Section Name</h2>
                            <p>Name Lastname, <i>Position Position</i></p>
                            <p>Name Lastname, <i>Position Position</i></p>                            
                            <p>Name Lastname, <i>Position Position</i></p>
                            <p>Name Lastname, <i>Position Position</i></p>
                        </Box>
                        <Box>
                            <h2>Section Name</h2>
                            <p>Name Lastname, <i>Position Position</i></p>
                            <p>Name Lastname, <i>Position Position</i></p>
                            <p>Name Lastname, <i>Position Position</i></p>
                            <p>Name Lastname, <i>Position Position</i></p>                        
                        </Box>
                        <Box>
                            <h2>Section Name</h2>
                            <p>Name Lastname, <i>Position Position</i></p>
                            <p>Name Lastname, <i>Position Position</i></p>
                            <p>Name Lastname, <i>Position Position</i></p>
                            <p>Name Lastname, <i>Position Position</i></p>                            
                            <p>Name Lastname, <i>Position Position</i></p>
                            <p>Name Lastname, <i>Position Position</i></p>
                            <p>Name Lastname, <i>Position Position</i></p>
                            <p>Name Lastname, <i>Position Position</i></p>                            
                            <p>Name Lastname, <i>Position Position</i></p>
                        </Box>
                        <Box>
                            <h2>Section Name</h2>
                            <p>Name Lastname, <i>Position Position</i></p>
                            <p>Name Lastname, <i>Position Position</i></p>                            
                            <p>Name Lastname, <i>Position Position</i></p>
                            <p>Name Lastname, <i>Position Position</i></p>
                        </Box>
                        <Box>
                            <h2>Section Name</h2>
                            <p>Name Lastname, <i>Position Position</i></p>
                            <p>Name Lastname, <i>Position Position</i></p>
                        </Box>
                    </Column>
                    </Direction>
                </Text>
            </Wrapper>
        );
    } else {
        return (
            <Wrapper>
                <Title>Staff</Title>
                <Text>
                    <Direction>
                    <Column>
                        <Box>
                            <h2>Corporate Board</h2>
                            <p>Sarah Braka, <i>Editor in Chief</i></p>
                            <p>Elizabeth Karpen, <i>Managing Editor</i></p>
                            <p>Tamarah Wallace, <i>Publisher</i></p>
                        </Box>
                        <Box>
                            <h2>Section Name</h2>
                            <p>Name Lastname, <i>Position Position</i></p>
                            <p>Name Lastname, <i>Position Position</i></p>
                            <p>Name Lastname, <i>Position Position</i></p>
                            <p>Name Lastname, <i>Position Position</i></p>
                        </Box>
                        <Box>
                            <h2>Section Name</h2>
                            <p>Name Lastname, <i>Position Position</i></p>
                            <p>Name Lastname, <i>Position Position</i></p>
                        </Box>
                        <Box>
                            <h2>Section Name</h2>
                            <p>Name Lastname, <i>Position Position</i></p>
                            <p>Name Lastname, <i>Position Position</i></p>
                            <p>Name Lastname, <i>Position Position</i></p>
                            <p>Name Lastname, <i>Position Position</i></p>
                        </Box>
                        <Box>
                            <h2>Section Name</h2>
                            <p>Name Lastname, <i>Position Position</i></p>
                            <p>Name Lastname, <i>Position Position</i></p>
                        </Box>
                    </Column>
                    <Column>
                        <Box>
                            <h2>News</h2>
                            <p>Dia Gill, <i>Editor</i></p>
                            <p>Abby Melbourne, <i>Deputy News Editor</i></p>
                            <p>Stella Padkas, <i>Staff Writer</i></p>
                            <p>Zachary Schermele, <i>Staff Writer</i></p>
                            <p>Irie Sentner, <i>Staff Writer</i></p>
                            <p>Name Lastname, <i>Position Position</i></p>
                            <p>Name Lastname, <i>Position Position</i></p>
                            <p>Name Lastname, <i>Position Position</i></p>                            
                            <p>Name Lastname, <i>Position Position</i></p>
                        </Box>
                        <Box>
                            <h2>Section Name</h2>
                            <p>Name Lastname, <i>Position Position</i></p>
                            <p>Name Lastname, <i>Position Position</i></p>
                            <p>Name Lastname, <i>Position Position</i></p>
                            <p>Name Lastname, <i>Position Position</i></p>                        
                        </Box>
                        <Box>
                            <h2>Section Name</h2>
                            <p>Name Lastname, <i>Position Position</i></p>
                            <p>Name Lastname, <i>Position Position</i></p>
                        </Box>
                        <Box>
                            <h2>Section Name</h2>
                            <p>Name Lastname, <i>Position Position</i></p>
                            <p>Name Lastname, <i>Position Position</i></p>                            
                            <p>Name Lastname, <i>Position Position</i></p>
                            <p>Name Lastname, <i>Position Position</i></p>
                        </Box>
                    </Column>
                    <Column>                        
                        <Box>
                            <h2>Section Name</h2>
                            <p>Name Lastname, <i>Position Position</i></p>
                            <p>Name Lastname, <i>Position Position</i></p>
                            <p>Name Lastname, <i>Position Position</i></p>
                            <p>Name Lastname, <i>Position Position</i></p>                        
                        </Box>
                        <Box>
                            <h2>Section Name</h2>
                            <p>Name Lastname, <i>Position Position</i></p>
                            <p>Name Lastname, <i>Position Position</i></p>
                            <p>Name Lastname, <i>Position Position</i></p>
                            <p>Name Lastname, <i>Position Position</i></p>                            
                            <p>Name Lastname, <i>Position Position</i></p>
                            <p>Name Lastname, <i>Position Position</i></p>
                            <p>Name Lastname, <i>Position Position</i></p>
                            <p>Name Lastname, <i>Position Position</i></p>                            
                            <p>Name Lastname, <i>Position Position</i></p>
                        </Box>
                        <Box>
                            <h2>Section Name</h2>
                            <p>Name Lastname, <i>Position Position</i></p>
                            <p>Name Lastname, <i>Position Position</i></p>                            
                            <p>Name Lastname, <i>Position Position</i></p>
                            <p>Name Lastname, <i>Position Position</i></p>
                        </Box>
                        <Box>
                            <h2>Section Name</h2>
                            <p>Name Lastname, <i>Position Position</i></p>
                            <p>Name Lastname, <i>Position Position</i></p>
                        </Box>
                    </Column>
                    </Direction>
                </Text>
            </Wrapper>
        );
    }
};

export default CreditsList;