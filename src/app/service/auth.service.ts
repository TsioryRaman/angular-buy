import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})
export class AuthService {
    private fakeToken:string = "FakeToken";

    getToken():string{
        return this.fakeToken;
    }
}