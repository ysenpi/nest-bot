import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { InjectBot, NestjsGrammyModule } from '@grammyjs/nestjs'
import { Bot, Context, webhookCallback } from 'grammy'
import { TelegramUpdate } from './telegram.update'
import { telegramConfig } from 'src/config/telegram.config'

@Module({
  imports: [NestjsGrammyModule.forRootAsync(telegramConfig)],
  providers: [TelegramUpdate]
})
export class TelegramModule implements NestModule {
  constructor(
    @InjectBot() private readonly bot: Bot<Context>,
    private readonly config: ConfigService
  ) {}

  configure(consumer: MiddlewareConsumer) {
    const webhookPath = this.config.getOrThrow<string>('BOT_WEBHOOK_PATH')
    consumer.apply(webhookCallback(this.bot, 'express')).forRoutes(`/${webhookPath}`)
    console.log('[bot] webhook mode')
  }
}
