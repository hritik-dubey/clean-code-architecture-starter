export interface IBaseService<T> {
    create(data: T): Promise<T>;
    get(
        filterType: string,
        pageSize: number,
        page: number
    ): Promise<T[]>;
    update(id: string, action: T): Promise<T>;
    delete(id: string,): Promise<void>;
    getByIds(
        _ids: string[],
        filterType: string | undefined
    ): Promise<T[]>;
}
