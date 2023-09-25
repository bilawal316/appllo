import { gql } from "@apollo/client";

export const GET_LOGIN = gql`
  query signIn($userInput2: queryUser!) {
    user(input: $userInput2)
  }

  query validateToken($token: String!) {
    validate(token: $token) {
      _id
      username
    }
  }
`;
