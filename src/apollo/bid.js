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

export const createBid = gql`
  mutation createBid(
    $amount: Float!
    $organization: ID
    $estTime: String!
    $availability: Date!
    $material: JSON!
    $labor: JSON!
    $miscExpense: JSON!
    $contactName: String!
    $phone: String!
    $license_number: String!
    $classType: String!
    $notes: String!
    $project: ID!
  ) {
    createBid(
      input: {
        data: {
          Amount: $amount
          organization: $organization
          estTime: $estTime
          availability: $availability
          material: $material
          labor: $labor
          miscExpenses: $miscExpense
          contactName: $contactName
          phone: $phone
          stateLicenseNumber: $license_number
          classType: $classType
          notes: $notes
          project: $project
        }
      }
    ) {
      bid {
        id
      }
    }
  }
`;
/*
{
  "notes": "Hello, World",
  "license_number": "PPR11722P",
  "material": "{data: [{name: 'brick1','cost': 500}, {name: 'brick2','cost': 1000}]}",
  "labor": "{data: [{name: 'brick1','cost': 500}, {name: 'brick2','cost': 1000}]}",
  "miscExpense": "{data: [{name: 'brick1','cost': 500}, {name: 'brick2','cost': 1000}]}",
  "contactName": "Rohit",
  "phone": "+91 999999999",
  "classType": "A Class",
  "organization": 1,
  "availability": "2020-12-01",
  "project": 1,
  "amount": 100000000000,
  "estTime": "20 Days"
}
*/
