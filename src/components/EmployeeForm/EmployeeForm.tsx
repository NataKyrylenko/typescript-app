import Input from "components/Input/Input";
import { Checkbox, CheckboxLabel, EmployeeFormContainer, InputsContainer } from "./styles";
import Button from "components/Button/Button";
import { useFormik } from "formik";
import { EmployeeFormValues } from "./types";

function EmployeeForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      surname: "",
      age: "",
      position: "",
      isTerms: false,
    } as EmployeeFormValues,
    onSubmit: (values: EmployeeFormValues) => {
      console.log(values);
    },
  });

  //console.log(formik);

  return (
    <EmployeeFormContainer onSubmit={formik.handleSubmit}>
      <InputsContainer>
        <Input
          name="name"
          type="text"
          placeholder="Your name"
          label="Name"
          onInputChange={formik.handleChange}
          value={formik.values.name}
        />

        <Input
          name="surname"
          type="text"
          placeholder="Your surname"
          label="Surname"
          onInputChange={formik.handleChange}
          value={formik.values.surname}
        />
      </InputsContainer>
      <InputsContainer>
        <Input
          name="age"
          type="number"
          placeholder="Your age"
          label="Age"
          onInputChange={formik.handleChange}
          value={formik.values.age}
        />

        <Input
          name="position"
          type="text"
          placeholder="Your position"
          label="Position"
          onInputChange={formik.handleChange}
          value={formik.values.position}
        />
      </InputsContainer>
      <InputsContainer>
        <Checkbox
          id="agreement-id"
          name="isTerms"
          type="checkbox"
          onChange={formik.handleChange}
          checked={formik.values.isTerms}

        />
        <CheckboxLabel htmlFor="agreement-id">I Agree</CheckboxLabel>
      </InputsContainer>

      <Button type="submit" name="Create" disabled={!formik.values.isTerms}/>
    </EmployeeFormContainer>
  );
}

export default EmployeeForm;
