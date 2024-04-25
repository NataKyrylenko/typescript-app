import {
  AnimalCardComponent,
  AnimalCardTitle,
  AnimalCardText,
  AnimalCardImg,
} from "./styles";
import { AnimalCardProps } from "./types";

function AnimalCard({ animalData }: AnimalCardProps) {
  return (
    <AnimalCardComponent>
      <AnimalCardTitle>{animalData.name}</AnimalCardTitle>
      <AnimalCardText>{animalData.species}</AnimalCardText>
      <AnimalCardImg src={animalData.image}></AnimalCardImg>
    </AnimalCardComponent>
  );
}
export default AnimalCard;
