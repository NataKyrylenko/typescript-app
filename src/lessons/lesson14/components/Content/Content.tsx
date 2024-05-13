import MainContent, { MainContext } from "../MainContent/MainContent";
import { ContentComponent, ContentItem } from "./styles";


import { useContext } from "react";
function Content( ) {
   const userData= useContext(MainContext);
    return (
        <ContentComponent>
            <ContentItem>First Name: {userData.firstName}</ContentItem>
            <ContentItem>Last Name: {userData.lastName}</ContentItem>
            <ContentItem>Age: {userData.age}</ContentItem>
        </ContentComponent>
    )
}

export default Content;