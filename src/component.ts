import Configurable from "./configurable";

export default abstract class Component extends Configurable
{
    public id: string;

    public className: string;

    public parentNode: HTMLElement;

    public node: HTMLElement;

    private _config: any = {};

    public constructor(config: any = null)
    {
        super();

        this.setDefaultProps();
        
        this._config = config;
    }

    public init()
    {
        this.config(this._config);
    }

    public render()
    {
        this.init();
    }

    protected setDefaultProps(): void
    {
        this.id = null;
        this.className = null;
    }
}
