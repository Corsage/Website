import { useStaticQuery, graphql } from 'gatsby';
import Experience from '../models/experience';

const useProjects = () => {
  const { projects } = useStaticQuery(
    graphql`
      {
        projects: allProjectsJson {
          edges {
            node {
              title
              image
              skills
              description
              link
            }
          }
        }
      }
    `
  );

  return projects.edges;
};

export default useProjects;
