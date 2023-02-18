import { Controller } from '@nestjs/common';
import { Body, Get, Post } from '@nestjs/common/decorators';
import { CreateFeedbackDTO } from './dto/create-feedback.dto';
import { FeedbackService } from './feedback.service';

@Controller('feedback')
export class FeedbackController {
  constructor(private readonly feedbackService: FeedbackService) {}

  @Post()
  createFeedback(@Body() createUserDto: CreateFeedbackDTO) {
    return this.feedbackService.createFeedback(createUserDto);
  }

  @Get()
  getAllFedback() {
    return this.feedbackService.getFeedbackList();
  }
}
