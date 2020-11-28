import { gql } from "@apollo/client";

export const RegisterUser = gql`
  mutation Register($email: String!, $password: String!, $name: String!) {
    register(
      input: {
        username: $email
        password: $password
        email: $email
        name: $name
      }
    ) {
      jwt
      user {
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
      name
    }
  }
`;
