import client from "./client";

export interface signInDTO {
  usernameOrEmail: string;
  password: string;
}

export const signIn = async ({usernameOrEmail, password}: signInDTO) => {
  const {data} = await client.post<any>("/auth/signin", {
    usernameOrEmail,
    password,
  });
  console.log({data});
  return data;
};
