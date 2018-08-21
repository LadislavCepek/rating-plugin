import Configurable from "./configurable";

export default class Icon extends Configurable
{
    public static readonly SIZE_NORMAL: string = '';
    public static readonly SIZE_LARGE: string = 'lg';
    public static readonly SIZE_XL: string = '2x';
    public static readonly SIZE_XXL: string = '3x';

    public constructor(config: any)
    {
        super();

        this.props = {
            name: 'star',
            type: 'fa',
            size: Icon.SIZE_NORMAL,
            color: 'primary',
            href: null
        }

        this.config(config);
    }
}
