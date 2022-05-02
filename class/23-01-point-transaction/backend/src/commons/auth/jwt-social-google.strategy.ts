import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth20';

@Injectable()
export class JwtGoogleStrategy extends PassportStrategy(Strategy, 'google') {
    constructor() {
        super({
            clientID:
                '521286848441-avj1kik685gae1rkmvp2t4l7tkc6j3rg.apps.googleusercontent.com',
            clientSecret: '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',
            callbackURL: 'http://localhost:3000/login/google',
            scope: ['email', 'profile'],
        });
    }

    validate(accessToken: string, refreshToken: string, profile: any) {
        console.log(accessToken);
        console.log(refreshToken);
        console.log(profile);
        return {
            email: profile.emails[0].value,
            password: '1111',
            name: profile.displayName,
            age: 0,
        };
    }
}
