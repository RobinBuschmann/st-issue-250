import {Sequelize, Model, Table, Column} from 'sequelize-typescript';

@Table
class User extends Model<User> {

  @Column
  name: string;

  constructor() {
    super();
  }

}

const sequelize = new Sequelize({
    database: 'test',
    dialect: 'sqlite',
    username: 'root',
    password: '',
    storage: ':memory:',
});

sequelize.addModels([User]);

(async () => {

  await sequelize.sync({force: true});

  const name = 'test';
  await User.create({name});

  const user = await User.findOne({where: {name}});

  console.log(user); // works very well :)

})();
