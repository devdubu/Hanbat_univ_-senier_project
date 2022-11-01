const Sequelize = require('sequelize');

module.exports = class Exam extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            exam_type: {
                type: Sequelize.STRING(20),
                allowNull: false,
            },
            exam_date: {
                type: Sequelize.STRING(20),
                allowNull: false,
            },
            exam_start_time:{
                type: Sequelize.STRING(20),
                allowNull: false,
            },
            exam_duration_time:{
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            exam_content:{
                type: Sequelize.STRING(100),
                allowNull: false,
            },
            exam_avg:{
                type: Sequelize.DOUBLE,
                allowNull: false,
            },
        },{
            sequelize,
            timestamps: true,
            underscored: false,
            modelName: 'Exam',
            tableName: 'exams',
            paranoid: true,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    //관계형 데이터 설정하기 - 수정 필요
    static associate(db){
        // class table과의 관계
        db.Exam.belongsTo(db.Class, {foreignKey: 'class_id', targetKey: 'id'});

        //
    }
}