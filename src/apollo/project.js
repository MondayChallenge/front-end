import { gql } from "@apollo/client";

export const AddProject = gql`
  mutation createProject(
    $organization: ID!
    $category: String!
    $name: String!
    $description: String!
    $address: String!
    $endDate: Date!
    $minBid: Float!
    $representatives: [ID]
    $estTime: String!
    $invitations: [ID]
    $status: String!
    $email: String!
    $phone: String!
    $startDate: Date
    $projectType: String!
    $type: String!
    $numBuildings: String!
    $numStories: String!
    $maxBudgetRange: Float!
    $city: String!
    $state: String!
    $country: String!
    $zip: String!
    $squareFootage: String!
    $owner: ID!
    $architect: ID!
    $manager: ID!
    $team: [ID]
    $published_at: DateTime!
  ) {
    createProject(
      input: {
        data: {
          organization: $organization
          category: $category
          name: $name
          description: $description
          address: $address
          endDate: $endDate
          minBid: $minBid
          representatives: $representatives
          estTime: $estTime
          invitations: $invitations
          status: $status
          email: $email
          phone: $phone
          startDate: $startDate
          projectType: $projectType
          type: $type
          numBuildings: $numBuildings
          numStories: $numStories
          maxBudgetRange: $maxBudgetRange
          city: $city
          state: $state
          country: $country
          zip: $zip
          squareFootage: $squareFootage
          owner: $owner
          architect: $architect
          manager: $manager
          team: $team
          published_at: $published_at
        }
      }
    ) {
      project {
        id
      }
    }
  }
`;
/*
{
  "zip": "335513",
	"published_at": "2007-12-03T10:15:30Z",
  "status": "Available",
  "endDate": "2020-12-01",
  "minBid": 133.22,
  "city": "HMH",
  "name": "Ha Ha LOL",
  "numStories": "2000",
  "manager": 1,
  "category": "Office",
  "team": [1],
  "estTime": "2 Days",
  "representatives": 1,
  "description": "This is a test Project",
  "email": "admin@admin.com",
  "invitations": [1],
  "type": "Whatever",
  "organization": 1,
  "numBuildings": "1",
  "country": "India",
  "architect": 1,
  "address": "JE, Main Market, MHH",
  "squareFootage": "100",
  "maxBudgetRange": 10000,
  "owner": 1,
  "state": "Under Bidding",
  "startDate": "2020-11-20",
  "phone": "+91 9999999999",
  "projectType": "Lol Lol"
}
*/

export const getProjects = gql`
  query($id: ID) {
    projects(sort: "endDate:asc", where: { representatives_in: $id }) {
      id
      address
      city
      zip
      state
      estTime
      minBid
      description
      name
      owner {
        name
      }
      status
      endDate
      published_at
      invitations {
        id
      }
      bids {
        id
      }
    }
  }
`;

// export const getProjectsBids = gql`
//   query($id: ID) {
//     projects(sort: "endDate:asc", where: { representatives_in: $id }) {
//       id
//       address
//       city
//       zip
//       state
//       estTime
//       minBid
//       description
//       name
//       owner {
//         name
//       }
//       status
//       endDate
//       published_at
//       invitations {
//         id
//       }
//       bids {
//         id
//         amount
//         published_at
//         created_at
//         contactName
//         status
//         organization{
//           id
//           name
//         }
//       }
//     }
//   }
// `;
/*
{
  "id": "1"
}
*/

export const getProject = gql`
  query($id: ID!) {
    project(id: $id) {
      name
      address
      city
      state
      zip
      id
      estTime
      maxBudgetRange
      description
      representatives {
        id
      }
      team {
        name
        username
      }
      owner {
        name
        username
      }
      architect {
        name
        username
      }
      manager {
        name
        username
      }
      status
      email
      phone
      type
      numBuildings
      numStories
      squareFootage
      bids {
        amount
        classType
        organization {
          name
          owner {
            name
            username
          }
        }
        status
      }
    }
  }
`;

export const getTenProposals = gql`
  query {
    projects( sort: "published_at:asc") {
      name
      address
      city
      state
      zip
      id
      estTime
      maxBudgetRange
      description
      team {
        username
      }
      owner {
        username
      }
      architect {
        username
      }
      manager {
        username
      }
      status
      email
      phone
      type
      endDate
      numBuildings
      numStories
      squareFootage
      bids {
        amount
        classType
        organization {
          name
          owner {
            username
          }
        }
      }
    }
  }
`;
