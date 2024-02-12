import {
  TextField,
  Datagrid,
  DeleteButton,
  EditButton,
  ListProps,
  List,
  ImageField,
  defaultExporter,
} from "react-admin";

const ProjectList = (props: ListProps) => {
  return (
    <List {...props}>
      <Datagrid bulkActionButtons={false} rowClick="edit">
        <TextField source="id" />
        <TextField source="title" />
        <TextField source="description" />
        <TextField source="division" />
        <ImageField
          source="cover_image.src"
          label="Cover Image"
          title="cover_image"
        />
        <div>
          <EditButton />
          <DeleteButton mutationMode="pessimistic" />
        </div>
      </Datagrid>
    </List>
  );
};

export default ProjectList;
