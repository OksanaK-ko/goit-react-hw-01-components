import Profile from './components/Profile/Profile';
import user from './user.json';

import Statistics from './components/Statistics/Statistics';
import statisticalData from './statistical-data.json';

import FriendList from './components/Friend-list/Friend-list';
import friends from './friends.json';

import TransactionHistory from './components/Transaction-history/Transaction-history';
import transactions from './transactions.json';

import Container from './components/Container/Container';
export default function App() {
  return (
    <div>
      <Container>
        <Profile
          avatar={user.avatar}
          name={user.name}
          tag={user.tag}
          location={user.location}
          stats={user.stats}
        />
      </Container>
      <Container>
        <Statistics title="Upload stats" stats={statisticalData} />
        <Statistics stats={statisticalData} />
      </Container>
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
}
