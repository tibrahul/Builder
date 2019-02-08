import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {
    public projbaseUrl: string = "http://localhost:3003";
    public flowbaseUrl: string = "http://localhost:3001";
    public mflowbaseUrl: string = "http://localhost:3002";
    public screenbaseUrl: string = "http://50.19.50.131/supermart-web-10010";
    public browser_language: string;
}