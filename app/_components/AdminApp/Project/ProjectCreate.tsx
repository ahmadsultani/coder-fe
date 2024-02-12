import {
  useNotify,
  Create,
  SimpleForm,
  TextInput,
  required,
  ImageInput,
  ImageField,
  SelectInput,
  ReferenceInput,
  ArrayInput,
  SimpleFormIterator,
  useRecordContext,
} from "react-admin";
import { dataProvider } from "../dataProvider";
import { uploadAndGetImgUrl } from "@/_utils/image";
import { IProjectCreateData } from "@/_types/project";
import { IResponse } from "@/_types/response";

const ProjectCreate = () => {
  const notify = useNotify();
  const record = useRecordContext();

  const handleSave = async (values: any) => {
    try {
      const res = await dataProvider.create<IResponse<IProjectCreateData>>(
        `projects`,
        {
          data: {
            body: JSON.stringify({
              title: values.title,
              description: values.description,
              cover: "",
            }),
            divisionId: values.divisionId,
          },
        },
      );

      let cover;
      const images: any[] = [];

      if (values.cover) {
        cover = await uploadAndGetImgUrl(values.cover.rawFile, "projects");
      }

      if (values.images) {
        for (const image of values.images) {
          const img = await uploadAndGetImgUrl(
            image.image.rawFile,
            `projects/images/${res.data.data?.projectId}`,
          );
          images.push(img);
        }
      }

      await dataProvider.update(`projects`, {
        id: res.data.data?.projectId,
        data: {
          body: JSON.stringify({
            title: values.title,
            description: values.description,
            cover,
            images: images?.length ? images : undefined,
          }),
        },
        previousData: record,
      });

      notify(`Project ${values.title} created`, { type: "success" });
      window.location.href = "/admin/#/projects";
    } catch (error) {
      notify(`Could not create project: ${error ?? "Unknown error"}`, {
        type: "error",
      });
    }
  };

  return (
    <Create>
      <SimpleForm onSubmit={handleSave}>
        <TextInput
          autoFocus
          source="title"
          fullWidth
          label="Title"
          validate={required()}
        />
        <TextInput source="description" fullWidth validate={required()} />
        <ReferenceInput
          source="divisionId"
          reference="divisions"
          label="Division"
          isRequired
        >
          <SelectInput optionText="name" />
        </ReferenceInput>
        <ImageInput
          source="cover"
          accept="image/*"
          placeholder={<p>Drop your file here</p>}
          validate={required()}
        >
          <ImageField source="src" title="Cover" />
        </ImageInput>
        <ArrayInput source="images">
          <SimpleFormIterator>
            <ImageInput
              source="image"
              label="Image"
              accept="image/*"
              placeholder={<p>Drop your file here</p>}
              validate={required()}
            >
              <ImageField source="src" title="Cover" />
            </ImageInput>
          </SimpleFormIterator>
        </ArrayInput>
      </SimpleForm>
    </Create>
  );
};

export default ProjectCreate;
