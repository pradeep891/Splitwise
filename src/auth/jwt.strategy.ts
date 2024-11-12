import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromHeader('x-access-token'), // Extract token from x-access-token header
      ignoreExpiration: false,
      secretOrKey: 'mySecretKey', // Use environment variables in production
    });
  }

  async validate(payload: any) {
    return { userId: payload.sub, username: payload.username };
  }
}
