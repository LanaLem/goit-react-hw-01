import PropTypes from 'prop-types';
import { Card, Avatar, ProfileInfo, InfoItems, FotoProfile, Name, Location, Tag, Label, Quantity } from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats:{likes, followers, views} }) => {
  return (
    <Card className="profile">
    <FotoProfile className="description">
      <Avatar
        src={avatar}
        alt={username}
        className="avatar"
      />
      <Name className="name">{username}</Name>
      <Tag className="tag">@{tag}</Tag>
      <Location className="location">{location}</Location>
    </FotoProfile>

    <ProfileInfo className="stats">
      <InfoItems>
        <Label className="label">Followers</Label>
        <Quantity className="quantity">{followers}</Quantity>
      </InfoItems>
      <InfoItems>
        <Label className="label">Views</Label>
        <Quantity className="quantity">{views}</Quantity>
      </InfoItems>
      <InfoItems>
        <Label className="label">Likes</Label>
        <Quantity className="quantity">{likes}</Quantity>
      </InfoItems>
    </ProfileInfo>
  </Card> 
  )
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};