To run this project, you need to have a working installation of [Node.js](https://nodejs.org/en/)

If you don't have NestJs, install it after node.js using npm i -g @nestjs/cli

Finally install node modules using npm install

To run the project, use npm run start:dev


API EndPoints

------------------------------------------------------------------------------------------------------------

POST events/get-active-events

body:

```JSON
{
    "per_page": 1,
    "current_page": 2
}
```
response:

```JSON
{
    "events": [
        {
            "id": 2,
            "title": "Demo Event 2",
            "start_at": "2023-12-04T18:00:00.000Z",
            "end_at": "2023-12-09T18:00:00.000Z",
            "workshops": []
        }
    ],
    "pagination": {
        "total": 2,
        "per_page": 1,
        "total_pages": 2,
        "current_page": 2
    }
}
```

------------------------------------------------------------------------------------------------------------

POST events/get-event-details

body:

```JSON
{
    "id": 1
}
```

response:

```JSON
{
    "id": 1,
    "title": "Demo event 1",
    "start_at": "2023-11-04T18:00:00.000Z",
    "end_at": "2023-11-09T18:00:00.000Z",
    "total_workshops": 1
}
```

------------------------------------------------------------------------------------------------------------

GET workshops/get-active-workshops

response:

```JSON
[
    {
        "id": 1,
        "title": "Demo workshop 1",
        "start_at": "2023-11-04T18:00:00.000Z",
        "end_at": "2023-11-09T18:00:00.000Z",
        "workshops": []
    },
    {
        "id": 2,
        "title": "Demo workshop 2",
        "start_at": "2023-12-04T18:00:00.000Z",
        "end_at": "2023-12-09T18:00:00.000Z",
        "workshops": []
    }
]
```

------------------------------------------------------------------------------------------------------------

POST workshops/get-workshop-details

body:

```JSON
{
    "name": "UserName12",
    "email": "username12@gmail.com",
    "workshop_id": 1
}
```

response:

```JSON
{
    "reservation": {
        "id": 13,
        "name": "User Name 12",
        "email": "username12@gmail.com"
    },
    "event": {
        "id": 1,
        "title": "",
        "start_at": "2023-11-04T18:00:00.000Z",
        "end_at": "2023-11-09T18:00:00.000Z"
    },
    "workshop": {
        "id": 1,
        "title": "",
        "description": "",
        "start_at": "2023-11-04T18:00:00.000Z",
        "end_at": "2023-11-04T18:00:00.000Z"
    }
}
```

------------------------------------------------------------------------------------------------------------

POST reservations/create-reservation

body: 

```JSON
{
    "name": "UserName12",
    "email": "username12@gmail.com",
    "workshop_id": 1
}
```

response:

```JSON
{
    "reservation": {
        "id": 13,
        "name": "User Name 12",
        "email": "username12@gmail.com"
    },
    "event": {
        "id": 1,
        "title": "",
        "start_at": "2023-11-04T18:00:00.000Z",
        "end_at": "2023-11-09T18:00:00.000Z"
    },
    "workshop": {
        "id": 1,
        "title": "",
        "description": "",
        "start_at": "2023-11-04T18:00:00.000Z",
        "end_at": "2023-11-04T18:00:00.000Z"
    }
}
```