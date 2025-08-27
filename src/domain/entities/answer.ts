import { Entity } from "../../core/entities/entity";
import { UniqueEntitityID } from "../../core/entities/unique-entity-id";

interface AnswerProps {
    authorId: UniqueEntitityID;
    questionId: UniqueEntitityID;
    content: string;
    createdAt: Date;
    updatedAt?: Date;
}

export class Answer extends Entity<AnswerProps> {

    get content() {
        return this.props.content;
    }
}