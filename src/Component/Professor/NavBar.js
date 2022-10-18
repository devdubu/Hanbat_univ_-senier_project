import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import profile from "../../public/profile.jpeg"

export default function NavBar() {
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
            {/* 상단 메뉴 바*/}
            <nav className="flex items-center justify-between flex-wrap bg-blue-300 p-6">
                <a href="/professor/classroom/home">
                    <div className="flex items-center flex-shrink-0 text-white mr-6">
                        <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/>
                        </svg>
                        <span className="font-semibold text-2xl tracking-tight">수업명</span>
                    </div>
                </a>
                <div className="block lg:hidden">
                    <button
                        className="flex items-center px-3 py-2 border rounded text-blue-200 border-blue-400 hover:text-white hover:border-white">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                        </svg>
                    </button>
                </div>
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-xl lg:flex-grow">
                        <a href="/professor/classroom/home/attendance"
                           className=" block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4">
                            출석
                        </a>
                        <a href="/professor/classroom/home/task"
                           className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 hover:text-white mr-4">
                            과제
                        </a>
                    </div>
                    <div>
                        <img className="w-10 h-10 rounded" src={profile}/>
                    </div>
                </div>
            </nav>
        </>
    )

}