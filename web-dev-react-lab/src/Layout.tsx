import { Link, Outlet } from '@tanstack/react-router';
import { Route as indexRoute } from './routes/index';
import { Route as booksRoute } from './routes/books';
import { Route as aboutRoute } from './routes/about';

function Layout() {
  return (
    <div
      style={{
        fontFamily: 'arial',
      }}
    >
      <header
        style={{
          backgroundColor: 'darkslategrey',
          color: 'whitesmoke',
        }}
      >
        <h1>Babel's library</h1>
        <nav
          style={{
            display: 'flex',
            gap: '10px',
          }}
        >
          <Link to={indexRoute.to}>Home</Link>
          <Link to={booksRoute.to}>Books</Link>
          <Link to={aboutRoute.to}>About</Link>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}

export default Layout;
