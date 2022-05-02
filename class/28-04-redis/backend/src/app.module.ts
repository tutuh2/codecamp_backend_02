import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { CacheModule, Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { BoardModule } from './apis/boards/boards.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductCategoryModule } from './apis/productsCategory/productCategory.module';
import { ProductModule } from './apis/products/product.module';
import { UserModule } from './apis/users/user.module';
import { AuthModule } from './apis/auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { PointTransactionModule } from './apis/pointTransaction/pointTransaction.module';
import { FileModule } from './apis/file/file.module';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import type { RedisClientOptions } from 'redis';
import * as redisStore from 'cache-manager-redis-store';

@Module({
    imports: [
        AuthModule,
        BoardModule,
        FileModule,
        ProductModule,
        ProductCategoryModule,
        UserModule,
        PointTransactionModule,
        ConfigModule.forRoot(),
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: 'src/commons/graphql/schema.gql',
            context: ({ req, res }) => ({ req, res }),
        }),
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'my-database-class',
            port: 3306,
            username: 'root',
            password: 'root',
            database: 'mydocker03',
            entities: [__dirname + '/apis/**/*.entity.*'],
            synchronize: true,
            logging: true,
            retryAttempts: 50,
        }),
        CacheModule.register<RedisClientOptions>({
            store: redisStore,
            url: 'redis://my-redis:6379',
            isGlobal: true,
        }),
    ],
    // controllers: [AppController],
    // providers: [AppService],
})
export class AppModule {}
