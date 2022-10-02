import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
import {faCalendarWeek} from  "@fortawesome/free-solid-svg-icons"
import {faCalendarCheck} from  "@fortawesome/free-solid-svg-icons"
import {faChalkboard} from "@fortawesome/free-solid-svg-icons";
import {faChalkboardTeacher} from "@fortawesome/free-solid-svg-icons";
import styles from './Classroom.module.css'



export default function ClassroomHome() {
    /*
        메인 수업 홈페이지에 학생들은
        수업 차수 vs 요약 정리 두가지로 보여줄 수 있지만 우선은 요약 정리로

        출석
            - 수업 차수를 바꾸는 기능
            - 대면, 비대면인지 알려주는 기능
            - 출석 여부에 대해서 알려주는 기능
            - 전자 출석으로 바로 넘어가는 기능
        시험
            - 몇번의 시험이 있는지 알려줌, 만약 시험 성적이 나왔다면, 2차 비밀번호를 설정하면 볼수 있다.
            - 시험의 이의 신청 버튼
            - 시험이 있을 시에는 장소와 시간 등을 표기해줌
        과제
            - 진행 예정, 진행중, 마감 등의 섹션을 나누고 그에 나의 제출 정보

     */

    return(
        <>
            <div className={styles.classroom}>
                {/*
                **************************************************
                ********************* 출석 ************************
                **************************************************
                */}
                <div className="mt-3">
                    <div>
                        <p className="text-2xl">수업 명</p>
                    </div>
                </div>
                <div className="grid grid-cols-3">
                    <div className="w-80 h-96">
                        <div>
                            <div>
                                <p className="text-xl">출석</p>
                            </div>
                            <div className="rounded-xl border-2 w-80 h-720 mt-3 pt-3 grid grid-cols-2 drop-shadow-lg">
                                <div className="h-56 w-24 ml-6 mt-1 mb-3">
                                    <div className="pt-3 h-16 w-36 text-stone-700 bg-stone-100 rounded-l-xl">
                                        <FontAwesomeIcon className="text-3xl " icon={faCalendarWeek} />
                                        <p className="text-xs">주차</p>
                                    </div>
                                    <div className="pt-3 mt-3 h-16 text-stone-700 w-36 bg-stone-100 rounded-l-xl">
                                        <FontAwesomeIcon className="text-3xl" icon={faChalkboard}/>
                                        <p className="text-xs">수업 방식</p>
                                    </div>
                                    <div>
                                        <div className="pt-3 mt-3 h-16 text-stone-700 w-36 bg-stone-100 rounded-l-xl">
                                            <FontAwesomeIcon className="text-3xl" icon={faCalendarCheck}/>
                                            <p className="text-xs">출석 여부</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-36 h-56 mr-3 mt-1">
                                    <div className="pt-3  pr-3 h-16 m-auto w-50 bg-stone-100 rounded-r-xl">
                                        <div className="mb-1 text-base font-medium dark:text-black">3주차</div>
                                        <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                                            <div className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-200" style={{width: '45%'}}></div>
                                        </div>
                                    </div>
                                    <div className="mt-3 h-16 w-36 m-auto bg-stone-100 rounded-r-xl">
                                        <div className="h-16 pt-3 bg-blue-100 text-blue-800 rounded dark:bg-blue-200 dark:text-blue-800">
                                            <FontAwesomeIcon className="text-3xl" icon={faChalkboardTeacher}/>
                                            <p className="text-xs">대면</p>
                                        </div>
                                    </div>
                                    <div className="mt-3 h-16 w-36 m-auto bg-stone-100 rounded-r-xl">
                                        <button type="button" className="mt-4 ml-3 text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-1.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">
                                            출석
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*
                    **************************************************
                    ********************* 과제 ************************
                    **************************************************
                    */}
                    <div className="grid grid-cols-3">
                        <div className="w-80 h-96">
                            <div>
                                <div>
                                    <p className="text-xl">과제</p>
                                </div>
                                <div className="rounded-xl border-2 w-80 h-720 mt-3 pt-3 grid grid-cols-3 drop-shadow-lg">
                                    <div className="h-56 w-24 ml-6 mt-1 mb-3">
                                        <div className="pt-3 h-16 w-14 text-stone-700 bg-stone-100 rounded-xl">
                                            <FontAwesomeIcon className="text-3xl " icon={faCalendarWeek} />
                                            <p className="text-xs">진행 예정</p>
                                        </div>
                                        <div className="pt-3 mt-3 h-16 text-stone-700 w-14 bg-stone-100 rounded-xl">
                                            <FontAwesomeIcon className="text-3xl" icon={faChalkboard}/>
                                            <p className="text-xs">진행 중</p>
                                        </div>
                                        <div>
                                            <div className="pt-3 mt-3 h-16 text-stone-700 w-14 bg-stone-100 rounded-xl">
                                                <FontAwesomeIcon className="text-3xl" icon={faCalendarCheck}/>
                                                <p className="text-xs">완료</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-36 h-56 mr-3 mt-1">
                                        <div className="pt-3 pr-3 pl-3 h-16 m-auto w-48 bg-stone-100 rounded-xl">
                                            <div className="mb-1 text-base font-medium dark:text-black">3주차</div>
                                            <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                                                <div className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-200" style={{width: '45%'}}></div>
                                            </div>
                                        </div>
                                        <div className="mt-3 h-16 w-48 m-auto bg-stone-100 rounded-xl">
                                            <div className="h-16 pt-3 bg-blue-100 text-blue-800 rounded dark:bg-blue-200 dark:text-blue-800">
                                                <FontAwesomeIcon className="text-3xl" icon={faChalkboardTeacher}/>
                                                <p className="text-xs">대면</p>
                                            </div>
                                        </div>
                                        <div className="mt-3 h-16 w-48 m-auto bg-stone-100 rounded-xl">
                                            <button type="button" className="mt-4 ml-3 text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-1.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">
                                                출석
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/*
                    **************************************************
                    ********************* 시험 ************************
                    **************************************************
                    */}
                    <div className="grid grid-cols-3">
                        <div className="w-80 h-96">
                            <div>
                                <div>
                                    <p className="text-xl">과제</p>
                                </div>
                                <div className="rounded-xl border-2 w-80 h-720 mt-3 pt-3 grid grid-cols-3 drop-shadow-lg">
                                    <div className="h-56 w-24 ml-6 mt-1 mb-3">
                                        <div className="pt-6 h-24 w-14 text-stone-700 bg-stone-100 rounded-xl">
                                            <FontAwesomeIcon className="text-3xl " icon={faCalendarWeek} />
                                            <p className="text-xs">진행 예정</p>
                                        </div>
                                        <div>
                                            <div className="pt-6 mt-3 h-24 text-stone-700 w-14 bg-stone-100 rounded-xl">
                                                <FontAwesomeIcon className="text-3xl" icon={faCalendarCheck}/>
                                                <p className="text-xs">완료</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-36 h-56 mr-3 mt-1">
                                        <div className="pt-6 pl-3 pr-3 h-24 m-auto w-48 bg-stone-100 rounded-xl">
                                            <div className="mb-1 text-base font-medium dark:text-black">3주차</div>
                                            <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                                                <div className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-200" style={{width: '45%'}}></div>
                                            </div>
                                        </div>
                                        <div className="mt-3 h-24 w-48 m-auto bg-stone-100 rounded-xl">
                                            <button type="button" className="mt-4 ml-3 text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-1.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">
                                                출석
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}