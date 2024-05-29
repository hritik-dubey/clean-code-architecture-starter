import { DummyCrudModel } from '../../domain';
import { IBaseService } from './i-base.service';


export interface IDummyCrudService extends IBaseService<DummyCrudModel> {
    bulkDummyCrudCreate(data: DummyCrudModel[]): Promise<DummyCrudModel[]>
}