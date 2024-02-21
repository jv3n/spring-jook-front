# URBA by Coface

Web Application allowing Coface customers to view financial data from selected companies. The goal is to create an MVP
so that we can quickly put it into production and get a user feedback on the features developed.

# Commands

## Develop

    npm run start // start angular dev server
    npm run start:mocks // start mocks server

## Test

    npm run test
    npm run e2e:mocks

## CI

    npm run e2e:mocks

# Stacks

Architecture

- Clean archi (domain / adapters)

Components

- Angular v13
  - Ngx-translate
  - rx-angular
  - ngrx
- Bootstrap + icons
- Date-fns
- Echarts
- lottie
- Test : Jest + ng-mocks + Cypress
- Linter : ESLint
- webpack-bundle-analyzer
- Mocks-Server.org
- Other : start-server-and-test

# CI/CD

Deploy in production mode in a local Docker container

```shell
docker-compose up --build --force-recreate -d
```

# Planning

```mermaid
gantt
	title URBA
	dateFormat YYYY-MM-DD
	section MVP
		Release 1 :milestone, m1, 2022-04-22
		Sprint 0 :s0, 2022-01-24, 14d
		Spring 1 :s1, after s0, 14d
		Spring 2 :s2, after s1, 14d
		Spring 3 :s3, after s2, 14d
		Spring 4 :s4, after s3, 14d
		Spring 5 :s5, after s4, 14d
		Spring 6 :s6, after s5, 14d
```

# Git integration

see documentation [Git integration](GIT.md)

# Script to generate translation file

The generation of the translation file "i18n/\*.json" is based on the script 'XLtoJson'. The script has 2 parameters:

- The xls file with all translation
- The outputDirectory
-

You can launch the script by the following command

`node ./scripts/XLtoJson.js ./scripts/excelTranslation/traduction.xlsx scripts/excelTranslation/i18n`

Or you can launch it directly on the package.json file. The script create all json files corresponding of the columns of
the xlsx sheet and order the json by alphabetic order So you can easily compare the generated file with the previous to
get the differences.

# Useful Links

**Source code**

- Git: https://github.com/Zenika/coface-urba/
- Svn: http://icondev.coface.dns/svn/beacon/branches/urba/beacon-urba-web/

**Project management**

- Jira: https://agile.coface.dns/secure/RapidBoard.jspa?rapidView=4562&projectKey=ICON
- Retrospective:
  https://app.mural.co/t/zenika3879/m/zenika3879/1645516944086/eadcd16ef07e3c469bacd791eac77deb5e1a8ce4?sender=christellemurte2951
- Miro: https://miro.com/app/board/o9J_loRTApk=/

**Design**

- Design sprint:
  https://www.figma.com/proto/CIueyA0mYvRYTwLFex3Bz6/Urban---Coface?node-id=401%3A4818&scaling=min-zoom&page-id=0%3A2243&starting-point-node-id=224%3A3568&hide-ui=1
- MVP: https://xd.adobe.com/view/9beb65a3-d4d2-4d89-a0de-a835a65d8954-ceb8/
- Vision: https://xd.adobe.com/view/25c1e66e-35d1-4dbd-8bcf-912ce528462d-7092/

**Google Analytics**

- Lien : https://collaboration.coface.dns/display/ICON/Google+analytics+tracking)
