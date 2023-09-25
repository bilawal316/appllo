import React from "react";
import { gql, useQuery } from "@apollo/client";
import { GET_LOGIN } from "@/graphql/queries";
import Link from "next/link";
import { client } from "./Provider";

function Login() {
  // const { data } = useQuery(GET_LOGIN);

  const {} = client.query({
    query: gql`
      query signIn($userInput2: querryUser!) {
        user(input: $userInput2)
      }
    `,
  });

  //   if (loading) return <p>Loading...</p>;
  //   if (error) return <p>Error : {error.message}</p>;
  return (
    <div className="m-5">
      <h1 className="text-center text-3xl text-black">Login</h1>
      <form className="mt-5 ">
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
          <div>
            <p>Email</p>
            <input className="bg-black text-white mb-5 w-80 p-2 rounded-md" placeholder="Email" />
          </div>
          <div>
            <p>Password</p>
            <input className="bg-black text-white  w-80 p-2 rounded-md" placeholder="Password" type="password" />
          </div>
          <Link href="/signup">
            <p className="text-center"> create a account</p>
          </Link>
          <div>
            <button type="submit" className="bg-black text-white w-32 mt-5 p-2 rounded-md">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
