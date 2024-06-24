#!/bin/bash
#
# Backup a Postgresql database into a daily file.
#
CONTAINER_BACKUP_DIR=/pg_backup
CONTAINER_ID=4e9c9cf41d3d
PROJECT_BACKUP_DIR=/home/dev/gitfork/happify/backups
DAYS_TO_KEEP=14
FILE_SUFFIX=_pg_backup.sql
DATABASE=fitapp
USER=postgres

FILE=`date +"%Y%m%d%H%M"`${FILE_SUFFIX}
CONTAINER_OUTPUT_FILE=${CONTAINER_BACKUP_DIR}/${FILE}
HOST_OUTPUT_FILE=${PROJECT_BACKUP_DIR}/${FILE}

docker exec ${CONTAINER_ID} mkdir -p ${CONTAINER_BACKUP_DIR}

mkdir -p ${PROJECT_BACKUP_DIR}

docker exec ${CONTAINER_ID} pg_dump -U ${USER} ${DATABASE} -F p -f ${CONTAINER_OUTPUT_FILE}

docker cp ${CONTAINER_ID}:${CONTAINER_OUTPUT_FILE} ${HOST_OUTPUT_FILE}

gzip ${HOST_OUTPUT_FILE}

echo "${HOST_OUTPUT_FILE}.gz was created:"
ls -l ${HOST_OUTPUT_FILE}.gz

find ${PROJECT_BACKUP_DIR} -maxdepth 1 -mtime +${DAYS_TO_KEEP} -name "*${FILE_SUFFIX}.gz" -exec rm -rf '{}' ';'
