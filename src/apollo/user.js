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

const LoginUser = gql`
  mutation Login($email: String!, $password: String!) {
    login(input: { password: $password, identifier: $email }) {
      jwt
      user {
        id
      }
    }
  }
`;
