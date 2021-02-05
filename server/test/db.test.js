// Attempt at writing a test suite to test MongoDB, will continue working on later if time permits //

/*

const {MongoClient} = require('mongodb');

// const mongoURI = 'mongodb://localhost/productImages';

describe('insert', () => {
  let connection;
  let db;

  beforeAll(async () => {
    connection = await MongoClient.connect(global.__MONGO_URI__, {
      useNewUrlParser: true,
    });
    db = await connection.db(global.__MONGO_DB_NAME__);
  });

  afterAll(async () => {
    await connection.close();
    await db.close();
  });

  it('should insert a doc into collection', async () => {
    const users = db.collection('productimages');

    const mockUser = {
      _id: 1,
      product_id: 123,
      product_name: 'Sample_product',
      product_description: 'Sample_description',
      company_name: 'Sample_company',
      category: 'Sample_category',
      images: ['sampleImg1', 'sampleImg2', 'sampleImg3', 'sampleImg4', 'sampleImg5'],
    };
    await users.insertOne(mockUser);

    const insertedUser = await productimages.findOne({_id: 1});
    expect(insertedUser).toEqual(mockUser);
  });
});

*/