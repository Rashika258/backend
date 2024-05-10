import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    validateApiKey(apiKey: string): boolean {
        const validateApiKeys = [
            '1234567890',
            '0987654321'
        ]

        return validateApiKeys.includes(apiKey)
    }
}
