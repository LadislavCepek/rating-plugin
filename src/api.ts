import Rating from "./rating-component";

export default abstract class Api
{
    public static create(config: any)
    {
        (new Rating(config)).render();
    }
}
