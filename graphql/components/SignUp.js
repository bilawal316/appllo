import React from "react";
import Link from "next/link";
import { useMutation } from "@apollo/client";
import { UserMutations } from "@/graphql/mutation";

function SignUp() {
  const [createUser, { loading, error, data }] = useMutation(UserMutations);
  if (loading) console.log(loading);
  if (error) console.log(error);
  if (data) console.log(data);
  const handleSubmit = async (e) => {
    e.preventDefault();
    await createUser({
      input: {
        username: "subhan",
        password: "1234556",
        confrmPassword: "1234556",
      },
    });
  };
  return (
    <div className="m-5">
      <h1 className="text-center text-3xl text-black">SignUp</h1>
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
          <div>
            <p>Confirm Password</p>
            <input
              className="bg-black text-white  w-80 p-2 rounded-md"
              placeholder="Confirm Password"
              type="password"
            />
          </div>
          <Link href="/login">
            <p>Login</p>
          </Link>
          <div>
            <button onClick={handleSubmit} type="submit" className="bg-black text-white w-32 mt-5 p-2 rounded-md">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
