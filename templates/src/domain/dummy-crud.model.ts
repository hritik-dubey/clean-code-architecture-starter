import "reflect-metadata";
import { Exclude, Expose } from "class-transformer";
import { BaseModel } from "./base.model";

@Exclude()
export class DummyCrudModel extends BaseModel {
    @Expose()
    departmentName!: string;
    @Expose()
    toolTip!: string;;
}