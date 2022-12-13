import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../src/app.module';
import { describe, it, beforeEach } from 'vitest';
import { spec } from 'pactum';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
    await app.listen(3333);
  });

  it('/ (GET)', () => {
    return spec()
      .get('http://localhost:3333/')
      .expectStatus(200)
      .expectBody('Hello World!');
  });
});
