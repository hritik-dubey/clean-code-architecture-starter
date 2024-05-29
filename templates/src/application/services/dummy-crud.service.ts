import { inject } from 'inversify';
import { DummyCrudModel } from '../../domain';
import { IDummyCrudService } from '../contracts/i-dummy-crud.service';
import { BaseService } from "./base.service";
import { ContainerTypes } from '../../api/bindings/container-types';
import { provide } from 'inversify-binding-decorators';
import { IDummyCrudRepository } from '../../infrastructure/repositories/contracts/i-dummy-crud.repository';

@provide(ContainerTypes.DummyCrudServices)
export default class DummyCrudServices extends BaseService<DummyCrudModel> implements IDummyCrudService {
    constructor(@inject(ContainerTypes.DummyCrudRepository) DummyCrudRepository: IDummyCrudRepository) {
        super(DummyCrudRepository)
    }
    async bulkDummyCrudCreate(data: DummyCrudModel[]): Promise<DummyCrudModel[]> {
        let baseResponse = await this.BaseServiceRepository.bulkDummyCrudCreate(
            data
        );
        return baseResponse
    }
}