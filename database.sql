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
    gender_id INTEGER,
    FOREIGN KEY (gender_id) REFERENCES gender (id),
    password VARCHAR (255),
    timestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE role (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255)
);
CREATE TABLE gender (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255)
);
CREATE TABLE settings (
    id SERIAL PRIMARY KEY,
    site_name VARCHAR(255)
);