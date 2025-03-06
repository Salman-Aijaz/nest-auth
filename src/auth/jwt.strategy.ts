import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

/**
 * JwtStrategy is a Passport authentication strategy used to validate 
 * JSON Web Tokens (JWTs) in NestJS applications.
 * 
 * It extracts the token from the request's Authorization header, 
 * verifies it using a secret key, and returns the authenticated user data.
 */
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      /**
       * Extracts the JWT token from the "Authorization" header as a Bearer token.
       * Example: Authorization: Bearer <jwt-token>
       */
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),

      /**
       * If set to false, expired tokens will be rejected.
       * Ensures the token must be valid and within its expiration period.
       */
      ignoreExpiration: false,

      /**
       * The secret key used to verify the JWT signature.
       * This should be securely stored in an environment variable.
       */
      secretOrKey: process.env.JWT_SECRET || 'secret',
    });
  }

  /**
   * Validates the decoded JWT payload and returns the user data.
   * This function automatically runs when a valid JWT is received.
   * 
   * @param payload - Decoded JWT payload containing user details.
   * @returns An object containing userId and email.
   */
  async validate(payload: any) {
    return { userId: payload.sub, email: payload.email };
  }
}
