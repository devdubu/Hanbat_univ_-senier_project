import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import profile from "../../public/profile.jpeg"
import {faPenToSquare} from "@fortawesome/free-regular-svg-icons/faPenToSquare";
import {faSquareCheck} from "@fortawesome/free-regular-svg-icons";
import {faSquare} from "@fortawesome/free-regular-svg-icons";
import styles from './Classroom.module.css'
import ClassroomAttendance from "./ClassroomAttendance";
import NavBar from './NavBar'



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
    const [anttendModal, setAnttendModal] = useState(false);


    return(
        <>
            {/* 상단 메뉴 바*/}
            <NavBar/>

            <div className={styles.classroom}>
                {/*
                **************************************************
                ******************* 진행 예정 **********************
                **************************************************
                */}
                <div className="grid grid-cols-2 relative z-20">

                    <div className="w-80 h-96 m-auto">
                        <div>
                            <div className="mt-10 bg-gray-300 rounded-t pt-2 pb-2">
                                <p className="text-xl text-gray-50">진행 예정</p>
                            </div>
                            <div className="rounded-b border-2 w-80 h-720 pt-3 grid grid-cols-3 drop-shadow-lg">
                                <div className="h-56 w-24 ml-6 mt-1 mb-3">
                                    <div className="pt-3 h-16 w-14 text-stone-700 bg-stone-100 rounded">
                                        <FontAwesomeIcon className="text-3xl " icon={faSquare} />
                                        <p className="text-xs">3주차</p>
                                    </div>
                                    <div className="pt-3 mt-3 h-16 text-stone-700 w-14 bg-stone-100 rounded">
                                        <FontAwesomeIcon className="text-3xl" icon={faSquare}/>
                                        <p className="text-xs">3주차</p>
                                    </div>
                                    <div>
                                        <div className="pt-3 mt-3 h-16 text-stone-700 w-14 bg-stone-100 rounded">
                                            <FontAwesomeIcon className="text-3xl" icon={faSquare}/>
                                            <p className="text-xs">3주차</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-36 h-56 mr-3 mt-1">
                                    <div className="pr-3 h-16 m-auto w-48 bg-stone-100 rounded grid grid-cols-3">
                                        <div className="w-12 h-full pt-5 mb-1 border-r-2 bg-red-100 text-red-800 font-semibold rounded-l">미제출</div>
                                        <div className="w-32">
                                            <div className="h-5">
                                                <p>2022.08.02 ~</p>
                                            </div>
                                            <div className="grid grid-cols-2">
                                                <div className="mt-2">
                                                    <button className="mt-1 w-14 py-1 text-xs w-full bg-gray-500 hover:bg-gray-700 text-white font-bold rounded">자세히</button>
                                                </div>
                                                <div>
                                                    <button className="mt-3 text-xs w-full py-1 bg-blue-500 text-white font-bold rounded opacity-50 cursor-not-allowed">과제제출</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pr-3 h-16 m-auto w-48 bg-stone-100 rounded grid grid-cols-3 mt-3">
                                        <div className="w-12 h-full pt-5 mb-1 border-r-2 bg-red-100 text-red-800 font-semibold rounded-l">미제출</div>
                                        <div className="w-32">
                                            <div className="h-5">
                                                <p>2022.08.02 ~</p>
                                            </div>
                                            <div className="grid grid-cols-2">
                                                <div className="mt-2">
                                                    <button className="mt-1 w-14 py-1 text-xs w-full bg-gray-500 hover:bg-gray-700 text-white font-bold rounded">자세히</button>
                                                </div>
                                                <div>
                                                    <button className="mt-3 text-xs w-full py-1 bg-blue-500 text-white font-bold rounded opacity-50 cursor-not-allowed">과제제출</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pr-3 h-16 m-auto w-48 bg-stone-100 rounded grid grid-cols-3 mt-3">
                                        <div className="w-12 h-full pt-5 mb-1 border-r-2 bg-red-100 text-red-800 font-semibold rounded-l">미제출</div>
                                        <div className="w-32">
                                            <div className="h-5">
                                                <p>2022.08.02 ~</p>
                                            </div>
                                            <div className="grid grid-cols-2">
                                                <div className="mt-2">
                                                    <button className="mt-1 w-14 py-1 text-xs w-full bg-gray-500 hover:bg-gray-700 text-white font-bold rounded">자세히</button>
                                                </div>
                                                <div>
                                                    <button className="mt-3 text-xs w-full py-1 bg-blue-500 text-white font-bold rounded opacity-50 cursor-not-allowed">과제제출</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*
                    **************************************************
                    ********************* 진행 중 ***********************
                    **************************************************
                    */}
                        <div className="w-80 h-96 m-auto">
                            <div>
                                <div className="mt-10 bg-blue-300 rounded-t pt-2 pb-2">
                                    <p className="text-xl text-gray-50">진행중</p>
                                </div>
                                <div className="rounded-b border-2 w-80 h-720 pt-3 grid grid-cols-3 drop-shadow-lg">
                                    <div className="h-56 w-24 ml-6 mt-1 mb-3">
                                        <div className="pt-3 h-16 w-14 text-stone-700 bg-stone-100 rounded">
                                            <FontAwesomeIcon className="text-3xl " icon={faPenToSquare} />
                                            <p className="text-xs">3주차</p>
                                        </div>
                                        <div className="pt-3 mt-3 h-16 text-stone-700 w-14 bg-stone-100 rounded">
                                            <FontAwesomeIcon className="text-3xl" icon={faPenToSquare}/>
                                            <p className="text-xs">3주차</p>
                                        </div>
                                        <div>
                                            <div className="pt-3 mt-3 h-16 text-stone-700 w-14 bg-stone-100 rounded">
                                                <FontAwesomeIcon className="text-3xl" icon={faPenToSquare}/>
                                                <p className="text-xs">3주차</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-36 h-56 mr-3 mt-1">
                                        <div className="pr-3 h-16 m-auto w-48 bg-stone-100 rounded grid grid-cols-3">
                                            <div className="w-12 h-full pt-5 mb-1 border-r-2 bg-red-100 text-red-800 font-semibold rounded-l">미제출</div>
                                            <div className="w-32">
                                                <div className="h-5">
                                                    <p>2022.08.02 ~</p>
                                                </div>
                                                <div className="grid grid-cols-2">
                                                    <div className="mt-2">
                                                        <button className="mt-1 w-14 py-1 text-xs w-full bg-gray-500 hover:bg-gray-700 text-white font-bold rounded">자세히</button>
                                                    </div>
                                                    <div>
                                                        <button className="mt-3 text-xs w-full py-1 text-white font-bold rounded bg-blue-500 hover:bg-blue-700">과제제출</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pr-3 h-16 m-auto w-48 bg-stone-100 rounded grid grid-cols-3 mt-3">
                                            <div className="w-12 h-full pt-5 mb-1 border-r-2 bg-red-100 text-red-800 font-semibold rounded-l">미제출</div>
                                            <div className="w-32">
                                                <div className="h-5">
                                                    <p>2022.08.02 ~</p>
                                                </div>
                                                <div className="grid grid-cols-2">
                                                    <div className="mt-2">
                                                        <button className="mt-1 w-14 py-1 text-xs w-full bg-gray-500 hover:bg-gray-700 text-white font-bold rounded">자세히</button>
                                                    </div>
                                                    <div>
                                                        <button className="mt-3 text-xs w-full py-1 text-white font-bold rounded bg-blue-500 hover:bg-blue-700">과제제출</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pr-3 h-16 m-auto w-48 bg-stone-100 rounded grid grid-cols-3 mt-3">
                                            <div className="w-12 h-full pt-5 mb-1 border-r-2 bg-red-100 text-red-800 font-semibold rounded-l">미제출</div>
                                            <div className="w-32">
                                                <div className="h-5">
                                                    <p>2022.08.02 ~</p>
                                                </div>
                                                <div className="grid grid-cols-2">
                                                    <div className="mt-2">
                                                        <button className="mt-1 w-14 py-1 text-xs w-full bg-gray-500 hover:bg-gray-700 text-white font-bold rounded">자세히</button>
                                                    </div>
                                                    <div>
                                                        <button className="mt-3 text-xs w-full py-1 text-white font-bold rounded bg-blue-500 hover:bg-blue-700">과제제출</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    {/*
                    **************************************************
                    ********************* 마감 ************************
                    **************************************************
                    */}
                    <div className="w-80 h-96 m-auto">
                        <div>
                            <div className="mt-10 bg-red-300 rounded-t pt-2 pb-2">
                                <p className="text-xl text-gray-50">마감</p>
                            </div>
                            <div className="rounded-b border-2 w-80 h-720 pt-3 grid grid-cols-3 drop-shadow-lg">
                                <div className="h-56 w-24 ml-6 mt-1 mb-3">
                                    <div className="pt-3 h-16 w-14 text-stone-700 bg-stone-100 rounded">
                                        <FontAwesomeIcon className="text-3xl " icon={faSquareCheck} />
                                        <p className="text-xs">3주차</p>
                                    </div>
                                    <div className="pt-3 mt-3 h-16 text-stone-700 w-14 bg-stone-100 rounded">
                                        <FontAwesomeIcon className="text-3xl" icon={faSquareCheck}/>
                                        <p className="text-xs">3주차</p>
                                    </div>
                                    <div>
                                        <div className="pt-3 mt-3 h-16 text-stone-700 w-14 bg-stone-100 rounded">
                                            <FontAwesomeIcon className="text-3xl" icon={faSquareCheck}/>
                                            <p className="text-xs">3주차</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-36 h-56 mr-3 mt-1">
                                    <div className="pr-3 h-16 m-auto w-48 bg-stone-100 rounded grid grid-cols-3">
                                        <div className="w-12 h-full pt-5 mb-1 border-r-2 bg-green-100 text-green-800 font-semibold rounded-l">완료</div>
                                        <div className="w-32">
                                            <div className="h-5">
                                                <p>2022.08.02 ~</p>
                                            </div>
                                            <div className="grid grid-cols-2">
                                                <div className="mt-2">
                                                    <button className="mt-1 w-14 py-1 text-xs w-full bg-gray-500 hover:bg-gray-700 text-white font-bold rounded">자세히</button>
                                                </div>
                                                <div>
                                                    <button className="mt-3 text-xs w-full py-1 bg-blue-500 text-white font-bold rounded opacity-50 cursor-not-allowed">과제제출</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pr-3 h-16 m-auto w-48 bg-stone-100 rounded grid grid-cols-3 mt-3">
                                        <div className="w-12 h-full pt-5 mb-1 border-r-2 bg-green-100 text-green-800 font-semibold rounded-l">완료</div>
                                        <div className="w-32">
                                            <div className="h-5">
                                                <p>2022.08.02 ~</p>
                                            </div>
                                            <div className="grid grid-cols-2">
                                                <div className="mt-2">
                                                    <button className="mt-1 w-14 py-1 text-xs w-full bg-gray-500 hover:bg-gray-700 text-white font-bold rounded">자세히</button>
                                                </div>
                                                <div>
                                                    <button className="mt-3 text-xs w-full py-1 bg-blue-500 text-white font-bold rounded opacity-50 cursor-not-allowed">과제제출</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pr-3 h-16 m-auto w-48 bg-stone-100 rounded grid grid-cols-3 mt-3">
                                        <div className="w-12 h-full pt-5 mb-1 border-r-2 bg-red-100 text-red-800 font-semibold rounded-l">미제출</div>
                                        <div className="w-32">
                                            <div className="h-5">
                                                <p>2022.08.02 ~</p>
                                            </div>
                                            <div className="grid grid-cols-2">
                                                <div className="mt-2">
                                                    <button className="mt-1 w-14 py-1 text-xs w-full bg-gray-500 hover:bg-gray-700 text-white font-bold rounded">자세히</button>
                                                </div>
                                                <div>
                                                    <button className="mt-3 text-xs w-full py-1 bg-blue-500 text-white font-bold rounded opacity-50 cursor-not-allowed">과제제출</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*
                    **************************************************
                    ********************* 연장 ************************
                    **************************************************
                    */}
                    <div className="w-80 h-96 m-auto">
                        <div>
                            <div className="mt-10 bg-blue-300 rounded-t pt-2 pb-2">
                                <p className="text-xl text-gray-50">연장</p>
                            </div>
                            <div className="rounded-b border-2 w-80 h-720 pt-3 grid grid-cols-3 drop-shadow-lg">
                                <div className="h-56 w-24 ml-6 mt-1 mb-3">
                                    <div className="pt-3 h-16 w-14 text-stone-700 bg-stone-100 rounded">
                                        <FontAwesomeIcon className="text-3xl " icon={faPenToSquare} />
                                        <p className="text-xs">3주차</p>
                                    </div>
                                    <div className="pt-3 mt-3 h-16 text-stone-700 w-14 bg-stone-100 rounded">
                                        <FontAwesomeIcon className="text-3xl" icon={faPenToSquare}/>
                                        <p className="text-xs">3주차</p>
                                    </div>
                                    <div>
                                        <div className="pt-3 mt-3 h-16 text-stone-700 w-14 bg-stone-100 rounded">
                                            <FontAwesomeIcon className="text-3xl" icon={faPenToSquare}/>
                                            <p className="text-xs">3주차</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-36 h-56 mr-3 mt-1">
                                    <div className="pr-3 h-16 m-auto w-48 bg-stone-100 rounded grid grid-cols-3">
                                        <div className="w-12 h-full pt-5 mb-1 border-r-2 bg-red-100 text-red-800 font-semibold rounded-l">미제출</div>
                                        <div className="w-32">
                                            <div className="h-5">
                                                <p>2022.08.02 ~</p>
                                            </div>
                                            <div className="grid grid-cols-2">
                                                <div className="mt-2">
                                                    <button className="mt-1 w-14 py-1 text-xs w-full bg-gray-500 hover:bg-gray-700 text-white font-bold rounded">자세히</button>
                                                </div>
                                                <div>
                                                    <button className="mt-3 text-xs w-full py-1 text-white font-bold rounded bg-blue-500 hover:bg-blue-700">과제제출</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pr-3 h-16 m-auto w-48 bg-stone-100 rounded grid grid-cols-3 mt-3">
                                        <div className="w-12 h-full pt-5 mb-1 border-r-2 bg-red-100 text-red-800 font-semibold rounded-l">미제출</div>
                                        <div className="w-32">
                                            <div className="h-5">
                                                <p>2022.08.02 ~</p>
                                            </div>
                                            <div className="grid grid-cols-2">
                                                <div className="mt-2">
                                                    <button className="mt-1 w-14 py-1 text-xs w-full bg-gray-500 hover:bg-gray-700 text-white font-bold rounded">자세히</button>
                                                </div>
                                                <div>
                                                    <button className="mt-3 text-xs w-full py-1 text-white font-bold rounded bg-blue-500 hover:bg-blue-700">과제제출</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pr-3 h-16 m-auto w-48 bg-stone-100 rounded grid grid-cols-3 mt-3">
                                        <div className="w-12 h-full pt-5 mb-1 border-r-2 bg-red-100 text-red-800 font-semibold rounded-l">미제출</div>
                                        <div className="w-32">
                                            <div className="h-5">
                                                <p>2022.08.02 ~</p>
                                            </div>
                                            <div className="grid grid-cols-2">
                                                <div className="mt-2">
                                                    <button className="mt-1 w-14 py-1 text-xs w-full bg-gray-500 hover:bg-gray-700 text-white font-bold rounded">자세히</button>
                                                </div>
                                                <div>
                                                    <button className="mt-3 text-xs w-full py-1 text-white font-bold rounded bg-blue-500 hover:bg-blue-700">과제제출</button>
                                                </div>
                                            </div>
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