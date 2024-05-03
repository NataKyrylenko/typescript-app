import styled from "@emotion/styled";
import { css } from "@emotion/react";

const commonEmployeeForm = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
`

export const EmployeeFormContainer = styled.form`
    ${commonEmployeeForm}
    max-width: 60%;
    padding: 30px;
    margin: 20px auto;
    border: 1px solid #000000;
    border-radius: 4px;
`;

export const InputsContainer = styled.div`
    ${commonEmployeeForm}
    flex-direction: row;
`;

export const Checkbox = styled.input`
width: 25px;
height: 25px;
`;
export const CheckboxLabel = styled.label`
font-size: 22px;
`;

export const ErrorAgreementMessage = styled.p`
    color: red;
    font-size: 16px;
    height: 18px;
`;