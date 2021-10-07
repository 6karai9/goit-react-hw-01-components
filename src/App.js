import userData from './userData.json';
import friends from './friends.json';
import statisticalData from './statistical-data.json';
import transactions from './transactions.json';
import Section from './components/Section/Section';
import Profile from './components/Profile/Profile';
import FriendList from './components/FriendList/FriendList';
import Statistics from './components/Statistics/Statistics';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

export default function App() {
  return (
    <>
      <Section>
        <Profile
          name={userData.name}
          avatar={userData.avatar}
          tag={userData.tag}
          location={userData.location}
          followers={userData.stats.followers}
          views={userData.stats.views}
          likes={userData.stats.likes}
        />
      </Section>

      <Section>
        <Statistics statData={statisticalData} />
      </Section>

      <Section>
        <FriendList friends={friends} />
      </Section>

      <Section>
        <TransactionHistory transData={transactions} />
      </Section>
    </>
  );
}
