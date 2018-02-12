# Database_Ass_2

## Setup / requirements

1. Make sure Docker works on your system
2. Use the following command:
```
> docker run --name dbapp -d -p 8085:8080 mawmaw/dbapp
```
If you already have something running on 8085, use another port in the above command.

Use curl to interact with the system. If you're on windows you can use curl in your git-bash shell.

If for some reason docker is not working for you, the application is set up on a remote server for you to use (212.47.237.59:8085). You may also clone the repository, and make your own docker-image or simply use 'npm start' (the port will then be 8080).

The system is using a mongoDB container, running on the before mentioned server.

Keep in mind that this system is extremely slow, so be patient.

### Commands

#### Find the number of distinct users:
```
> curl localhost:8085/distinctUsers
or
> curl 212.47.237.59:8085/distinctUsers
```
Output:
```
"There are currently 659774 distinct users in the DB"%
```

#### Find the most mentioned users:
```
> curl localhost:8085/mentionedUsers
or
> curl 212.47.237.59:8085/mentionedUsers
```
Output:
```
{
    "These are the users that mostly link other users:": [
        {
            "place": 1,
            "name": "lost_dog",
            "count": 549
        },
        {
            "place": 2,
            "name": "tweetpet",
            "count": 310
        },
             ........
        {
            "place": 10,
            "name": "TraceyHewins",
            "count": 202
        }
    ]
}%
```
#### Find the most active users:
```
> curl localhost:8085/mostActive
or
> curl 212.47.237.59:8085/mostActive
```
Output:
```
{
    "These are the most active users:": [
        {
            "place": 1,
            "name": "lost_dog",
            "count": 549
        },
        {
            "place": 2,
            "name": "webwoke",
            "count": 345
        },
              ......
        {
            "place": 10,
            "name": "DarkPiano",
            "count": 236
        }
    ]
}%
```


#### Find the most negative users:
```
> curl localhost:8085/negative
or
> curl 212.47.237.59:8085/negative
```
Output:
```
{
    "These are the most negative users:": [
        {
            "place": 1,
            "name": "lost_dog",
            "count": 549
        },
        .......
        {
            "place": 5,
            "name": "wowlew",
            "count": 210
        }
    ]
}%
```

#### Find the most positive users:
```
> curl localhost:8085/positive
or
> curl 212.47.237.59:8085/positive
```
Output:
```
{
    "These are the most positive users:": [
        {
            "place": 1,
            "name": "what_bugs_u",
            "count": 246
        },
        .......
        {
            "place": 5,
            "name": "keza34",
            "count": 211
        }
    ]
}%
```
