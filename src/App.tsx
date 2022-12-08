import { Container } from 'components/Container';
import { Search } from 'components/Search';
import { TheHeader } from 'components/TheHeader';
import { defaultUser } from 'components/mock';
import { UserCard } from 'components/UserCard';
import { useState } from 'react';
import { GithubError, GithubUser, LocalGithubUser } from 'types';
import { isGithubUser } from 'utils/typeguards';
import { extractLocalUser } from 'utils/extract-local-user';
import React from 'react';

// создаем базовый URL по которому из API GH будет находиться информация о user'е
const BASE_URL = 'https://api.github.com/users/';

function App() {
  const [user, setUser] = useState<LocalGithubUser | null>(defaultUser);
  
// создаем fetch запрос с использованием базового URL с дополнением введенного нами username'а 
  const fetchUser = async (username: string) => {
    const url = BASE_URL + username;
    const res = await fetch (url);
    const user = await res.json() as GithubUser | GithubError;

    if(isGithubUser(user)){
      setUser(extractLocalUser(user));
    } else {
      setUser(null);
    }
  }
  
  return (    
      <Container>
        <TheHeader/>
        <Search hasError={!user} onSubmit={fetchUser} />
        {user && (< UserCard {...user} />)}
      </Container>
  );
}

export default App;
