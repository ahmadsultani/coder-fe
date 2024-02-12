import {
  useNotify,
  SimpleForm,
  TextInput,
  required,
  Edit,
  useGetRecordId,
  ArrayInput,
  ImageField,
  ImageInput,
  SimpleFormIterator,
} from "react-admin";
import { dataProvider } from "../dataProvider";
import { deleteImg, uploadAndGetImgUrl } from "@/_utils/image";

const ProjectEdit = (props: any) => {
  const notify = useNotify();
  const id = useGetRecordId();

  const handleSave = async (values: any) => {
    try {
      const record: any = await dataProvider.getOne("projects", {
        id,
      });

      await dataProvider.update(`projects`, {
        id,
        data: {
          body: JSON.stringify({
            title: values.title,
            description: values.description,
          }),
        },
        previousData: record.data,
      });

      let cover;
      const images: any[] = [];

      if (record.data.cover_image.src !== values.cover_image) {
        await deleteImg(record.data.cover_image.src);
        cover = await uploadAndGetImgUrl(
          values.cover_image.rawFile,
          "projects",
        );
      }

      if (record.data.images !== values.images) {
        for (const image of record.data.images) {
          await deleteImg(image.src);
        }

        for (const image of values.images) {
          const img = await uploadAndGetImgUrl(
            image.image.rawFile,
            `projects/images/${id}`,
          );
          images.push(img);
        }
      }

      const response = await dataProvider.update(`projects`, {
        id,
        data: {
          body: JSON.stringify({
            title: values.title,
            description: values.description,
            cover: cover ?? record.data.cover_image.src,
            images: images ?? record.data.images,
          }),
        },
        previousData: record,
      });

      if (response.data.staus >= 400) throw new Error(response.data.message);

      notify(response.data.message, { type: "success" });
      window.location.href = "/admin#/projects";
    } catch (error: any) {
      notify(error.message ?? "Unknown error", {
        type: "error",
      });
    }
  };

  return (
    <Edit {...props}>
      <SimpleForm onSubmit={handleSave} {...props}>
        <TextInput
          autoFocus
          source="title"
          fullWidth
          label="Title"
          validate={required()}
        />
        <TextInput source="description" fullWidth validate={required()} />
        <TextInput source="division" label="Division" isRequired disabled />
        <ImageInput
          source="cover_image"
          accept="image/*"
          placeholder={<p>Drop your file here</p>}
          validate={required()}
        >
          <ImageField title="Cover" source="src" />
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
              <ImageField src="src" title="Cover" />
            </ImageInput>
          </SimpleFormIterator>
        </ArrayInput>
      </SimpleForm>
    </Edit>
  );
};

export default ProjectEdit;
