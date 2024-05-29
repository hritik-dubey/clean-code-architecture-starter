import mongoose from "mongoose";
import { IBaseContracts } from '../contracts';
import { RepositoryBase } from '../repository-base';
import { provide } from "inversify-binding-decorators";
import { ContainerTypes } from "../../../api/bindings/container-types";


@provide(ContainerTypes.BaseImplemantationRepository)
export class BaseImplemantationRepository<T> implements IBaseContracts<T> {
    protected repositoryBase!: RepositoryBase<T>;

    constructor(repoBase: RepositoryBase<T>) {
        this.repositoryBase = repoBase;
    }
    async create(Entity: T): Promise<T> {
        return await this.repositoryBase.create(Entity);
    }
    async get(): Promise<T[]> {
        return await this.repositoryBase.find({})
    }
    async update(id: string, Entity: T): Promise<T> {
        return (await this.repositoryBase.update(
            new mongoose.Types.ObjectId(id),
            Entity
        )) as T;
    }
    async delete(id: any): Promise<void> {
        return await this.repositoryBase.delete(id);
    }
    async getByIds(_ids: string[], filterType: string | undefined): Promise<any> {
        let populate = "field"
        return await this.repositoryBase.find({ _id: { $in: _ids }, deleteFlag: false } as any, populate);
    }
}