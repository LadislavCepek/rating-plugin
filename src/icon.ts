import Configurable from "./configurable";

export default class Icon extends Configurable
{
    public name: string;
    public type: string;
    public size: string;
    public color: string;
    public src: string;

    public static readonly SIZE_NORMAL: string = '';
    public static readonly SIZE_LARGE: string = 'lg';
    public static readonly SIZE_XL: string = '2x';
    public static readonly SIZE_XXL: string = '3x';

    public constructor(config: any = null)
    {
        super();

        this.setDefaultProps();

        this.config(config);
    }

    protected setDefaultProps()
    {
        this.name = null;
        this.type = 'fa';
        this.size = Icon.SIZE_NORMAL;
        this.color = 'primary';
        this.src = null;
    }
}
