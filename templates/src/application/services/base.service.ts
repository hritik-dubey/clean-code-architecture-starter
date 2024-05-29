import "reflect-metadata";
import { IBaseService } from '../contracts/i-base.service';
import { injectable } from "inversify";


@injectable()
export class BaseService<T> implements IBaseService<T> {
    protected BaseServiceEntity: any;
    protected BaseServiceRepository: any;
    constructor(repository: any) {
        this.BaseServiceRepository = repository;
    }
    async create(data: T): Promise<T> {
        let baseResponse = await this.BaseServiceRepository.create(
            data
        );
        return baseResponse
    }
    async get(): Promise<T[]> {
        let baseResponse = await this.BaseServiceRepository.get();
        return baseResponse;
    }
    async update(id: string, data: T): Promise<T> {
        let baseResponse = await this.BaseServiceRepository.update(id, data);
        return baseResponse;
    }
    async delete(id: string): Promise<void> {
        let baseResponse = await this.BaseServiceRepository.delete(id);
        return baseResponse;
    }
    async getByIds(_ids: string[], filterType: string | undefined): Promise<T[]> {
        let baseResponse = await this.BaseServiceRepository.getByIds(_ids, filterType)
        return baseResponse;
    }
}