import { Link } from 'react-router-dom';
import classes from './Home.module.css';

const Home = () => {
  return (
    <div>
      <div className={classes.top}>
        <p>Welcome to Expense Tracker</p>
        <div className={classes.profile}>
            <p>Your Profile is incomplete <Link to={'/Profile'}><span>Complete Now</span></Link></p>
        </div>
      </div>
    </div>
  );
};

export default Home;
