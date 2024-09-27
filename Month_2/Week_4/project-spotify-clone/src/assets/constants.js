import { HiOutlineHashtag, HiOutlineHome, HiOutlineUserGroup } from 'react-icons/hi';

export const genres = [
  { title: 'Pop', value: 'pop' },
  { title: 'Dance', value: 'dance' },
  { title: 'Electronic', value: 'electronic' },
  { title: 'Alternative', value: 'alternative' },
  { title: 'Rock', value: 'rock' },
  { title: 'Latin', value: 'latin' },
  { title: 'Classical', value: 'classical' },
  { title: 'Country', value: 'country' },
  { title: 'House', value: 'house' },
];

export const links = [
  { name: 'Discover', to: '/', icon: HiOutlineHome },
  { name: 'Top Artists', to: '/top-artists', icon: HiOutlineUserGroup },
  { name: 'Top Charts', to: '/top-charts', icon: HiOutlineHashtag },
];
