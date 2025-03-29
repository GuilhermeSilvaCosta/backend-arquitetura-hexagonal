CREATE extension IF NOT EXISTS "uuid-ossp";

CREATE TABLE users (
    id uuid PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);