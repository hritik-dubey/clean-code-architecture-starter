import { Expose, } from 'class-transformer';
import { ExposeId } from '../utils/customtransform';

export class BaseModel {
    @Expose()
    @ExposeId()
    id: string | undefined;
    @Expose()
    @ExposeId()
    _id: string | undefined;
    @Expose()
    activeFlag?: boolean;
    @Expose()
    deleteFlag?: boolean;
    @Expose()
    createdBy?: string;
    @Expose()
    creationDate?: Date;
    @Expose()
    modifiedBy?: string;
    @Expose()
    modifiedDate?: Date;
}
