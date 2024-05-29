import { Request, Response } from 'express';
import { ContainerTypes } from '../bindings/container-types';
import { provide } from 'inversify-binding-decorators';
import { successResponse } from '../../utils/response.model';

@provide(ContainerTypes.BaseController)
export default class BaseController {
    protected services: any;
    constructor(services: any) {
        this.services = services;
    }
    async create(request: Request, response: Response): Promise<void> {
        let BaseModel: any = request.body;
        let BaseResponse = await this.services.create(BaseModel);
        response.json(successResponse(BaseResponse));
    }
    async get(request: Request, response: Response): Promise<void> {
        response.json(
            successResponse(
                await this.services.get()
            )
        );
    }
    async getById(request: Request, response: Response): Promise<void> {
        let id: string = request.params.id;
        let BaseResponse = await this.services.getById(
            id,
            request.query?.filterType as any
        );
        response.json(successResponse(BaseResponse));
    }
    async updateById(request: Request, response: Response): Promise<void> {
        let id: string = request.params.id;
        let BaseResponse = await this.services.update(
            id,
        );
        response.json(successResponse(BaseResponse));
    }
    async deleteById(request: Request, response: Response): Promise<void> {
        let id: string = request.params.id;
        await this.services.delete(id);
        response.json(
            successResponse({
                message: "DELETED_SUCCESSFULLY",
            })
        );
    }
    async getByIds(request: Request, response: Response) {
        let ids: string[] = request.params.ids.split(",");
        let BaseResponse = await this.services.getByIds(ids);
        response.json(successResponse(BaseResponse));
    }
}