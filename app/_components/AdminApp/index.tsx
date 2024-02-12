"use client";
import { Admin, Resource } from "react-admin";
import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";
import Division from "./Division";
import Project from "./Project";
import BestProject from "./BestProject";

export default function AdminApp() {
  return (
    <Admin
      dataProvider={dataProvider}
      title="Coder Master Admin"
      authProvider={authProvider}
      requireAuth
    >
      <Resource
        name="divisions"
        list={Division.list}
        create={Division.create}
        edit={Division.edit}
      />
      <Resource
        name="projects"
        list={Project.list}
        create={Project.create}
        edit={Project.edit}
        recordRepresentation="project"
      />
      <Resource
        name="best-projects"
        list={BestProject.list}
        create={BestProject.create}
        hasEdit={false}
      />
    </Admin>
  );
}
