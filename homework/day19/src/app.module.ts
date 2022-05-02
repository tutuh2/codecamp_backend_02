import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AutoPilotModule } from './apis/autoPilot/autoPilot.module';
import { ModelModule } from './apis/models/model.module';
import { ProductModule } from './apis/product/product.module';
import { BoardModule } from './apis/boards/boards.module';
import { ColorModule } from './apis/color/color.module';
import { TypeModule } from './apis/types/type.module';
import { InteriorModule } from './apis/interior/interior.module';
import { SeatModule } from './apis/seat/seat.module';
import { WheelDriveModule } from './apis/wheelDrive/wheelDrive.module';
import { WheelsizeModule } from './apis/wheelsize/wheelsize.module';
import { UserModule } from './apis/users/user.module';

// import { AppController } from './app.controller';
// import { AppService } from './app.service';

@Module({
    imports: [
        BoardModule,
        ProductModule,
        ModelModule,
        AutoPilotModule,
        ColorModule,
        InteriorModule,
        TypeModule,
        SeatModule,
        WheelDriveModule,
        WheelsizeModule,
        UserModule,
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: 'src/commons/graphql/schema.gql',
        }),
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'my-database',
            port: 3306,
            username: 'root',
            password: 'root',
            database: 'mydocker02',
            entities: [__dirname + '/apis/**/*.entity.*'],
            synchronize: true,
            logging: true,
            retryAttempts: 50,
        }),
    ],
    // controllers: [AppController],
    // providers: [AppService],
})
export class AppModule {}
