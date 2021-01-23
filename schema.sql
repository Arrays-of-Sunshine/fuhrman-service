
DROP DATABASE IF EXISTS product_images;
CREATE DATABASE product_images;
USE product_images;

CREATE TABLE product_images (
  ID INTEGER NOT NULL AUTO_INCREMENT,
  product_id INT,
  product_name VARCHAR(60),
  media_type VARCHAR(10),
  image_desc VARCHAR(240),
  image_loc VARCHAR(240),
  company_name VARCHAR(60),
  category VARCHAR(60),
  image_num INT,
  PRIMARY KEY (ID)
);