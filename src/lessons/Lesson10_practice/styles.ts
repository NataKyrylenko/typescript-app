import styled from "@emotion/styled";
import { css } from "@emotion/react";

interface InfoContainerProps {
    isShowCatInfo: boolean
}

interface SpinnerContainerProps{
    isLoading: boolean
}

const randomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

const commonContainer = css`
display: flex;
 flex-direction: column;
 align-items: center;
 margin: 20px auto;
 
`

 export const Lesson10Wrapper = styled.div`
 ${commonContainer}
 gap: 20px;
 width: 75%;
 height: 100vh;
 `;

 export const ButtonsContainer = styled.div`
${commonContainer}
 gap: 20px;
flex-direction: row;
 `;

 export const InfoContainer = styled.div<InfoContainerProps>`
    ${commonContainer}
    display: ${({isShowCatInfo}) => isShowCatInfo ? 'flex' : 'none'};
    flex-direction: column;
    align-items: flex-start;
    max-height: 700px;
    overflow: auto;
    padding: 15px;
    border: 2px solid #AADAE8;
    border-radius: 8px;
    background-color: #F9F7F7;
 `;

 export const InfoText = styled.p`
 font-size: 22px;
    color: ${randomColor};

 `;

 export const SpinnerContainer = styled.div<SpinnerContainerProps>`
 ${commonContainer}
 display: ${({isLoading}) => isLoading ? 'flex' : 'none'};
 `;