import { Injectable } from '@nestjs/common';

@Injectable()
export class EmailSendAdapter {
  // constructor(
  //   private readonly sendGridService: SendGridService,
  // ) {}
  //
  // async sendEmail(
  //   to: string,
  //   subject: string,
  //   body: string,
  // ): Promise<void> {
  //   try {
  //     await this.sendGridService.send(to, subject, body);
  //   } catch (error) {
  //     logger.error('SendGrid failed', error);
  //   }
  // }
}
