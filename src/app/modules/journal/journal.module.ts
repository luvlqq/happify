import { JournalController } from '@modules/journal/journal.controller';
import { JournalRepository } from '@modules/journal/journal.repository';
import { JournalService } from '@modules/journal/journal.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [JournalController],
  providers: [JournalService, JournalRepository],
})
export class JournalModule {}
