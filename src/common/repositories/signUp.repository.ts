import {PlayerModel} from "../models/player/player.model";
import {UserModel} from "../models/user/user.model";
import client from "./client";

export interface signUpDTO {
  username: string;

  email: string;

  password: string;

  player: PlayerModel;

  confirmPassword: string;
}

export const signUp = async (props: signUpDTO) => {
  const {data} = await client.post<UserModel>("/users", props);
  return data;
};
