// Задаем типизацию всех получаемых и отображаемых данных которые будем использовать везде


// Наши измененные названия получаемых из API парметров которые мы потом преобразуем в папке utils в
// файле extract-local-user.ts 
export type LocalGithubUser = {
    login:string,
    avatar:string,
    name:string,
    company:string,
    blog:string,
    location:string,
    bio:string,
    twitter:string,
    repos:number,
    followers:number,
    following:number,
    created:string
}


// Изначальные названия параметров и их типизация который приходят из API GH
export type GithubUser = {
    login:string,
    id:number,
    avatar_url:string,
    name:string,
    company:string,
    blog:string,
    location:string,
    bio:string,
    twitter_username:string,
    public_repos:number,
    followers:number,
    following:number,
    created_at:string
}

// типизация ошибки в строке поиска при условии отстутствия пользователя по поисковому запросу
export type GithubError = {
    message:string,
    documentation_url:string,
}