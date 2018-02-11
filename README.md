# Database_Ass_2

## Setup / requirements

1. Make sure Docker works on your system
2. Use the following command:
```
> docker run --name dbapp -d -p 8085:8080 mawmaw/dbapp
```
If you already have something running on 8085, use another port.

Use curl to interact with the system. If you're on windows use curl in your git-bash shell.

If for some reason docker is not working for you, substitute localhost with 212.47.237.59 in the following commands.

## Commands

Find the number of distinct users:
```
> curl localhost:8085/distinctUsers
```

Find the most mentioned users:
```
> curl localhost:8085/mentionedUsers
```

Find the most active users:
```
> curl localhost:8085/mostActive
```

Find the most negative users:
```
> curl localhost:8085/negative
```

Find the most positive users:
```
> curl localhost:8085/positive
```
