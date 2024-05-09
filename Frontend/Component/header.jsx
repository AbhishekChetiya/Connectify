import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const ButtonPage = () => {
    const [searchValue, setSearchValue] = useState('');
    const [islogin, setIslogin] = useState(false);
    const [getsearchuser, setGetSearchUser] = useState([]);
    const search = async () => {
        try {
            const response = await axios.get('http://localhost:3000/users/FindUser', {
                params: { search: searchValue }
            });
            
            setGetSearchUser(response.data.data);
        } catch (error) {
            console.error('Error searching for users:', error);
        }
    }
    function searchFunction() {
        search();
    };


    function debounce(callback, delay) {
        let timer
        return function () {
            clearTimeout(timer)
            timer = setTimeout(() => {
                callback();
            }, delay)
        }
    }

    const handleSearchChange = debounce(searchFunction, 1000);

    // Make sure to declare setSearchValue outside the function to avoid re-initializing it on each call
    const navigate = useNavigate();
    const searchclick = (id) => {
        setGetSearchUser([]);
        navigate(`/Profile/${id}`);
    
    }
    useEffect(() => {
        const userValue = localStorage.getItem("user");
        if (userValue) setIslogin(true);
    }, []);
    const handlevalue = (event) => {
        setSearchValue(event.target.value);
    };
    return (
        <div>
            <header className="flex items-center justify-between bg-white px-12 py-3 shadow-sm dark:bg-gray-950">
                <nav className="flex items-center space-x-16">
                    <div className="text-lg font-semibold text-gray-900 dark:text-gray-50">
                        Pata_Nahi
                    </div>
                    <div className="hidden space-x-16 md:flex">
                        {islogin ? <> <Link
                            to="/Profile"
                            className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                        >
                            Profile
                        </Link>
                            <Link
                                to="/Post"
                                className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                            >
                                Post
                            </Link>
                            <Link
                                to="/login"
                                className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                            >
                                Logout
                            </Link>
                        </>
                            : <><Link
                                to="/login"
                                className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                            >
                                Login
                            </Link>
                                <Link
                                    to="/register"
                                    className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                                >
                                    Register
                                </Link></>
                        }

                    </div>
                </nav>
                <div className="flex items-center space-x-4">
                    <form className="relative">

                        <input
                            className="h-9 w-[200px] rounded-md bg-gray-100 pl-10 text-sm focus:bg-white focus:outline-none dark:bg-gray-800 dark:text-gray-400 dark:focus:bg-gray-700"
                            placeholder="Search..."
                            type="text"
                            onChange={handlevalue}
                        />
                        <div onClick={handleSearchChange}> <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" /> </div>
                    </form>
                </div>
            </header>

            {getsearchuser.map((user) => (
                <div className="mt-4 max-h-[300px] overflow-y-auto" key={user._id} onClick={() => searchclick(user._id)}>
                    <div className="grid gap-4">
                        <div className="flex items-center gap-4">
                            <div className="h-10 w-10 space-x-10 mx-10">
                                <img alt="UserImg" src={user.Avatar} />
                            </div>
                            <div className="flex-1">
                                <h4 className="font-medium">{user.username}</h4>
                                <p className="text-sm text-gray-500 dark:text-gray-400">{user.FullName}</p>
                            </div>
                        </div>
                    </div>
                </div>))}

            < Outlet />
            <div className="flex flex-col">
                <main className="flex-1" />
                <footer className="bg-gray-900 py-6 text-center text-gray-400">
                    <div className="container mx-auto px-4">
                        <p className="text-sm">© 2024 Acme Inc. All rights reserved.</p>
                    </div>
                </footer>
            </div>
        </div >
    );
};

function SearchIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
        </svg>
    )
}
export default ButtonPage;


