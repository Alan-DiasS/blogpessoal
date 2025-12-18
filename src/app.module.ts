// import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { Postagem } from './postagem/entities/postagem.entity';
// import { PostagemModule } from './postagem/postagem.module';

// @Module({
//   imports: [
//     TypeOrmModule.forRoot({
//       type: 'mysql',
//       host: 'localhost',
//       port: 3306,
//       username: 'root',
//       password: 'root',
//       database: 'db_blogpessoal',
//       entities: [Postagem],
//       synchronize: false,
//     }),
//     PostagemModule,
//   ],
//   controllers: [],
//   providers: [],
// })
// export class AppModule {}
// import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { Postagem } from './postagem/entities/postagem.entity';
// import { PostagemModule } from './postagem/postagem.module';
// import { Tema } from './tema/entities/tema.entity';
// import { TemaModule } from './tema/tema.module';
// import { AuthModule } from './auth/auth.module';
// import { UsuarioModule } from './usuario/usuario.module';
// import { Usuario } from './usuario/entities/usuario.entity';
// import { AppController } from './postagem/app.controller';

// @Module({
//   imports: [
//     TypeOrmModule.forRoot({
//       type: 'mysql',
//       host: 'localhost',
//       port: 3306,
//       username: 'root',
//       password: 'root',
//       database: 'db_blogpessoal',
//       entities: [Postagem, Tema, Usuario],
//       synchronize: true,
//     }),
//     PostagemModule,
//     TemaModule,
//     AuthModule,
//     UsuarioModule,
//   ],
//   controllers: [AppController],
//   providers: [],
// })
// export class AppModule {}
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostagemModule } from './postagem/postagem.module';
import { TemaModule } from './tema/tema.module';
import { AuthModule } from './auth/auth.module';
import { UsuarioModule } from './usuario/usuario.module';
import { AppController } from './postagem/app.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      autoLoadEntities: true,
      synchronize: true,
      ssl:
        process.env.NODE_ENV === 'production'
          ? { rejectUnauthorized: false }
          : false,
    }),
    PostagemModule,
    TemaModule,
    AuthModule,
    UsuarioModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
