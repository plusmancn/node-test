# for more information on DATABASES, see the Django configuration at:
# https://docs.djangoproject.com/en/1.6/ref/databases/
DATABASES = {
    'default': {
        # We suggest PostgreSQL for optimal performance
        'ENGINE': 'sentry.db.postgres',

        # Alternatively you can use MySQL
        # 'ENGINE': 'django.db.backends.mysql',

        'NAME': 'sentry',
        'USER': 'sentrydb',
        'PASSWORD': 'hackerliu',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}

# No trailing slash!
SENTRY_URL_PREFIX = 'http://sentry.plusman.cn:9000'

# Configure Redis
SENTRY_REDIS_OPTIONS = {
    'hosts': {
        0: {
            'host': '127.0.0.1',
            'port': 6379,
            'timeout': 3,
            'password': 'SoucheRedis#$%'
        }
    }
}

# Cache
SENTRY_CACHE = 'sentry.cache.redis.RedisCache'

# all address
SENTRY_WEB_HOST = '0.0.0.0'  # bind to all addresses