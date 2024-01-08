import { Injectable } from "@angular/core";

const fakeUser = {
    username:"Tsiory",
    password:"Tsiory"
}

@Injectable({
    providedIn:'root'
})
export class AuthService {
    private fakeToken:string;

    login(user:{username:string,password:string}):boolean{
        if(user.username === fakeUser.username && user.password === fakeUser.password){
            this.fakeToken = "fakeToken";
            return true
        }
        this.fakeToken = null;
        return false
    }

    getToken():string{
        return this.fakeToken;
    }
}