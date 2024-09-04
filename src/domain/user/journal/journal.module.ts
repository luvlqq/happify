import { Module } from '@nestjs/common';

import { JournalController } from '../../../application/controllers/journal.controller';
import { JournalRepository } from '@infrastructure/database/repositories/journal.repository';
import { JournalService } from './services/journal.service';

@Module({
  imports: [],
  controllers: [JournalController],
  providers: [JournalService, JournalRepository],
})
export class JournalModule {}
