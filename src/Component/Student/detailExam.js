import React, {useState} from 'react';
import styles from './modal.module.css'
import {faXmark} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export default function detailExam(props) {
    /*

        시험 디테일한 정보
            - 시험 의의 신청 버튼
            - 시험에 대한 정보(자세한 내용에 대한 부분)
            - 시험 범위
            - 시험 장소
            - 시험 보는 형식
            - 시험 시간

     */
    function CloseModal(){
        props.setZindex("")
        props.CloseModal(false);
    }

    return(
        <>
            <div className={styles.modal+ " rounded"}>
                <div className="w-full h-14 bg-gray-300 rounded-t relative">
                    <button onClick={CloseModal} className="absolute w-10 h-8 rounded right-3 mt-3 bg-red-500 hover:bg-red-700">
                        <FontAwesomeIcon className="text-3xl pt-0.5 text-white" icon={faXmark}/>
                    </button>
                </div>
                <div>
                    {/* 상단 제목 부분, 시험 이름 & 시험 보는 방법(비대면, 대면) */}
                    <div className="grid grid-cols-2 pt-3">
                        {/* 시험 이름 */}
                        <div>
                            <p className="text-2xl">중간고사</p>
                        </div>
                        { /* 시험 보는 방법 */ }
                        <div>
                            <div className="w-20 h-8 bg-blue-300 rounded m-auto">
                                <p className="text-l pt-1">대면</p>
                            </div>
                        </div>
                    </div>
                    {/* 중단에 시험 일시, 장소, 범위 */}
                    <div className="grid grid-cols-2 mt-5 border-t-2 border-b-2 border-gray-600">
                        {/* 시험 일시, 장소 */}
                        <div className="border-gray-600 border-r-2">
                            <div className="grid grid-cols-2">
                                <div className=" border-r-2 border-gray-600"><p>시험 일시</p></div>
                                <div className=""><p>8월 10일 오전 10시</p></div>
                            </div>
                            <div className="grid grid-cols-2 border-t-2 border-gray-600">
                                <div className="border-r-2 border-gray-600"><p>시험 장소</p></div>
                                <div><p>DH-301</p></div>
                            </div>
                        </div>
                        <div className="mt-2.5">
                            <div className="bg-blue-300 w-20 h-8 rounded m-auto ">
                                <p className="text-l pt-0.5"> 1 ~ 7 주차</p>
                            </div>
                        </div>
                    </div>
                    {/* 시험에 대한 정보 */}
                    <div className="h-48 mt-2.5">
                        <p>시험에 대한 정보를 작성하는 란 입니다.</p>
                    </div>
                    {/* 시험 의의 신청 버튼 */}
                    <div className="relative h-20">
                        <button className="absolute right-3 bottom-3 w-20 h-8 rounded bg-red-500 text-white text-lg hover:bg-red-700">이의 신청</button>
                    </div>

                </div>
            </div>

        </>
    )

}