import { useSelector } from 'react-redux';
import { selectData } from 'redux/selectors';

export const UserBlock = () => {
  const userData = useSelector(selectData);
  console.log('userData in UserBlock', userData);
  const {
    name,
    avatar_url,
    company,
    created_at,
    followers,
    following,
    location,
    bio,
    blog,
    twitter_username,
    public_repos,
    login,
  } = userData;
  return (
    <div>
      <div>
        <img alt="user avatar" src={avatar_url}></img>
        <h3>{name}</h3>
        <p>@{login}</p>
        <p>Joined {created_at}</p>
      </div>
      <p>{bio ?? 'This profile has no bio'}</p>
      <ul>
        <li>
          Repos <span>{public_repos}</span>
        </li>
        <li>
          Followers <span>{followers}</span>
        </li>
        <li>
          Following <span>{following}</span>
        </li>
      </ul>
      <ul>
        <li>{location}</li>
        <li>{blog}</li>
        <li>{twitter_username ?? 'Not Available'}</li>
        <li>{company}</li>
      </ul>
    </div>
  );
};

//avatar_url, company, created_at, followers, following, location, bio, blog, twitter_username
