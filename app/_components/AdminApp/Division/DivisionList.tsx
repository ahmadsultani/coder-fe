import {
  TextField,
  Datagrid,
  DeleteButton,
  EditButton,
  ListProps,
  List,
  DateField,
} from "react-admin";

const DivisionList = (props: ListProps) => {
  return (
    <List {...props}>
      <Datagrid bulkActionButtons={false} rowClick="edit">
        <TextField source="id" />
        <TextField source="name" />
        <div>
          <EditButton />
          <DeleteButton mutationMode="pessimistic" />
        </div>
      </Datagrid>
    </List>
  );
};

export default DivisionList;
