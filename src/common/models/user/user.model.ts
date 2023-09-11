import {PlayerModel} from "../player/player.model";

export interface UserModel {
  id?: string;
  email: string;
  name: string;
  player?: PlayerModel;
}
