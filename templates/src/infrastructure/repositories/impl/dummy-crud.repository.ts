import { IDummyCrudRepository } from '../contracts';
import { IDummyCrudEntity } from '../entities/dummy-crud.entity';
import { BaseImplemantationRepository } from "./baseImplemantation.repository";
import { RepositoryBase } from "../repository-base";
import { provide } from "inversify-binding-decorators";
import { inject } from 'inversify'
import { ContainerTypes } from "../../../api/bindings/container-types";


@provide(ContainerTypes.DummyCrudRepository)
export class DummyCrudRepository extends BaseImplemantationRepository<IDummyCrudEntity> implements IDummyCrudRepository {
    constructor(@inject(ContainerTypes.DummyCrudRepositoryBase) departmentRepositoryBase: RepositoryBase<IDummyCrudEntity>) {
        super(departmentRepositoryBase);
    }
    async bulkDummyCrudCreate(data: any): Promise<any> {
        return this.repositoryBase.bulkInsert(data);
    }
}


