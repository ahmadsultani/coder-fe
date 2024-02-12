import {
  useNotify,
  Create,
  SimpleForm,
  SelectInput,
  ReferenceInput,
} from "react-admin";
import { dataProvider } from "../dataProvider";

const BestProjectCreate = () => {
  const notify = useNotify();

  const handleSave = async (values: any) => {
    try {
      await dataProvider.create(`best-projects`, {
        data: {
          project_id: values.project_id,
        },
      });

      notify(`Project ${values.title} created`, { type: "success" });
      window.location.href = "/admin#/projects";
    } catch (error) {
      notify(`Could not create project: ${error ?? "Unknown error"}`, {
        type: "error",
      });
    }
  };

  return (
    <Create>
      <SimpleForm onSubmit={handleSave}>
        <ReferenceInput
          source="project_id"
          reference="projects"
          label="Select Project"
          isRequired
        >
          <SelectInput optionText="title" />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

export default BestProjectCreate;
