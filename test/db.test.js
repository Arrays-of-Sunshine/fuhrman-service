const { MongoClient } = require('mongodb');

// describe('insert', () => {
//   let connection;
//   let db;

//   beforeAll(async () => {
//     connection = await MongoClient.connect(global.__MONGO_URI__, {
//       useNewUrlParser: true,
//     });
//     db = await connection.db(global.__MONGO_DB_NAME__);
//   });

//   afterAll(async () => {
//     await connection.close();
//     await db.close();
//   });

//   it('should insert a doc into collection', async () => {
//     const users = db.collection('users');

//     const mockUser = {_id: 'some-user-id', name: 'John'};
//     await users.insertOne(mockUser);

//     const insertedUser = await users.findOne({_id: 'some-user-id'});
//     expect(insertedUser).toEqual(mockUser);
//   });
// });

describe('seeding', () => {
  let connection;
  let db;
  const mongoURI = 'mongodb://localhost/productImages';
  const database = 'productImages';

  beforeAll(async () => {
    connection = await MongoClient.connect(mongoURI, {
      useNewUrlParser: true,
    });
    db = await connection.db(database);
  });

  afterAll(async () => {
    await connection.close();
    await db.close();
  });

  it('should query one item from database', async () => {
    const productimages = db.collection('productimages');
    const result = await productimages.find({ id: 1 });
    expect(result).not.toEqual(null);
  });

  it('should get time it takes to query one item from database', async () => {
    const productimages = db.collection('productimages');
    console.time('startTimer');
    const result = await productimages.find({ id: 1 });
    if (result) {
      console.log(result);
      console.timeEnd('startTimer');
    }
  });

  // it('should query one item from database', async () => {
  //   const productimages = db.collection('productimages');

  //   // const mockUser = {_id: 'some-user-id', name: 'John'};
  //   // await users.insertOne(mockUser);
  //   console.time('findOneFromProductImages');
  //   let result = await productimages.find({id: 1});
  //   if (result) {
  //     console.timeEnd('findOneFromProductImages')
  //   }
  //   // const insertedUser = await users.findOne({_id: 'some-user-id'});
  //   // expect(insertedUser).toEqual(mockUser);

  // });
});
