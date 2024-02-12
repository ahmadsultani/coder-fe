import {
  TextField,
  Datagrid,
  DeleteButton,
  EditButton,
  ListProps,
  List,
} from "react-admin";

const BestProjectList = (props: ListProps) => {
  return (
    <List {...props}>
      <Datagrid bulkActionButtons={false}>
        <TextField source="id" />
        <TextField source="title" />
        <TextField source="description" />
        <DeleteButton mutationMode="pessimistic" />
      </Datagrid>
    </List>
  );
};

export default BestProjectList;
