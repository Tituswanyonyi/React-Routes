import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import '../index.css'; // Make sure this is imported if not already

function Layout() {
    return (
        <div className="app-container">
            <header>
                <nav>
                    <Link to="/">Home</Link> |{" "}
                    <Link to="/about">About</Link> |{" "}
                    <Link to="/contact">Contact</Link>
                </nav>
            </header>

            <main>
                <Outlet />
            </main>

            <footer>
                <p>&copy; 2025 My React App</p>
            </footer>
        </div>
    );
}

export default Layout;
