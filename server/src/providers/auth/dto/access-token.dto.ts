export class AccessTokenDto {
  access_token: string;
  name: string;

  constructor(args: AccessTokenDto){
    this.access_token = args.access_token; 
    this.name = args.name; 
  }
}