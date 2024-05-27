import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import AppConfig from './app.config';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: () => {
        return { uri: AppConfig().dbUrl };
      },
      inject: [ConfigService],
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env`,
      load: [AppConfig],
    }),
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
