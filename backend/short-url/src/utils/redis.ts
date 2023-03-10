import config from '@config';

import Redis from 'ioredis';
export const redis = new Redis(config.REDIS_URL);

export async function closeRedis() {
    return redis.quit();
}
