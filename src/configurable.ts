export default abstract class Configurable
{
    public props: any = null;

    protected config(config: any)
    {
        for(let property in config) {
            if (config.hasOwnProperty(property)) {
                this.props[property] = config[property];
            }
        }
    }
}