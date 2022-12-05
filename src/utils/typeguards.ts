// тайп гуард - дающий понимание что это именно данные приходящие из API GH по наличию параметра id
// в приходящий данных по user'у

import { GithubUser } from "types";

export const isGithubUser = (user: any): user is GithubUser => 'id' in user;