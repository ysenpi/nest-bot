import { ConfigService } from '@nestjs/config'
import { GrammyModuleAsyncOptions } from '@grammyjs/nestjs'
import { isProd } from 'src/utils/is-prod.util'

export const telegramConfig: GrammyModuleAsyncOptions = {
  // imports: [ConfigModule],
  useFactory: (config: ConfigService) => ({
    token: config.getOrThrow<string>('BOT_TOKEN'),
    useWebhook: isProd(config),
    launchOptions: {
      webhook: {
        domain: config.getOrThrow<string>('BOT_WEBHOOK_DOMAIN'),
        path: config.getOrThrow<string>('BOT_WEBHOOK_PATH')
      }
    },
    pollingOptions: {
      onStart({ username }) {
        console.log(`[bot] @${username} long polling mode`)
      }
    }
  }),
  inject: [ConfigService]
}
