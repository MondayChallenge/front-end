import { gql } from '@apollo/client';
export const GetProject = gql`
  query bid($id: ID!) {
    bid(id: $id) {
      material
      labor
      classType
      contactName
      miscExpenses
      estTime
      organization {
        Name
        About
      }
      project {
        id
        Name
      }
    }
  }
`;
