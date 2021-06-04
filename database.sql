-- Don't forget to add your create table SQL 
-- It is also helpful to include some test data

CREATE TABLE "list" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR(50) NOT NULL,
	"quantity" INT NOT NULL,
	"unit" VARCHAR(100) NOT NULL,
	"purchased" BOOLEAN DEFAULT FALSE
	);
	
INSERT INTO "list" ( "name", "quantity", "unit", "purchased") VALUES ('Apples', '5', 'lbs', false);