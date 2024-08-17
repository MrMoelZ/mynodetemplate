# Deployment

## Azure

### Good to know
- PORT doesn't matter, it's set to 443 by the app engine(?)
- npm start script not needed if there is an app.js or index.js (main doesn't need to be the "correct" file either)

### deploy from local git

#### Linux WebApp

1. make sure SCM Basic Auth Publishig AND FTP Basic Auth Publishing are activated in the WebApp (Settings > Configuration)
2. set up (or get) user-level credentials or copy app-level credentials (Deployment > Deployment Center > Local Git / FTPS Credentials)
- `az webapp deployment user set --user-name <username> --password <password>`
- `az webapp deployment list-publishing-credentials --resource-group <group-name> --name <app-name> (--query scmUri)`
3. Get Deploy URL
- `az webapp deployment source config-local-git --name <app-name> --resource-group <group-name>`
4. Add URL of step 3 to git remote
- `git remote add azure <url>`
- `git push azure master`



if `git push azure master` fails 
- use `git push azure main:master`
OR
- change the deployment branch
`az webapp config appsettings set --name <app-name> --resource-group <group-name> --settings DEPLOYMENT_BRANCH='main'` 
`git push azure main`




### FTP Upload

#### Linux WebApp

make sure FTP Basic Auth Publishig is activated in the WebApp (Settings > Configuration)
set up user-level credentials or copy app-level credentials (Deployment > Deployment Center > FTPS Credentials)
Format for user-level credentials: <app-name>\<user-name>


### CD via GitHub 

#### Linux WebApp

not easily possible



