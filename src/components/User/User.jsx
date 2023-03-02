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

  const twitterBaseUrl = 'https://twitter.com/';
  const twitterUrl = `${twitterBaseUrl}${twitter_username}`;

  return (
    <div>
      <div>
        <img alt="user avatar" src={avatar_url}></img>
        <h3>{name ?? login}</h3>
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
        <li>{location ?? 'Not Available'}</li>
        <li>
          {blog !== null ? (
            <a href={blog} target="_blank" rel="noreferrer noopener">
              {blog}
            </a>
          ) : (
            'Not Available'
          )}
        </li>
        <li>
          {twitter_username !== null ? (
            <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
              @{twitter_username}
            </a>
          ) : (
            'Not Available'
          )}
        </li>
        <li>{company ?? 'Not Available'}</li>
      </ul>
    </div>
  );
};

//avatar_url, company, created_at, followers, following, location, bio, blog, twitter_username
