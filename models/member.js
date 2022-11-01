const Sequelize = require('sequelize');

module.exports = class Member extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            name: {
                type: Sequelize.STRING(20),
                allowNull: false,
            },
            dept_num: {
                type: Sequelize.INTEGER,
                unique: true,
                allowNull: false,
            },
            detp :{
                type: Sequelize.STRING(100),
                allowNull: false,
            },
            phone_num:{
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            grade:{
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            position:{
                type: Sequelize.STRING(20),
                allowNull: false,
            }
        },{
            sequelize,
            timestamps: true,
            underscored: false,
            modelName: 'Member',
            tableName: 'members',
            paranoid: true,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    static associate(db){
        // 수업 테이블과의 관계
        db.Member.belongsToMany(db.StdAttendance, {foreignKey: 'member_id', sourceKey:'id'});

        //출석 관련 테이블
        db.Member.hasMany(db.StdAttendance, {foreignKey: 'member_id', sourceKey: 'id'});

        //시험 관련 테이블
        db.Member.belongsToMany(db.StdExam, {foreignKey: 'member_id', sourceKey: 'id'});

        // 과제 관련 테이블
        db.Member.belongsToMany(db.StdTask, {foreignKey: 'member_id', sourceKey:'id'});
    }
}