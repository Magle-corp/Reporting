# Reporting

Work in progress !

Application de reporting pour l'activitΓ© entrepreneuriale d'un proche.

πΌ Symfony 6  π PHP 8  π€ TypeScript π React π MySQL  π PhpMyAdmin  π Docker

___

## A propos

Projet construit Γ  l'aide de la stack [Docker Symfony 6](https://github.com/Magle-corp/Docker-Symfony-6).

## Requis

Assurez-vous que les ports suivants sont disponibles :
- 3306 - MySQL
- 8081 - PhpMyAdmin
- 8080 - Symfony
- 3000 - React

## Installation

```shell
git clone git@github.com:Magle-corp/Reporting.git
cd Reporting
cp .env.example .env && cp backend/.env.example backend/.env
docker-compose up --build
```

- Symfony app disponible [http://localhost:8080](http://localhost:8080)
- React app disponible [http://localhost:3000](http://localhost:3000)
- PhpMyAdmin disponible [http://localhost:8081](http://localhost:8081)
