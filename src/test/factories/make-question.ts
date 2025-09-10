import { UniqueEntitityID } from "@/core/entities/unique-entity-id";
import { Question, QuestionProps } from "@/domain/forum/enterprise/entities/question";
import { Slug } from "@/domain/forum/enterprise/entities/value-objects/slug";
import { faker } from "@faker-js/faker";

export function makeQuestion(override: Partial<QuestionProps> = {}, id?: UniqueEntitityID) {
    const question = Question.create({
        title: faker.lorem.sentence(),
        slug: Slug.create("example-question"),
        authorId: new UniqueEntitityID(),
        content: faker.lorem.text(),
        ...override
    }, id);

    return question;
}