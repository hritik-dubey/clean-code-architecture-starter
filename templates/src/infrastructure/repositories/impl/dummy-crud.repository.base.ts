import DummyCrud, { IDummyCrudEntity } from '../entities/dummy-crud.entity';
import { RepositoryBase } from "../repository-base";
import { provide } from "inversify-binding-decorators";
import { ContainerTypes } from "../../../api/bindings/container-types";

@provide(ContainerTypes.DummyCrudRepositoryBase)
export class DummyCrudRepositoryBase extends RepositoryBase<IDummyCrudEntity> {
    constructor() {
        super(DummyCrud);
    }
}