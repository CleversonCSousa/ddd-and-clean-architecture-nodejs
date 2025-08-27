import { randomUUID } from "node:crypto";

class UniqueEntitityID {
    private value: string;

    toString() {
        return this.value;
    }

    toValue() {
        return this.value;
    }

    constructor(value?: string) {
        this.value = value ?? randomUUID();
    }
}