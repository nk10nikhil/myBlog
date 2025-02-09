import React from "react";
import { Container, Logo, LogoutBtn } from '../index.js';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {
    const authStatus = useSelector((state) => state.auth.status);
    const navigate = useNavigate();

    const navItems = [
        {
            name: 'Home',
            slug: "/",
            active: true
        },
        {
            name: "Login",
            slug: "/login",
            active: !authStatus,
        },
        {
            name: "Signup",
            slug: "/signup",
            active: !authStatus,
        },
        {
            name: "All Posts",
            slug: "/all-posts",
            active: authStatus,
        },
        {
            name: "Add Post",
            slug: "/add-post",
            active: authStatus,
        }
    ];

    return (
        <header className='py-3 shadow-lg bg-gradient-to-r from-gray-800 to-gray-900 mx-10 my-5 rounded-2xl'>
            <Container>
                <nav className='flex items-center justify-between'>
                    {/* Logo */}
                    <div className='flex-shrink-0'>
                        <Link to='/'>
                            <Logo width='70px' className="text-white" />
                        </Link>
                    </div>

                    {/* Navigation Items */}
                    <ul className='flex space-x-4'>
                        {navItems.map((item) =>
                            item.active ? (
                                <li key={item.name}>
                                    <button
                                        onClick={() => navigate(item.slug)}
                                        className='px-4 py-2 text-sm font-medium text-white bg-transparent rounded-lg hover:bg-purple-500 hover:text-white transition-colors duration-300 hover:cursor-pointer'
                                    >
                                        {item.name}
                                    </button>
                                </li>
                            ) : null
                        )}
                        {authStatus && (
                            <li>
                                <LogoutBtn className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors duration-300" />
                            </li>
                        )}
                    </ul>
                </nav>
            </Container>
        </header>
    );
};

export default Header;