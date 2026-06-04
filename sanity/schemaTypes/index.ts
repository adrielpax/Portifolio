import { type SchemaTypeDefinition } from "sanity";
import { post } from "./post";
import { project } from "./project";
import { certification } from "./certification";
import { championProject } from "./championProject";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, project, certification, championProject],
};
