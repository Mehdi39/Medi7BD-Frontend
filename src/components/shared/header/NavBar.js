import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon, LoginIcon } from '@heroicons/react/outline'
import React, { useState } from 'react'
import logo from '../../../img/logo.png'
import { Link } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'
import Dropdown from './Dropdown'
import SearchBar from './SearchBar'

const navigation = [
    { name: 'Pharmacy', to: '/pharmacy', current: true },
    // { name: 'Add_Medicine', to: '/addmedicine', current: true },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const NavBar = () => {
    const [isOpen, setisOpen] = useState(false);
    const { user, userSignOut } = useAuth();
    console.log(user.photoURL)

    return (
        <Disclosure as="nav" className=" container mx-auto">
            {({ open }) => (
                <>
                    <div className="max-w-8xl mx-auto px-2 sm:px-2 lg:px-2">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex-shrink-0 flex items-center">
                                    <Link to='/home'>
                                        <img
                                            className="hidden lg:block h-8 w-auto"
                                            src={logo}
                                            alt="Workflow"
                                        />
                                    </Link>
                                    <Link to='/' className="mx-3 text-black text-2xl ">Medi7BD</Link>

                                </div>
                                <div className="hidden sm:block sm:ml-6">
                                    <div className="flex">
                                        <SearchBar />
                                        {navigation.map((item) => (
                                            <Link
                                                key={item.name}
                                                to={item.to}
                                                className="px-3 py-2 rounded-md text-lg font-medium hover:underline "
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                        { user.email ? <Dropdown/> : ""}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <button
                                    type="button"
                                    className="bg-blue-400 p-1 rounded-full text-white hover:text-white focus:outline-none focus:ring-4 focus:ring-offset-4 focus:ring-offset-primaryColorLight focus:ring-white"
                                >
                                    <span className="sr-only">View notifications</span>
                                    <BellIcon className="p-1 h-10 w-10" aria-hidden="true" />
                                </button>

                                {/* Profile dropdown */}
                                <Menu as="div" className="ml-3 relative">
                                    <div>
                                        {
                                            user.email ? (
                                                <Menu.Button className="flex text-sm rounded-full focus:outline-none">
                                                    <span className="sr-only">Open user menu</span>
                                                    <img
                                                        className="h-12 w-12 rounded-full"
                                                        src={user.photoURL}
                                                        alt="" />
                                                </Menu.Button>
                                            ) : (
                                                <Link to='/login'>
                                                <button
                                                    type="button"
                                                    className="bg-blue-400 p-1 rounded-full text-white hover:text-white focus:outline-none focus:ring-4 focus:ring-offset-4 focus:ring-offset-primaryColorLight focus:ring-white"
                                                >
                                                    <span className="sr-only">View notifications</span>
                                                    <LoginIcon className="p-1 h-10 w-10" aria-hidden="true" />
                                                </button>
                                                </Link>
                                            )
                                        }
                                        {/* <Menu.Button className="bg-primaryColor flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                            <span className="sr-only">Open user menu</span>
                                            {
                                                user.email ? (
                                                    <img
                                                        className="h-8 w-8 rounded-full"
                                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                        alt="" />
                                                ) : (
                                                    <LoginIcon className="p-1 block h-10 w-10 text-white" aria-hidden="true" />
                                                )
                                            }
                                        </Menu.Button> */}
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="/"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Your Profile
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="/"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Settings
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <button
                                                        onClick={userSignOut}
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Sign out
                                                    </button>
                                                )}
                                            </Menu.Item>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block px-3 py-2 rounded-md text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}

export default NavBar