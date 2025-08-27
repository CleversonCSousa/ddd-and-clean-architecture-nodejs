import { UniqueEntitityID } from "../../core/entities/unique-entity-id";
import { Answer } from "../entities/answer";
import { AnswersRepository } from "../repositories/answers-repository";

interface AnswerQuestionUseCaseRequest {
    instructorId: string;
    questionId: string;
    content: string;
}

export class AnswerQuestionUseCase {

    constructor(private answersRepository: AnswersRepository) {

    }

    async execute({ instructorId, questionId, content } : AnswerQuestionUseCaseRequest ) {
        const answer = Answer.create({
            content,
            authorId: new UniqueEntitityID(instructorId),
            questionId: new UniqueEntitityID(questionId)
        });

        await this.answersRepository.create(answer);

        return answer;
    }
}