const Sequelize = require('sequelize');

module.exports = class ClassDate extends Sequelize.Model{
    static init(sequelize){
        return super.init({
            week_num: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            class_md: {
                type: Sequelize.STRING(10),
                allowNull: false,
            },
            isonline:{
                type: Sequelize.BOOLEAN,
                allowNull: false,
            },
            class_place:{
                type: Sequelize.STRING(20),
                allowNull: false,
            },
        },{
            sequelize,
            timestamps: true,
            underscored: false,
            modelName: 'ClassDate',
            tableName: 'classdates',
            paranoid: true,
            charset: 'utf8',
            collate: 'utf8_general_ci',
        });
    }
    //관계형 데이터 설정하기 - 수정 필요
    static associate(db){

        // ClassDate는 Class와 1:N 관계이다.
        db.ClassDate.belongsTo(db.Class, { foreginKey: 'class_id', targetKey: 'id'});

        // 출석 테이블
        db.ClassDate.belongsToMany(db.StdAttendance, {foreignKey: 'classdate_id', sourceKey: 'id'})
    }
}