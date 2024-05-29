export interface IBaseContracts<T> {
    create(Entity: T): Promise<T>
    get(filterType: any): Promise<T[]>
    update(id: string,
        Entity: T
    ): Promise<T>
    delete(id: string): Promise<void>;
    getByIds(
        _ids: string[],
        filterType: string | undefined
    ): Promise<any>;
}