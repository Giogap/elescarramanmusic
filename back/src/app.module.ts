import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BandasModule } from './bandas/bandas.module';
import { EventosModule } from './eventos/eventos.module';
import { Banda } from './bandas/entities/banda.entity';
import { Evento } from './eventos/entities/evento.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST || 'localhost',
      port: parseInt(process.env.DATABASE_PORT || '5432'),
      username: process.env.DATABASE_USER || 'postgres',
      password: process.env.DATABASE_PASSWORD || 'postgres',
      database: process.env.DATABASE_NAME || 'escarraman_db',
      entities: [Banda, Evento],
      synchronize: process.env.NODE_ENV !== 'production', // Solo para desarrollo
      logging: process.env.NODE_ENV !== 'production',
    }),
    BandasModule,
    EventosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
