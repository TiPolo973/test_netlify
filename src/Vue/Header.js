import { Link } from 'react-router-dom';
import '../App.css';

export default function Header() {
  return (
    <div>
      <ol className='space'>
        <li><Link to="/signup"> Sign up</Link></li>
        <li><Link to="/signin"> Sign in</Link></li>
        <li><Link to="/test"> Test</Link></li>
      </ol>
    </div>
  );
}
