import {
  useNotify,
  Create,
  SimpleForm,
  TextInput,
  required,
} from "react-admin";
import { dataProvider } from "../dataProvider";

const DivisionCreate = () => {
  const notify = useNotify();

  const handleSave = async (values: any) => {
    try {
      const response = await dataProvider.create("divisions", {
        data: values,
      });

      if (response.data.staus >= 400) throw new Error(response.data.message);

      notify(response.data.message, { type: "success" });
      window.location.href = "/admin#/divisions";
    } catch (error: any) {
      notify(error ?? "Unknown error", {
        type: "error",
      });
    }
  };

  return (
    <Create>
      <SimpleForm onSubmit={handleSave}>
        <TextInput
          autoFocus
          source="name"
          fullWidth
          label="Division Name"
          validate={required()}
        />
        {/* cancel button */}
      </SimpleForm>
    </Create>
  );
};

export default DivisionCreate;
