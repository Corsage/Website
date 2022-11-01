import { useStaticQuery, graphql } from 'gatsby';
import Experience from '../models/experience';

const useExperiences = () => {
  const { experiences } = useStaticQuery(
    graphql`
      {
        experiences: allExperiencesJson {
          edges {
            node {
              title
              company
              logo
              skills
              description
            }
          }
        }
      }
    `
  );

  return experiences.edges;
};

export default useExperiences;
