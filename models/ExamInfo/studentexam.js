const Sequelize = require('sequelize');

module.exports = class StdExam extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            take_exam: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
            grade: {
                type: Sequelize.DOUBLE,
                allowNull: false,
            },
            rank:{
                type: Sequelize.NUMBER,
                allowNull: false,
            },
        },{
            sequelize,
            timestamps: true,
            underscored: false,
            modelName: 'StdExam',
            tableName: 'stduentexams',
            paranoid: true,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    //관계형 데이터 설정하기 - 수정 필요
    static associate(db){
        // member 1:N 관계
        db.StdExam.belongsToMany(db.Member, { foreginKey: 'member_id', targetKey: 'id'});

        // class 1:N 관계
        db.StdExam.belongsTo(db.Class, {foreignKey: 'class_id', targetKey:'id'});

        // Exam id 1:N 관계
        db.StdExam.belongsTo(db.Exam, {foreignKey: 'exam_id', targetKey: 'id'});
    }
}