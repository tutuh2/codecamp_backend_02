import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StarbucksModule } from './apis/starbucks/starbucks.module';
import { Starbucks } from './apis/starbucks/entities/starbucks.entity';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';

@Module({
    imports: [
        StarbucksModule,
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
            entities: [Starbucks],
            synchronize: true,
            logging: true,
        }),
    ],
    // controllers: [AppController],
    // providers: [AppService],
})
export class AppModule {}
