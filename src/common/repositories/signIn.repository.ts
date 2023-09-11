import client from "./client";

export interface signInDTO {
  email: string;
  password: string;
}

export const signIn = async ({email, password}: signInDTO) => {
  const {data} = await client.post<any>("/auth/signin", {
    email,
    password,
  });
  console.log("data", data);
  return data;
};
