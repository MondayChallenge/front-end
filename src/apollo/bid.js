import { gql } from "@apollo/client";
export const GetBid = gql`
  query bid($id: ID!) {
    bid(id: $id) {
      material
      labor
      classType
      contactName
      miscExpense
      estTime
      organization {
        name
        about
      }
      project {
        id
        name
      }
    }
  }
`;

export const GET_ALL_BIDS = gql`
  query GET_ALL_BIDS {
    bids {
      id
      amount
      published_at
      created_at
      contactName
      organization {
        name
        about
      }
      project {
        id
        name
        owner {
          id
          username
          name
        }
        architect {
          id
          username
          name
        }
        manager {
          id
          username
          name
          organization {
            name
          }
        }
        team {
          id
          username
          name
        }
        organization {
          name
          about
        }
      }
    }
  }
`;

export const CREATE_BID = gql`
  mutation createBid(
    $amount: Long
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
    $status: String!
  ) {
    createBid(
      input: {
        data: {
          amount: $amount
          organization: $organization
          estTime: $estTime
          availability: $availability
          material: $material
          labor: $labor
          miscExpense: $miscExpense
          contactName: $contactName
          phone: $phone
          license_number: $license_number
          classType: $classType
          notes: $notes
          project: $project
          status: $status
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
  "material": {data: [{'name': 'brick1','cost': 500}, {'name': 'brick2','cost': 1000}]},
  "labor": {data: [{'name': 'brick1','cost': 500}, {'name': 'brick2','cost': 1000}]},
  "miscExpense": {data: [{'name': 'brick1','cost': 500}, {'name': 'brick2','cost': 1000}]},
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

export const changeBidStatus = gql`
  mutation($bidId: ID!, $status: String!) {
    updateBid(input: { where: { id: $bidId }, data: { status: $status } }) {
      bid {
        id
        status
      }
    }
  }
`;

/*
{
  "bidId": 1,
  "status": "Awarded"
}
*/

export const getBidStatus = gql`
  query($bidId: ID!) {
    bid(id: $bidId) {
      status
    }
  }
`;

/*
{
  "bidId": 1
}
*/
