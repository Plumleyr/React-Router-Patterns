import { NavLink } from 'react-router-dom';

const Nav = ({ dogs }) => {
  return (
    <nav>
      <ul>
        {dogs.map((d, idx) => (
          <li key={idx}>
            <NavLink 
              to={`/dogs/${d.name}`}
              className={({ isActive }) => isActive ? 'active' : undefined}
            >
              {d.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;