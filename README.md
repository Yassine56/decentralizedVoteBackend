# Compaigns API

This project is built using Node.js/TypeScript with Express, and data is stored in Postgres database that you can run either localy or inside a its own container.

## API Documentation

# GET api/compaigns

- Lists all compaigns
- Response:

```js
{
    "success": true,
    "response": [
        {
            "id": 1,
            "options": [
                {
                    "label": "asd",
                    "votes": 0,
                    "voters": [],
                    "addedBy": "asd"
                },
                {
                    "label": "asd",
                    "votes": 0,
                    "voters": [],
                    "addedBy": "asda"
                },
                {
                    "label": "asd",
                    "votes": 1,
                    "voters": [
                        "asd@a.comsas"
                    ],
                    "addedBy": "asd"
                }
            ],
            "title": "asd",
            "organizer": "asd",
            "description": "asd",
            "rounds": "2"
        },
        {
            "id": 2,
            "options": [
                {
                    "label": "asd",
                    "votes": 0,
                    "voters": [],
                    "addedBy": "asd"
                },
                {
                    "label": "asd",
                    "votes": 1,
                    "voters": [
                        "asd@asd.cm"
                    ],
                    "addedBy": "asd"
                },
                {
                    "label": "asdas",
                    "votes": 0,
                    "voters": [],
                    "addedBy": "asda"
                }
            ],
            "title": "asd",
            "organizer": "asd",
            "description": "asdasd",
            "rounds": "2"
        },
        {
            "id": 3,
            "options": [
                {
                    "label": "asd",
                    "votes": 0,
                    "voters": [],
                    "addedBy": "asdasd"
                },
                {
                    "label": "asd",
                    "votes": 1,
                    "voters": [
                        "abouelouafayassine@gmail.com"
                    ],
                    "addedBy": "asd"
                }
            ],
            "title": "asda",
            "organizer": "asdasd",
            "description": "asdasd",
            "rounds": "2"
        },
        {
            "id": 4,
            "options": [
                {
                    "label": "asd",
                    "votes": 0,
                    "voters": [],
                    "addedBy": "asdasd(organizer)"
                }
            ],
            "title": "asdas",
            "organizer": "asdasd",
            "description": "asdasd",
            "rounds": "2"
        },
        {
            "id": 5,
            "options": [
                {
                    "label": "asd",
                    "votes": 0,
                    "voters": [],
                    "addedBy": "asda (organizer)"
                },
                {
                    "label": "asdas",
                    "votes": 0,
                    "voters": [],
                    "addedBy": "asdasd"
                }
            ],
            "title": "asda",
            "organizer": "asda",
            "description": "asdad",
            "rounds": "2"
        },
        {
            "id": 6,
            "options": [
                {
                    "label": "asd",
                    "votes": 0,
                    "voters": [],
                    "addedBy": "asdasd (organizer)"
                },
                {
                    "label": "asdasd",
                    "votes": 1,
                    "voters": [
                        "abouelouafayassine@gmail.com"
                    ],
                    "addedBy": "asasd"
                }
            ],
            "title": "asdas",
            "organizer": "asdasd",
            "description": "asdasd",
            "rounds": "2"
        }
    ]
}
```

# POST api/compaigns/

- Creates a compaign with the given body.

# PATCH api/compaigns/

- Updates a compaign with the given body.

## SETUP

# Setup PostgreSQL user & database using psql

Open psql shell:

#### MacOs

```
psql postgres
```

#### Ubuntu

```
sudo -u postgres psql
```

In psql shell, execute following commands:

```
CREATE DATABASE test;
CREATE USER yassine WITH ENCRYPTED PASSWORD 'password123';
GRANT ALL PRIVILEGES ON DATABASE test TO yassine;
\q
```

then on your terminal, navigate to your project directory and :

```
npm run watch
```

or

```
npm run server
```

To run the server

then try to hit the route

```
localhost:4000/setup
```

This will create the necessary
