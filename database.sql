CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    fullname VARCHAR(255),
    surname VARCHAR (255),
    avatar VARCHAR (255),
    email VARCHAR (255) UNIQUE,
    age VARCHAR (255),
    birth VARCHAR (255),
    phone VARCHAR (255),
    role_id INTEGER,
    FOREIGN KEY (role_id) REFERENCES role (id),
    gender_id VARCHAR (255),
    password VARCHAR (255),
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE role (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255)
);
CREATE TABLE settings (
    id SERIAL PRIMARY KEY,
    site_name VARCHAR(255)
);
CREATE TABLE realty (
    id SERIAL PRIMARY KEY,
    type VARCHAR(255),
    adress VARCHAR(255),
    number_realty VARCHAR(255),
    status_user VARCHAR(255),
    email VARCHAR(255),
    name_company VARCHAR(255),
    username VARCHAR (255),
    phone VARCHAR(255),
    online VARCHAR(255),
    type_realty VARCHAR(255),
    floor VARCHAR(255),
    rooms VARCHAR(255),
    description VARCHAR(255),
    price VARCHAR(255),
    status VARCHAR(255)
);