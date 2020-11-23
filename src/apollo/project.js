import { gql } from "@apollo/client";

export const AddProject = gql`
  mutation AddProposal {
    createProposal(input: { data: { Name: "Proposal 1" } }) {
      proposal {
        Name
      }
    }
  }
`;
