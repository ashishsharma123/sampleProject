export class User {
    private fullName:string;
    private description:string;



	public get _fullName(): string {
		return this.fullName;
	}

	public set _fullName(value: string) {
		this.fullName = value;
	}
	public get _description(): string {
		return this.description;
	}

	public set _description(value: string) {
		this.description = value;
	}
    


}
