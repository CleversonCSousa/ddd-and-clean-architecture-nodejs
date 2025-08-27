import { Entity } from "@/core/entities/entity";
import { UniqueEntitityID } from "@/core/entities/unique-entity-id";

interface StudentProps {
    name: string;
}

export class Student extends Entity<StudentProps> {
    static create(props: StudentProps, id?: UniqueEntitityID) {
        const student = new Student(props, id);
        
        return student;
    }
}