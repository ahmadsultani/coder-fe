import {
  useNotify,
  SimpleForm,
  TextInput,
  required,
  Edit,
  useGetRecordId,
} from "react-admin";
import { dataProvider } from "../dataProvider";

const DivisionEdit = (props: any) => {
  const notify = useNotify();
  const id = useGetRecordId();

  const handleSave = async (values: any) => {
    try {
      const response = await dataProvider.update(`divisions`, {
        id,
        data: { name: values.name },
        previousData: props.record,
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
    <Edit>
      <SimpleForm onSubmit={handleSave}>
        <TextInput
          autoFocus
          source="id"
          fullWidth
          label="Division Id"
          validate={required()}
          disabled
        />
        <TextInput
          autoFocus
          source="name"
          fullWidth
          label="Division Name"
          validate={required()}
        />
        {/* cancel button */}
      </SimpleForm>
    </Edit>
  );
};

export default DivisionEdit;
