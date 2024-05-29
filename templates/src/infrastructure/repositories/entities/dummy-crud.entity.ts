import { Document, Schema, model } from 'mongoose';
import { IEntityBase } from './contracts/i-entity.base';
export interface IDummyCrudEntity extends IEntityBase, Document {
    departmentName?: string;
    toolTip?: string;
}

export const DummyCrudEntitySchema = new Schema<IDummyCrudEntity>({
    departmentName: {
        type: String, match: /^[a-z A-Z0-9/&-.]*$/
    },
    toolTip: String,
    deleteFlag: { type: Boolean, default: false },
    activeFlag: { type: Boolean, default: true },
    createdBy: { type: String },
    creationDate: { type: Date, default: new Date() },
    modifiedBy: { type: String },
    modifiedDate: { type: Date, default: new Date() }
});

const DummyCrud = model<IDummyCrudEntity>(
    "DEPARTMENT_MODEL_NAME", // Model name
    DummyCrudEntitySchema, // Schema
    "DEPARTMENT_COLLECTION_NAME" //collection name
);

export default DummyCrud;
