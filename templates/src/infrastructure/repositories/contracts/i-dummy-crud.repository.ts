import { IDummyCrudEntity } from '../entities/dummy-crud.entity';
import { IBaseContracts } from './i-baseContract.repository';

export interface IDummyCrudRepository extends IBaseContracts<IDummyCrudEntity> {
    bulkDummyCrudCreate(data: any): Promise<any>
}