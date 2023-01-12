# Next.js - Cockpit - Locale Template

This is a simple default template to create a localised Next.js/React project with CockpitCMS as a headless integration.




#### NPM DEV
```
git clone ...

npm i
npm run dev

open in browser: localhost:3000
```

#### NPM PROD
```
git clone ...

npm i
npm run build
npm start
```

```
PM2 RUN COMMAND:
pm2 start npm --name "test-dev" -- run startdev --watch
pm2 start npm --name "test-prod" -- start --watch

PM2 PIPELINE: 
cd ~/HOSTDIR; npm run build; /usr/local/bin/pm2 restart test-prod
```
#### Docker
```
git clone ...

docker-compose build --no-cache
docker-compose up -d 

DOCKER PIPELINE
cd ~/HOSTDIR; docker-compose build --no-cache; docker-compose up -d
```

## Config
### Next.js Frontend
Set the API-URL & API-TOKEN in `next.config.js` and .env.local for npm-runner.

Set the API-URL in docker-compose.yml for docker-runner.