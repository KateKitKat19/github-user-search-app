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
  AdditInfoList,
  AdditInfoItem,
  StyledLoginWrap,
} from './User.styled';
import {
  CompanyIcon,
  LocationIcon,
  TwitterIcon,
  WebsiteIcon,
} from 'components/Icons/UserInfoIcons';

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
          <StyledLoginWrap>
            <Title>{name ?? login}</Title>
            <Login>@{login}</Login>
          </StyledLoginWrap>
          <Text>Joined {formattedDate}</Text>
        </InfoList>
      </InformationWrap>
      <Bio>
        <p style={{ opacity: bio === null ? 0.5 : 1 }}>
          {bio ?? 'This profile has no bio'}
        </p>
      </Bio>
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
      <AdditInfoList>
        <AdditInfoItem
          style={{ opacity: location === null ? 0.5 : 1, gap: '19px' }}
        >
          <LocationIcon />
          {location ?? 'Not Available'}
        </AdditInfoItem>
        <AdditInfoItem style={{ opacity: blog === '' ? 0.5 : 1 }}>
          <WebsiteIcon />
          {blog !== '' ? (
            <a
              href={blog}
              target="_blank"
              rel="noreferrer noopener"
              style={{ fontSize: blog.length >= 25 ? '10px' : '15px' }}
            >
              {blog}
            </a>
          ) : (
            'Not Available'
          )}
        </AdditInfoItem>
        <AdditInfoItem style={{ opacity: twitter_username === null ? 0.5 : 1 }}>
          <TwitterIcon />
          {twitter_username !== null ? (
            <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
              @{twitter_username}
            </a>
          ) : (
            'Not Available'
          )}
        </AdditInfoItem>
        <AdditInfoItem style={{ opacity: company === null ? 0.5 : 1 }}>
          <CompanyIcon />
          {company ?? 'Not Available'}
        </AdditInfoItem>
      </AdditInfoList>
    </Wrapper>
  );
};
