import { gql } from "@apollo/client";

export const UserMutations = gql`
  mutation createUser($input: newUser!) {
    createUser(input: $input) {
      _id
      username
      password
    }
  }
`;
