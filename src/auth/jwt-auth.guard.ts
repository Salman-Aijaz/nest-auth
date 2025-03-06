import { Injectable, ExecutionContext } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

/**
 * JwtAuthGuard is responsible for protecting routes
 * by enforcing authentication using JWT.
 */
@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  /**
   * Determines whether the route can be accessed.
   * Calls the parent class's `canActivate` method to validate JWT authentication.
   *
   * @param {ExecutionContext} context - Provides details about the current execution.
   * @returns {boolean | Promise<boolean>} - Returns `true` if authentication is successful.
   */
  canActivate(context: ExecutionContext) {
    return super.canActivate(context);
  }
}
