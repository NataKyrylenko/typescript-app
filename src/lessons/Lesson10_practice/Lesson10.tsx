import Button from "components/Button/Button";
import { ButtonsContainer, InfoContainer, InfoText, Lesson10Wrapper } from "./styles";
import { useEffect, useState } from "react";

function Lesson10() {
    const [info, setInfo] = useState<string[]>([]);
    const [isShowCatInfo, setIsShowCatInfo] = useState<boolean>(false);

    const getCatData = async () => {
        try {
            const response = await fetch('https://catfact.ninja/fact');
            const result = await response.json();

            if (!response.ok) {
                throw Object.assign(new Error('API Error '), {
                    response: result
                });
            } else {
                setInfo((prevInfo) => [...prevInfo, result.fact]);
                setIsShowCatInfo(true);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getCatData();
    }, []);


    const deleteAllData = () => {
        setInfo([]);
        setIsShowCatInfo(false);
    };

    return (
        <Lesson10Wrapper>
            <ButtonsContainer>
                <Button name="GET MORE INFO" onButtonClick={getCatData}></Button>
                <Button name="DELETE ALL DATA" onButtonClick={deleteAllData}></Button>
            </ButtonsContainer>
                <InfoContainer isShowCatInfo={isShowCatInfo}>
                {info.map((info, index) => (
                        <InfoText>{info}</InfoText> 
                    ))}  
                </InfoContainer>
        </Lesson10Wrapper>
    );
}

export default Lesson10;














// import Button from "components/Button/Button";
// import { ButtonsContainer, InfoContainer, Lesson10Wrapper } from "./styles";
// import { useEffect, useState } from "react";


// function Lesson10() {
    
//     const [infoMap, setInfoMap] = useState<Map<number, string>>(new Map());
    
//     const [info, setInfo] = useState<string []>([]);

//     const [isShowCatInfo,setIsShowCatInfo] = useState<boolean>(false);

//     const getCatData = async() => {
//         try{
//         const response = await fetch('https://catfact.ninja/fact')
//         const result = await response.json();
    
//         if(!response.ok){
//           throw Object.assign(new Error('API Error '), {
//             response: result
//           });
//         } else {
//           setInfo(result.fact);
//         }
//       }catch(error){
//         console.log(error)
//       }
//       }

//       useEffect(()=> {
//         getCatData();
//     }, []);

     

//     const getMoreInfo = () => {

//         const newDataMap = new Map(info);
//         getCatData();
//         setIsShowCatInfo(true);
//     }

//     return (
//         <Lesson10Wrapper>
//             <ButtonsContainer>
//                 <Button name="GET MORE INFO" onButtonClick={getMoreInfo}></Button>
//                 <Button name="DELETE ALL DATA" onButtonClick={()=>{}}></Button>
//             </ButtonsContainer>
//             <InfoContainer isShowCatInfo={isShowCatInfo}>{info}</InfoContainer>
//         </Lesson10Wrapper>

//     )
// }

// export default Lesson10;