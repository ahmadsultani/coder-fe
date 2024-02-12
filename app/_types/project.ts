export interface IProject {
  id: number;
  title: string;
  description: string;
  cover_image: {
    src: string;
  };
  images: {
    src: string;
  }[];
  division: string;
}

export interface IProjectParams {
  divisionId?: number;
  page: number;
  size: number;
}

export interface IProjectQueryParams {
  divisionId?: number;
  range: string;
}

export interface IProjectQuery {}

export interface IProjectBody {
  title: string;
  description: string;
  cover: string;
  images: string[];
}

export interface IProjectCreateData {
  projectId: number;
}

export interface IBestProject {
  id: number;
  title: string;
  description: string;
  cover_image: {
    src: string;
  };
}

export interface IBestProjectBody {
  project_id: number;
}
