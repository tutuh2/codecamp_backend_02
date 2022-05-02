import {
    Connection,
    EntitySubscriberInterface,
    EventSubscriber,
    InsertEvent,
} from 'typeorm';
import { Product } from './product.entity';
import { BigQuery } from '@google-cloud/bigquery';

@EventSubscriber()
export class ProductSubscriber implements EntitySubscriberInterface<Product> {
    constructor(connection: Connection) {
        connection.subscribers.push(this);
    }

    listenTo() {
        return Product;
    }

    afterInsert(event: InsertEvent<Product>) {
        console.log(event);

        const bigquery = new BigQuery({
            keyFilename: 'gcp-bigquery.json',
            projectId: 'backend02',
        });

        bigquery
            .dataset('mybigquery02')
            .table('productlog')
            .insert([
                {
                    id: event.entity.id,
                    name: event.entity.name,
                    description: event.entity.description,
                    price: event.entity.price,
                    isSoldout: event.entity.isSoldout,
                },
            ]);
    }
}
