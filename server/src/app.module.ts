import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Feedback } from './feedback/feedback.entity';
import { FeedbackModule } from './feedback/feedback.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345',
      database: 'feedback_management',
      entities: [Feedback],
      synchronize: true,
    }),
    FeedbackModule,
  ],
})
export class AppModule {}
