import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  // async create(dto) {
  //   await this.prismaService.user.create({
  //     data: dto
  //   })
  // }
}
