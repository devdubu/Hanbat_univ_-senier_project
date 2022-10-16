import React from 'react';
import styles from './Classroom.module.css'
import {Link} from "react-router-dom";


export default function Classroom() {
    return(
        /*
            배경 색상 : bg-stone-200
            point 색상 : bg-blue-200
        */
        <div>
            <div className="flex bg-blue-300 h-24">
                <div className="mt-8 mb-10 ml-3">
                    <p className="text-2xl">2022년도 2학기</p>
                </div>
                <div className="grow"></div>
                <div className="mt-8 mb-10 mr-3">
                    <p className="text-2xl">로그인 정보</p>
                </div>
            </div>
            <div  className={styles.classroom}>
                <div className="grid grid-cols-3">

                        <div className="w-80 h-96 m-3 border-b-stone-200 border-2 rounded-xl drop-shadow-lg">
                            <div className="w-60 m-auto pt-3">
                                <img className="w-60" src={process.env.PUBLIC_URL+'/Logo.png'}/>
                            </div>
                            <div className="bg-zinc-200">
                                <div className="mt-3">
                                    <p className="text-2xl pt-3">수업의 제목을 적으시오</p>
                                </div>
                                <div className="flex h-10 mt-3">
                                    <div className="mt-3 ml-3">
                                        <p>매주 화요일 3,4,5교시</p>
                                    </div>
                                    <div className="grow"></div>
                                    <div className="mt-3 mr-3">
                                        <p>김 아무개 교수님</p>
                                    </div>
                                </div>
                            </div>
                            <div className="h-10 rounded-b-2xl bg-blue-300">
                                <Link to="/professor/classroom/home">
                                    <p className="pt-2">들어가기</p>
                                </Link>
                            </div>
                        </div>


                    <div className="w-80 h-96 m-3 border-b-stone-200 border-2 rounded-xl drop-shadow-lg">
                        <div className="w-60 m-auto pt-3">
                            <img className="w-60" src={process.env.PUBLIC_URL+'/Logo.png'}/>
                        </div>
                        <div className="bg-zinc-200">
                            <div className="mt-3">
                                <p className="text-2xl pt-3">수업의 제목을 적으시오</p>
                            </div>
                            <div className="flex h-10 mt-3">
                                <div className="mt-3 ml-3">
                                    <p>매주 화요일 3,4,5교시</p>
                                </div>
                                <div className="grow"></div>
                                <div className="mt-3 mr-3">
                                    <p>김 아무개 교수님</p>
                                </div>
                            </div>
                        </div>
                        <div className="h-10 rounded-b-2xl bg-blue-300">
                            <Link to="/classroom/home">
                                <p className="pt-2">들어가기</p>
                            </Link>
                        </div>
                    </div>

                    <div className="w-80 h-96 m-3 border-b-stone-200 border-2 rounded-xl drop-shadow-lg">
                        <div className="w-60 m-auto pt-3">
                            <img className="w-60" src={process.env.PUBLIC_URL+'/Logo.png'}/>
                        </div>
                        <div className="bg-zinc-200">
                            <div className="mt-3">
                                <p className="text-2xl pt-3">수업의 제목을 적으시오</p>
                            </div>
                            <div className="flex h-10 mt-3">
                                <div className="mt-3 ml-3">
                                    <p>매주 화요일 3,4,5교시</p>
                                </div>
                                <div className="grow"></div>
                                <div className="mt-3 mr-3">
                                    <p>김 아무개 교수님</p>
                                </div>
                            </div>
                        </div>
                        <div className="h-10 rounded-b-2xl bg-blue-300">
                            <Link to="/classroom/home">
                                <p className="pt-2">들어가기</p>
                            </Link>
                        </div>
                    </div>




                </div>
            </div>
        </div>
    )
}