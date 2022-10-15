import React, {useState} from 'react';
import styles from 'modal.module.css'



export default function ClassroomHome() {
    /*

        시험 디테일한 정보
            - 시험 의의 신청 버튼
            - 시험에 대한 정보(자세한 내용에 대한 부분)
            - 시험 범위
            - 시험 장소
            - 시험 보는 형식
            - 시험 시간

     */


    return(
        <>
            <div className={styles.modal}>
                <div>
                    {/* 상단 제목 부분 */}
                    <div>
                        <div></div>
                        <div></div>
                    </div>
                    {/* 중단에 시험 일시, 장소, 범위 */}
                    <div>
                        <div></div>
                        <div></div>
                    </div>
                    {/*  */}

                </div>
            </div>

        </>
    )

}