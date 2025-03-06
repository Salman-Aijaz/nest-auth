import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UsersService],  //Sirf apne module mein use hoga
  exports: [UsersService], //Doosre modules ko bhi use karne ki permission deta hai
})
export class UsersModule {}
