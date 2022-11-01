const Sequelize = require('sequelize');

module.exports = class Task extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            is_online_submit: {
                type: Sequelize.STRING(20),
                allowNull: false,
            },
            task_start_date: {
                type: Sequelize.STRING(20),
                allowNull: false,
            },
            task_end_date:{
                type: Sequelize.STRING(20),
                allowNull: false,
            },
            task_assignment_list:{
                type: Sequelize.STRING(20),
                allowNull: false,
            },
            task_submit_list:{
                type: Sequelize.STRING(100),
                allowNull: false,
            },
            task_title:{
                type: Sequelize.STRING(20),
                allowNull: false,
            },
            task_content:{
                type: Sequelize.STRING(100),
                allowNull: false,
            },
        },{
            sequelize,
            timestamps: true,
            underscored: false,
            modelName: 'Task',
            tableName: 'tasks',
            paranoid: true,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    //관계형 데이터 설정하기 - 수정 필요
    static associate(db){
        // 수업 테이블과의 관계
        db.Task.belongsTo(db.Class, {foreignKey: 'class_id', targetKey:'id'});

        //stdtask와의 관계
        db.Task.hasMany(db.StdTask, {foreignKey: 'task_id', sourceKey:'id'});
    }
}