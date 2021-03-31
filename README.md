# Apollo

SETUP

```
docker-compose build
```

To run the db:

```
docker-compose up -d apollo_db
```

add the apollo database:

```
docker exec -it apollo_db psql -U postgres postgres
```

then in the psql shell:

```
CREATE DATABASE apollo;
```

To run the backend:

```
docker-compose up -d apollo
```

to see logs:

```
docker logs apollo
```

after the first set up you can run both with:

```
docker-compose build
```

when changes are made to the backend you must stop the containers and rerun:

```
docker-compose build
docker-compose build
```