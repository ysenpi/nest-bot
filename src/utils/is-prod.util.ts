import { ConfigService } from '@nestjs/config'

export function isProd(config: ConfigService): boolean {
  return config.getOrThrow<string>('NODE_ENV') === 'production'
}
