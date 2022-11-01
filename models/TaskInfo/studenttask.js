const Sequelize = require('sequelize');

module.exports = class StdTask extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            task_file: {
                type: Sequelize.BLOB("long"),
                allowNull: true,
            },
            is_task_complete: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
        },{
            sequelize,
            timestamps: true,
            underscored: false,
            modelName: 'StdTask',
            tableName: 'studenttasks',
            paranoid: true,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    //관계형 데이터 설정하기 - 수정 필요
    static associate(db){
        // 수업 관련 테이블
        db.StdTask.belongsTo(db.Class, { foreginKey: 'writer_id', targetKey: 'id'});

        // 학생 관련 테이블
        db.StdTask.belongsToMany(db.Member, {foreignKey: 'member_id', targetKey: 'id'});

        // 과제 테이블
        db.StdTask.belongsTo(db.Task, {foreignKey: 'task_id', targetKey:'id'});
    }
}