import React from 'react';
import styles from './Classroom.module.css'
import {Link} from "react-router-dom";

export default function Classroom() {
    return(
        <div className={styles.classroom}>
            <Link to="/classroom/home">
                <div className="w-80">
                    <div className="w-60 m-auto">
                        <img className="w-60" src={process.env.PUBLIC_URL+'/Logo.png'}/>
                    </div>
                    <div>
                        <div>
                            <p className="text-2xl">수업의 제목을 적으시오</p>
                        </div>
                        <div className="flex">
                            <div >
                                <p>매주 화요일 3,4,5교시</p>
                            </div>
                            <div className="grow"></div>
                            <div>
                                <p>김 아무개 교수님</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}