

## NoSQL vs SQL

  ![image](https://github.com/Akmeena4u/Web-Development-Bootcamp/assets/93425334/496b5bb1-2234-4435-83d0-ac593a44ec83)



## SQL vs NoSQL Data Representation
- **SQL Example:**
  ```plaintext
  Table: Students
  +-----------+------------+-----------+-----+-------+
  | student_id| first_name | last_name | age | grade |
  +-----------+------------+-----------+-----+-------+
  |    1      |    Vinod   |   Thapa   | 16  |   11  |
  |    2      |    Thapa   | Technical | 17  |   12  |
  +-----------+------------+-----------+-----+-------+

  Table: Subjects
  +-----------+--------------+
  | subject_id| subject_name |
  +-----------+--------------+
  |     1     | Mathematics  |
  |     2     |   Computer   |
  +-----------+--------------+

  Table: Grades
  +-----------+-----------+-------+
  | student_id| subject_id| marks |
  +-----------+-----------+-------+
  |     1     |     1     |  100  |
  |     2     |     2     |  99   |
  +-----------+-----------+-------+
  ```
- **NoSQL (MongoDB) Example:**
  ```json
  Collection: Students
  [
    {
      "_id": "1",
      "first_name": "Vinod",
      "last_name": "Thapa",
      "age": 16,
      "grade": 11,
      "subjects": [
        { "subject_name": "Mathematics", "marks": 100 },
        { "subject_name": "Computer", "marks": 100 }
      ]
    },
    {
      "_id": "2",
      "first_name": "Thapa",
      "last_name": "Technical",
      "age": 17,
      "grade": 12,
      "extra": "sport captain",
      "subjects": [
        { "subject_name": "Mathematics", "marks": 100 },
        { "subject_name": "Computer", "marks": 100 }
      ]
    }
  ]
  ```

## MongoDB Components
- **MongoDB Atlas:** A fully managed cloud database service provided by MongoDB, Inc.
- *1. MongoDB Compass:* A GUI for MongoDB, providing a visual interface to explore data, run queries, and manage databases.
- *2. Mongoshell*: CLI interface to explore data, run queries, and manage databases.

## MongoDB Terminologies
- **Database:**
  - A collection of collections.
- **Collection:**
  - A group of MongoDB documents.
  - Equivalent to an SQL table.
- **Document:**
  - A single record in a MongoDB collection.
  - Equivalent to a row in an SQL table.
- **Schemaless:**
  - MongoDB allows for a dynamic, schema-less data structure.

  ![image](https://github.com/Akmeena4u/Web-Development-Bootcamp/assets/93425334/adf7d086-2dd2-452e-8ad5-e02ba20913c3)


## Key Features of MongoDB

  ![image](https://github.com/Akmeena4u/Web-Development-Bootcamp/assets/93425334/bbd1de33-d10d-476e-b6e2-6d7d0884db77)


## How MongoDB Works

  ![image](https://github.com/Akmeena4u/Web-Development-Bootcamp/assets/93425334/705dd528-0423-457b-8683-d31c1b587016)


