import { Injectable } from '@nestjs/common'
import { Start, Update, Ctx, On } from '@grammyjs/nestjs'
import { type Context } from 'grammy'

@Update()
@Injectable()
export class TelegramUpdate {
  @Start()
  async onStart(@Ctx() ctx: Context): Promise<void> {
    await ctx.reply('Hey here!')
  }

  @On('message:text')
  async onMessage(@Ctx() ctx: Context): Promise<void> {
    await ctx.reply(`Your message: ${ctx.message?.text}`)
  }
}
