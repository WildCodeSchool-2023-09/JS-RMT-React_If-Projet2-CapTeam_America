create table item (
  id int unsigned primary key auto_increment not null,
  title varchar(255) not null
);

INSERT INTO item(title) VALUES("item1"), ("item2"), ("item3");