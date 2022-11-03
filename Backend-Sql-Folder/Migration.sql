DROP TABLE IF EXISTS Users CASCADE;
DROP TABLE IF EXISTS Food CASCADE;

CREATE TABLE IF NOT EXISTS Users (
    user_id SERIAL PRIMARY KEY
 );

CREATE TABLE IF NOT EXISTS Food (
    Food_id SERIAL PRIMARY KEY,
    sand_name varchar(20),
    img text,
    user_id int,
    CONSTRAINT fk_User_id
        FOREIGN KEY (user_id)
            REFERENCES Users(user_id) ON DELETE CASCADE ON UPDATE CASCADE
);