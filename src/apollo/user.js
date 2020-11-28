import { gql } from "@apollo/client";

export const RegisterUser = gql`
  mutation Register($email: String!, $password: String!, $name: String!) {
    register(input: { username: $name, password: $password, email: $email }) {
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


export const getUser = gql`
query {
  users(sort: "username:asc") {
    id
    username
    name
  }
}
`