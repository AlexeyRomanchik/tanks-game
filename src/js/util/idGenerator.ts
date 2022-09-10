class IdGenerator {
    private static _instance: IdGenerator;
    private _id: number;

    private constructor() {
        this._id = 0;
    }

    public generateId(): number {
        return ++this._id
    }

    public static getInstance(): IdGenerator {
        if (!IdGenerator._instance)
            IdGenerator._instance = new IdGenerator();

        return IdGenerator._instance;
    }
}

export { IdGenerator }
