import PropTypes from 'prop-types';
import { Status, Friend, Avatar } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline, id }) => {
    return (
        <Friend className="item" key={id}>
            <Status className="status" isOnline={ isOnline }> </Status>
            <Avatar className="avatar" src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
        </Friend>)
}


FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
};