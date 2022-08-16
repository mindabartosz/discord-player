import type { Tinypool } from "tinypool";
import { WorkerOp } from "../utils/enums";

export interface ServicePayload {
    op: WorkerOp;
    d: unknown;
}

export class Service {
    public constructor(public pool: Tinypool) {}

    public async send(payload: ServicePayload) {
        return await this.pool.run(payload);
    }
}
