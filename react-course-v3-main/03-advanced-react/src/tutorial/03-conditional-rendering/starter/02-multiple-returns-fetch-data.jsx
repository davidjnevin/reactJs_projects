import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);



  useEffect(() => {
    const fetchUser = async () => {

      try {
        const resp = await fetch(url);
        if (!resp.ok) {
          throw new Error('Could not fetch the data for that resource');
          setIsLoading(false);
          setIsError(error);
        }
        const user = await resp.json();
        setUser(user);
        setIsLoading(false);
      } catch (error) {
       setIsError(true);
       console.log(error);
      }
    };
    fetchUser();
  },[]);

  if  (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>There was an error loading that resource.</h2>;
  }
const {avatar_url, name, company, bio} = user;
  return <div>
    <img style={{ width: '150px', borderRadius: '25px' }} src={avatar_url} alt={name} />
    <h2>{name}</h2>
    <h4>Works at {company}</h4>
    <p>{bio}</p>
    </div>
};
export default MultipleReturnsFetchData;
