const Sequelize = require('sequelize');

module.exports = class StdAttendance extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            desk_position: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            is_attendance: {
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
            qr_start_time:{
                type: Sequelize.STRING(20),
                allowNull: false,
            },
            qr_end_time:{
                type: Sequelize.STRING(20),
                allowNull: false,
            },
        },{
            sequelize,
            timestamps: true,
            underscored: false,
            modelName: 'StdAttendance',
            tableName: 'studentattendances',
            paranoid: true,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    //관계형 데이터 설정하기 - 수정 필요
    static associate(db){
        // 회원 테이블에 N:M 관계
        db.StdAttendance.belongsToMany(db.Member, {foreignKey:'member_id', targetKey: 'id'});

        // 수업 테이블에 1:N 관계
        db.StdAttendance.belongsTo(db.Class, {foreignKey: 'class_id', targetKey:'id'});

        // 수업 날짜 테이블에 N:M 관계
        db.StdAttendance.belongsToMany(db.ClassDate, {foreignKey: 'classdate_id', targetKey: 'id'});

        //
    }
}