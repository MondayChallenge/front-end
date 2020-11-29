import { gql } from '@apollo/client';

export const RegisterUser = gql`
  mutation Register($email: String!, $password: String!) {
    register(input: { username: $email, password: $password, email: $email }) {
      jwt
      user {
        id
      }
    }
  }
`;

export const getUserInfo = gql`
  query User($id: ID!) {
    user(id: $id) {
      username
      teamMemberOf {
        id
      }
    }
  }
`;

// mutation CreateRegister {
//   register (input: {email: "111@test.com",password: "123" ,username: "testname"}){
//    jwt
//    user{
//      id
//    }
//  }

// }

export const LoginUser = gql`
  mutation Login($email: String!, $password: String!) {
    login(input: { identifier: $email, password: $password }) {
      jwt
      user {
        id
        name
      }
    }
  }
`;

// mutation Login {
//   login(input:{identifier: "12345@test.com",password:"123"})
//   {
//     jwt
//     user{
//       id
//     }
//   }
// }

export const getCurrUser = gql`
  query {
    me {
      id
    }
  }
`;

export const GetAllUsers = gql`
  query {
    users(sort: "username:asc") {
      id
      username
      teamMemberOf {
        id
      }
    }
  }
`;

export const UpdateName = gql`
  mutation updateUser($userId: ID!, $name: String!) {
    updateUser(input: { where: { id: $userId }, data: { name: $name } }) {
      user {
        name
      }
    }
  }
`;
