import { IDummyCrudService } from '../../application/contracts';
import BaseController from "./base.controller";
import { controller, httpDelete, httpGet, httpPost, httpPut } from 'inversify-express-utils';
import { Request, Response, NextFunction } from 'express';
import { successResponse } from '../../utils/response.model';
import { inject } from "inversify";
import { ContainerTypes } from '../bindings/container-types';

@controller("/dummyService")
export default class DummyCrudController extends BaseController {
    constructor(@inject(ContainerTypes.DummyCrudServices) DummyCrudServices: IDummyCrudService) {
        super(DummyCrudServices);
    }

    @httpPost("/")
    createDummyCrud(request: Request, response: Response, next: NextFunction) {
        let department = this.create(request, response).catch(next);
        return department;
    }

    @httpPost("/bulk")
    async createBulkDummyCrud(request: Request, response: Response, next: NextFunction) {
        try {
            let DummyCrudModel: any = request.body;
            let BaseResponse = await this.services.bulkDummyCrudCreate(DummyCrudModel);
            response.json(successResponse(BaseResponse));
        } catch (error) {
            next(error);
        }
    }
    @httpGet("/")
    getDummyCrud(request: Request, response: Response, next: NextFunction) {
        return this.get(request, response).catch(next);
    }

    @httpGet("/ids/:ids")
    async getDummyCrudByIds(request: Request, response: Response, next: NextFunction) {
        return this.getByIds(request, response).catch(next);
    }

    @httpPut("/:id")
    updateDummyCrudById(request: Request, response: Response, next: NextFunction) {
        return this.updateById(request, response).catch(next);
    }

    @httpDelete("/:id")
    deleteDummyCrudById(request: Request, response: Response, next: NextFunction) {
        return this.deleteById(request, response).catch(next);
    }
}