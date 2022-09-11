class StorageService {
    public setItem<T>(key: string, item: T): void {
        const jsonItem = JSON.stringify(item);
        localStorage.setItem(key, jsonItem);
    }

    public getItem<T>(key: string): T {
        const jsonItem = localStorage.getItem(key);

        if (!jsonItem)
            throw new Error('Item not found in local storage');

        return JSON.parse(jsonItem) as T;
    }
}

export { StorageService };
