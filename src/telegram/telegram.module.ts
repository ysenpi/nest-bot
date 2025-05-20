import { Module } from '@nestjs/common'
import { NestjsGrammyModule } from '@grammyjs/nestjs'
import { TelegramUpdate } from './telegram.update'
import { telegramConfig } from 'src/config/telegram.config'

@Module({
  imports: [NestjsGrammyModule.forRootAsync(telegramConfig)],
  providers: [TelegramUpdate]
})
export class TelegramModule {}
