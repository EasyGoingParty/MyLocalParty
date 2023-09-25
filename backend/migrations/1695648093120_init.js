/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.createTable('users', {
        id: 'id',
        name: { type: 'varchar(1000)', notNull: true },
        email: { type: 'varchar(1000)', notNull: true, unique: true }
    });
};

exports.down = pgm => {
    pgm.dropTable('users');
};
