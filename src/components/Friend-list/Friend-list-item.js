import PropTypes from 'prop-types';
import s from './Friend-list-item.module.css';
import styled from 'styled-components';

export default function FriendListItem({ avatar, name, isOnline }) {
  const Status = styled.span`
    background-color: green;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 20px;
  `;

  const StatusOff = styled(Status)`
    background-color: red;
  `;
  return (
    <li className={s.item}>
      {isOnline ? <Status></Status> : <StatusOff></StatusOff>}
      <img className={s.avatar} src={avatar} alt="{name}" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
