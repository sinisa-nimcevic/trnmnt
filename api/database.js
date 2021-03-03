const Sequelize = require('sequelize');
const sequelize = new Sequelize(
  process.env.DB_SCHEMA || 'postgres',
  process.env.DB_USER || 'postgres',
  process.env.DB_PASSWORD || 'postgres',
  {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    dialect: 'postgres',
    dialectOptions: {
      ssl: process.env.DB_SSL == 'true',
    },
  }
);

const User = sequelize.define('User', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  countryCode: {
    type: Sequelize.STRING,
    allowNull: true
  }
});

const Competitor = sequelize.define('Competitor', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  fullName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

const Club = sequelize.define('Club', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

const Tournament = sequelize.define('Tournament', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

const Bracket = sequelize.define('Bracket', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  weight: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

Competitor.hasOne(Club, {
  foreignKey: 'club',
});

Competitor.hasOne(Tournament, {
  foreignKey: 'currentTournament',
});

Competitor.hasOne(Bracket, {
  foreignKey: 'bracket',
});

module.exports = {
  sequelize,
  User,
  Competitor,
  Club,
  Tournament,
  Bracket,
};
