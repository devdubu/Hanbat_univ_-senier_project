const Sequelize = require('sequelize');

module.exports = class Class extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            semester: {
                type: Sequelize.STRING(10),
                allowNull: false,
            },
            class_name: {
                type: Sequelize.STRING(30),
                allowNull: false,
            },
            professor_name:{
                type: Sequelize.STRING(20),
                allowNull: true,
            },
            isonline:{
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
            class_suspension:{
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
            class_place:{
                type: Sequelize.STRING(20),
                allowNull: false,
            },
            class_day:{
                type: Sequelize.STRING(20),
                allowNull: false,
            },
            class_start_time:{
                type: Sequelize.STRING(20),
                allowNull: false,
            },
            class_end_time:{
                type: Sequelize.STRING(20),
                allowNull: false,
            },
            class_duration:{
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            class_std_total_num:{
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            class_std_list:{
                type: Sequelize.STRING(100),
                allowNull: false,
            },

        },{
            sequelize,
            timestamps: true,
            underscored: false,
            modelName: 'Class',
            tableName: 'classes',
            paranoid: true,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    //관계형 데이터 설정하기 - 수정 필요
    static associate(db){
        //Classdate와 관계
        db.Class.hasMany(db.ClassDate, { foreginKey: 'class_id', sourceKey: 'id' , onDelete: "cascade"});

        //시험 관련 테이블 관계
        db.Class.hasMany(db.Exam, {foreignKey: 'class_id', sourceKey:'id'});
        db.Class.hasMany(db.StdExam, {foreignKey: 'class_id', sourceKey:'id'});

        //과제 관련 테이블
        db.Class.hasMany(db.Task, {foreignKey: 'class_id', sourceKey:'id'});
        db.Class.hasMany(db.StdTask, {foreignKey: 'class_id', sourceKey:'id'});

        //출석 관련 테이블
        db.Class.hasMany(db.StdAttendance, {foreignKey: 'class_id', sourceKey:'id'});


    }
}