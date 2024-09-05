import { JournalController } from '@controllers/journal.controller';
import { JournalRepository } from '@infrastructure/database/repositories/journal.repository';
import { Module } from '@nestjs/common';

import { JournalService } from './services/journal.service';

@Module({
  imports: [],
  controllers: [JournalController],
  providers: [JournalService, JournalRepository],
})
export class JournalModule {}
