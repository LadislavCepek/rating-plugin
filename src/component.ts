import Configurable from "./configurable";

export default abstract class Component extends Configurable
{
    public parentNode: HTMLElement;

    public node: HTMLElement;

    private _config: any;

    public constructor(config: any = null)
    {
        super();
        
        this._config = config;
    }

    public init()
    {
        this.config(this._config);
    }

    public render()
    {
    }
}
