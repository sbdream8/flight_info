export default function Layout({ children }) {
    return (
      <div>
        <header>
          <h1>Flight Info</h1>
        </header>
        <main>{children}</main>
        <footer>
          <p>Flight Info &copy; 2024</p>
        </footer>
      </div>
    );
  }
  