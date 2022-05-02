import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardModule } from './apis/boards/boards.module';
import { Board } from './apis/boards/entities/board.entity';
import { ProductModule } from './apis/products/product.module';
import { ProductCategoryModule } from './apis/productsCategory/productCategory.module';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';

@Module({
    imports: [
        BoardModule,
        ProductCategoryModule,
        ProductModule,
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: 'src/commons/graphql/schema.gql',
        }),
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'asd1897425',
            database: 'myproject02',
            entities: [__dirname + '/apis/**/*.entity.*'],
            synchronize: true,
            logging: true,
            retryAttempts: 30,
        }),
    ],
    // controllers: [AppController],
    // providers: [AppService],
})
export class AppModule {}
