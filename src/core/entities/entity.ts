import { randomUUID } from "node:crypto";
import { UniqueEntitityID } from "./unique-entity-id";

export class Entity<Props> {
    private _id: UniqueEntitityID;
    protected props: Props;

    get id() {
        return this._id;
    }

    protected constructor(props: Props, id?: UniqueEntitityID) {
        this.props = props;
        this._id = id ?? new UniqueEntitityID(id);
    }
}