import { Entity } from "../../core/entities/entity";
import { UniqueEntitityID } from "../../core/entities/unique-entity-id";

interface InstructorProps {
    name: string;
}

export class Instructor extends Entity<InstructorProps> {
    static create(props: InstructorProps, id?: UniqueEntitityID) {
        const instructor = new Instructor(props, id);
        
        return instructor;
    }
}