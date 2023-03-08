import { useSelector } from 'react-redux';
import { selectData } from 'redux/selectors';
import {
  Wrapper,
  InformationWrap,
  UserImage,
  Title,
  InfoList,
  Login,
  Text,
  Bio,
  StatsList,
  StatsItem,
  StatsNumbers,
} from './User.styled';
export const UserBlock = () => {
  const userData = useSelector(selectData);
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

  const dateObj = new Date(created_at);
  const options = { dateStyle: 'medium' };
  const formattedDate = dateObj.toLocaleDateString('en-US', options);

  return (
    <Wrapper>
      <InformationWrap>
        <UserImage alt="user avatar" src={avatar_url}></UserImage>
        <InfoList>
          <Title>{name ?? login}</Title>
          <Login>@{login}</Login>
          <Text>Joined {formattedDate}</Text>
        </InfoList>
      </InformationWrap>
      <Bio>{bio ?? 'This profile has no bio'}</Bio>
      <StatsList>
        <StatsItem>
          Repos <StatsNumbers>{public_repos}</StatsNumbers>
        </StatsItem>
        <StatsItem>
          Followers <StatsNumbers>{followers}</StatsNumbers>
        </StatsItem>
        <StatsItem>
          Following <StatsNumbers>{following}</StatsNumbers>
        </StatsItem>
      </StatsList>
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
    </Wrapper>
  );
};
