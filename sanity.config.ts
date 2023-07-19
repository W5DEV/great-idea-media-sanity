import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import schemas from './sanity/schemas';

const config = defineConfig({
  projectId: 'exteyodr',
  dataset: 'great-idea-media',
  title: 'Great Idea Media',
  apiVersion: '2023-07-19',
  basePath: '/admin',
  plugins: [deskTool()],
  schema: { types: schemas },
});

export default config;
