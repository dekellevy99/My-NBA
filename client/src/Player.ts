class Player{
    private _id: number;
    private _firstName: string;
    private _lastName: string;
    private _jerseyNumber: number;
    private _position: string;
    private _picture: string;

    constructor(id: number, firstName: string, lastName: string, jerseyNumber: number, position: string, picture: string){
        this._id = id;
        this._firstName = firstName;
        this._lastName = lastName;
        this._jerseyNumber = jerseyNumber;
        this._position = position;
        this._picture = picture;
    }

    // === GET METHODS ===
    get firstName(): string{
        return this._firstName;
    }

    get lastName(): string{
        return this._lastName;
    }

    get jerseyNumber(): number{
        return this._jerseyNumber;
    }

    get position(): string{
        return this._position;
    }

    get picture(): string{
        return this._picture
    }

    get id(): number{
        return this._id
    }
    
    // === SET METHODS ===
    set firstName(name: string){
        this._firstName = name;
    }

    set lastName(name: string){
        this._lastName = name
    }

    set jerseyNumber(num: number){
        this._jerseyNumber = num;
    }

    set position(position: string){
        this._position = position;
    }

    set picture(picture: string){
        this._picture = picture;
    }    
}