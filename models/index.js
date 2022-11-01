'use strict';

const path = require('path');
const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];

//회원 정보 테이블
const Member = require('./member');

// 수업 관련 테이블
const Class = require('./ClassInfo/class');
const ClassDate = require('./ClassInfo/classdate');

//출석 관련 테이블
const StdAttendance = require('./Attendance/studentattendance');

//과제 관련 테이블
const Task = require('./TaskInfo/task');
const StdTask = require('./TaskInfo/studenttask');

//시험 관련 테이블
const Exam = require('./ExamInfo/exam');
const StdExam = require('./ExamInfo/studentexam');


const db = {};

let sequelize = new Sequelize(config.database, config.username, config.password, config);


db.sequelize = sequelize;
db.Sequelize = Sequelize;

//회원 테이블
db.Member = Member;

//수업 관련 테이블
db.Class = Class;
db.ClassDate = ClassDate;

//출석 관련 테이블
db.StdAttendance = StdAttendance;

//과제 관련 테이블
db.Task = Task;
db.StdTask = StdTask;

//시험 관련 테이블
db.Exam = Exam;
db.StdExam = StdExam;

// 테이블 초기화
Member.init(sequelize);

Class.init(sequelize);
ClassDate.init(sequelize);

StdAttendance.init(sequelize);

Task.init(sequelize);
StdTask.init(sequelize);

Exam.init(sequelize);
StdExam.init(sequelize);

Member.associations(db);

Class.associations(db);
ClassDate.associations(db);

StdAttendance.associations(db);

Task.associations(db);
StdTask.associations(db);

Exam.associations(db);
StdExam.associations(db);


module.exports = db;
