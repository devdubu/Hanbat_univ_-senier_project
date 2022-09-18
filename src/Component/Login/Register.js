import React from 'react';
import styles from './Register.module.css'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Register() {
    return(
        <div className={styles.register}>

            <h1 className="text-4xl">회원 가입</h1>

            <div className="flex">
                <div className="flex-1 "><h3 className="text-2xl ml-auto w-40">아이디(이메일)</h3></div>
                <div className="flex-1"><input type="email" className="w-64 h-8 mr-20"/></div>
            </div>

            <div className="flex">
                <div className="flex-1 "><h3 className="text-2xl ml-auto w-40">비밀번호</h3></div>
                <div className="flex-1"><input type="password" className="w-64 h-8 mr-20"/></div>
            </div>

            <div className="flex">
                <div className="flex-1 "><h3 className="text-2xl ml-auto w-40">비밀번호 확인</h3></div>
                <div className="flex-1"><input type="password" className="w-64 h-8 mr-20"/></div>
            </div>

            <div className="flex">
                <div className="flex-1">
                    <h3 className="text-2xl w-40 ml-auto">직급</h3>
                </div>
                <div className="flex-1">
                    <Menu as="div" className="relative inline-block text-left">
                        <div className="w-32 mr-20">
                            <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
                                Options
                                <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                            </Menu.Button>
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
                            <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div className="py-1">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="#"
                                                className={classNames(
                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                    'block px-4 py-2 text-sm'
                                                )}
                                            >
                                                Account settings
                                            </a>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="#"
                                                className={classNames(
                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                    'block px-4 py-2 text-sm'
                                                )}
                                            >
                                                Support
                                            </a>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <a
                                                href="#"
                                                className={classNames(
                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                    'block px-4 py-2 text-sm'
                                                )}
                                            >
                                                License
                                            </a>
                                        )}
                                    </Menu.Item>
                                    <form method="POST" action="#">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <button
                                                    type="submit"
                                                    className={classNames(
                                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                        'block w-full px-4 py-2 text-left text-sm'
                                                    )}
                                                >
                                                    Sign out
                                                </button>
                                            )}
                                        </Menu.Item>
                                    </form>
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
            </div>



        </div>
    )
}