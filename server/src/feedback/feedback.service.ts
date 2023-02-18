import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFeedbackDTO } from './dto/create-feedback.dto';
import { Feedback } from './feedback.entity';

@Injectable()
export class FeedbackService {
  constructor(
    @InjectRepository(Feedback)
    private feedbackRepository: Repository<Feedback>,
  ) {}

  createFeedback(createFeedbackDto: CreateFeedbackDTO) {
    const newFeedback = this.feedbackRepository.create(createFeedbackDto);
    return this.feedbackRepository.save(newFeedback);
  }

  getFeedbackList() {
    return this.feedbackRepository.find();
  }
}
