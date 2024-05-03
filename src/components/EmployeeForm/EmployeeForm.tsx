import Input from "components/Input/Input";
import {
  Checkbox,
  CheckboxLabel,
  EmployeeFormContainer,
  ErrorAgreementMessage,
  InputsContainer,
} from "./styles";
import Button from "components/Button/Button";
import { useFormik } from "formik";
import { EMPLOYEE_FIELD_NAMES, EmployeeFormValues } from "./types";
import * as Yup from "yup";

function EmployeeForm() {
  const shema = Yup.object().shape({
    [EMPLOYEE_FIELD_NAMES.NAME]: Yup.string()
      .required("Filed is required")
      .min(2, "Min 2 symbols")
      .max(50, "Max 50 symbols"),
    [EMPLOYEE_FIELD_NAMES.SURNAME]: Yup.string()
      .required("Filed is required")
      .max(15, "Max 15 symbols"),
    [EMPLOYEE_FIELD_NAMES.AGE]: Yup.number()
      .typeError("Age must be number")
      .required("Filed age is required")
      .min(1, "Min 1 symbols")
      // .max(3, "Max 3 symbols"),
      .test('check length', 'Max 3 symbol', value => String(value).length <=3),
    [EMPLOYEE_FIELD_NAMES.POSITION]: Yup.string().max(30, "Max 30 symbols"),
    [EMPLOYEE_FIELD_NAMES.ISTERMS]: Yup.boolean().oneOf([true],'Accept agreement'),
  });

  const formik = useFormik({
    initialValues: {
      [EMPLOYEE_FIELD_NAMES.NAME]: "",
      [EMPLOYEE_FIELD_NAMES.SURNAME]: "",
      [EMPLOYEE_FIELD_NAMES.AGE]: "",
      [EMPLOYEE_FIELD_NAMES.POSITION]: "",
      [EMPLOYEE_FIELD_NAMES.ISTERMS]: false,
    } as EmployeeFormValues,
    validationSchema: shema,
    validateOnChange: false,
    validateOnMount: false,
    onSubmit: (values: EmployeeFormValues) => {
      console.log(values);
    },
  });

  return (
    <EmployeeFormContainer onSubmit={formik.handleSubmit}>
      <InputsContainer>
        <Input
          name={EMPLOYEE_FIELD_NAMES.NAME}
          type="text"
          placeholder="Your name"
          label="Name*"
          onInputChange={formik.handleChange}
          value={formik.values[EMPLOYEE_FIELD_NAMES.NAME]}
          error={formik.errors[EMPLOYEE_FIELD_NAMES.NAME]}
        />

        <Input
          name={EMPLOYEE_FIELD_NAMES.SURNAME}
          placeholder="Your surname"
          label="Surname*"
          onInputChange={formik.handleChange}
          value={formik.values[EMPLOYEE_FIELD_NAMES.SURNAME]}
          error={formik.errors[EMPLOYEE_FIELD_NAMES.SURNAME]}
        />
      </InputsContainer>
      <InputsContainer>
        <Input
          name={EMPLOYEE_FIELD_NAMES.AGE}
          placeholder="Your age"
          label="Age*"
          onInputChange={formik.handleChange}
          value={formik.values[EMPLOYEE_FIELD_NAMES.AGE]}
          error={formik.errors[EMPLOYEE_FIELD_NAMES.AGE]}
        />

        <Input
          name={EMPLOYEE_FIELD_NAMES.POSITION}
          placeholder="Your position"
          label="Position"
          onInputChange={formik.handleChange}
          value={formik.values[EMPLOYEE_FIELD_NAMES.POSITION]}
          error={formik.errors[EMPLOYEE_FIELD_NAMES.POSITION]}
        />
      </InputsContainer>
      <InputsContainer>
        <Checkbox

          id={EMPLOYEE_FIELD_NAMES.ISTERMS}
          name="isTerms"
          type="checkbox"
          onChange={formik.handleChange}
          checked={formik.values[EMPLOYEE_FIELD_NAMES.ISTERMS]}
        />
        <CheckboxLabel htmlFor="agreement-id">I Agree *</CheckboxLabel>
      </InputsContainer>
      <ErrorAgreementMessage>{formik.errors[EMPLOYEE_FIELD_NAMES.ISTERMS]}</ErrorAgreementMessage>
      <Button type="submit" name="Create" disabled={!formik.values[EMPLOYEE_FIELD_NAMES.ISTERMS]} />
    </EmployeeFormContainer>
  );
}

export default EmployeeForm;
