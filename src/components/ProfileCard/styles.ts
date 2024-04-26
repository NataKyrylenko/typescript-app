import styled from "@emotion/styled";

export const ProfileCardComponent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 30%;
  padding: 10px;
  background-color: rgb(239, 255, 236);
  border: 1px solid rgb(0, 134, 63);
  border-radius: 4px;
`;

export const ProfileCardImg = styled.img`
  padding: 2px;
`;

export const ProfileCardTitle = styled.h3`
  font-size: 24px;
  color: rgb(11, 95, 11);
`;

export const ProfileCardText = styled.p`
  font-size: 18px;
  color: rgb(116, 108, 22);
  font-weight: bold;
`;
