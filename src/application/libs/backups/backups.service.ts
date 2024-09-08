import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { exec } from 'child_process';

@Injectable()
export class BackupsService {
  private readonly logger = new Logger(BackupsService.name);

  @Cron('0 0 0 * * 3')
  public createBackup() {
    exec('src/scripts/pgsql_backup.sh', (err, stdout, stderr) => {
      if (err) {
        this.logger.error(`Error: ${err.message}`);
        return;
      }
      if (stderr) {
        this.logger.error(`Stderr: ${stderr}`);
        return;
      }
      this.logger.log(`Stdout: ${stdout}`);
    });
  }
}
