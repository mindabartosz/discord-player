import { Tinypool, Options } from "tinypool";
import { Service } from "../classes/Service";
import { join } from "node:path";

export function createService(options?: Omit<Options, "filename">) {
    if (options && "filename" in options) delete options["filename"];
    const pool = new Tinypool({
        ...(options || {}),
        filename: join(__dirname, "..", "worker", "worker.js")
    });
    const service = new Service(pool);

    return service;
}
