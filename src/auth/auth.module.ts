import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from '../users/users.module';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: 'mySecretKey', // Use env variables in production
      signOptions: { expiresIn: '24h' },
    }),
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
  // exports: [AuthService], // Export AuthService for use in other modules if needed
})
export class AuthModule {}
