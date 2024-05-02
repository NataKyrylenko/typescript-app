import Input from "components/Input/Input";
import { EmployeeFormContainer, InputsContainer } from "./styles";
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
      isTerms: "false",
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
        <Input
          name="isTerms"
          type="checkbox"
          placeholder=""
          label="Terms of Use"
          onInputChange={formik.handleChange}
          value={formik.values.isTerms}
        />
      </InputsContainer>

      <Button type="submit" name="Create" />
    </EmployeeFormContainer>
  );
}

export default EmployeeForm;
