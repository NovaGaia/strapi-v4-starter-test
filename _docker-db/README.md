# 🌈 Strapi MariaDB PHPMyAdmin - docker-compose

Strapi app with MariaDB and PHPMyAdmin powered by docker-compose.

<img src="https://s9.gifyu.com/images/cyyoung.png" alt="cyyoung.png" border="0" />

## Prerequisites :

You should have [docker](https://docs.docker.com/engine/install/) and [docker-compose](https://docs.docker.com/compose/install/) installed on your computer.

## How to Run :

### 1. Clone this repository :

```bash
# exemple
git clone https://gitlab.com/theshifters/evco/sws/back_strapi.git sws-strapi-app
cd sws-strapi-app
```

### 2. Create `.env` file :

```bash
cp .env.example .env
```

Then please fill the `.env` file.

### 3. Run your app with `docker-compose` (in detached mode, you will not be seeing logs of your app) :

```bash
docker-compose up -d
```

If you want to see the logs while running your app, run it with :

```bash
docker-compose up
```

You can visit your **Strapi** app at `http://localhost:1337` in your browser.

You can visit your **PHPMyAdmin** app at `http://localhost:8081` in your browser.

Thank you, have a nice day!

### 4. Reset to develop branch

```bash
sh restart-clean.sh
```

Once the stack is launched, open it in command line from Docker and do an `npm install`, when it's finished, launch `docker-compose up` as usual.

---

## Annexes

### 1. Import data in MariaDB from external source **NOT FINISHED!**

#### a. Install mysqldump

```bash
brew install mysql-client
```

#### b. launch download from external database script

```bash
chmod +x get_data.sh
sh get_data.sh
```

**TODO / TO CHOOSE**

#### Manually

https://docs.phpmyadmin.net/fr/latest/import_export.html

#### Via SSH

> Import/export in one action.

```bash
remoteuser@remote_host:$ mysqldump -u MYSQL_USER -p'MYSQL_PASSWORD' YOUR_DATABASE | gzip -c | ssh you@your_host 'cat > ~/backup.sql.gz'
```

#### With Docker

##### Dump using mysqldump

```bash
docker exec db_container_name mysqldump [--user yourusername] [--password=yourpassword] databasename > /desired/path/to/db.dump
```

##### Restoring

```bash
docker exec -i db_container_name mysql [--user yourusername] [--password=yourpassword] databasename < /path/to/db.dump
```
