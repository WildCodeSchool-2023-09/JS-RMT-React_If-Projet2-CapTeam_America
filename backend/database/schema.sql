create table superhero (
  id int unsigned primary key auto_increment not null,
  name varchar(255) not null,
  slug varchar(255) not null,
  image_sm varchar(255) not null,
  image_md varchar(255) not null,
  gender varchar(100) not null,
  race varchar(100) null,
  eyecolor varchar(100) not null,
  haircolor varchar(100) not null,
  fullname varchar(255) not null,
  place_of_birth varchar(255) not null,
  first_appearance varchar(255) not null,
  work varchar(255) not null,
  intelligence int not null,
  strength int not null,
  speed int not null,
  durability int not null,
  power int not null,
  combat int not null
);

insert into superhero (name, slug, image_sm, image_md, gender, race, eyeColor, haircolor, fullname, place_of_birth, first_appearance, work, intelligence, strength, speed, durability, power, combat)
values ('A-Bomb', '1-a-bomb', 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/1-a-bomb.jpg', 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/1-a-bomb.jpg', 'Male', 'Human', 'Yellow', 'No hair', 'Richard Milhouse Jones', 'Scarsdale, Arizona', 'Hulk Vol 2 #2 (April, 2008) (as A-Bomb)', 'Musician, adventurer, author; formerly talk show host', 38, 100, 17, 80, 24, 64),
('Abe Sapien', '2-abe-sapien', 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/2-abe-sapien.jpg', 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/2-abe-sapien.jpg', 'Male', 'Icthyo Sapien', 'Blue', 'No Hair', 'Abraham Sapien', '-', 'Hellboy: Seed of Destruction (1993)', 'Paranormal Investigator', 88, 28, 35, 65, 100, 85),
('Abin Sur', '3-abin-sur', 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/3-abin-sur.jpg', 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/3-abin-sur.jpg', 'Male', 'Ungaran', 'Blue', 'No Hair', '-', 'Ungara', 'Showcase #22 (October, 1959)', 'Green Lantern, former history professor', 50, 90, 53, 64, 99, 65),
('Abomination', '4-abomination', 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/4-abomination.jpg', 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/4-abomination.jpg', 'Male', 'Human / Radiation', 'Green', 'No Hair', 'Emil Blonsky', 'Zagreb, Yugoslavia', 'Tales to Astonish #90', 'Ex-Spy', 63, 80, 53, 90, 62, 95),
('Abraxas', '5-abraxas', 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/sm/5-abraxas.jpg', 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/images/md/5-abraxas.jpg', 'Male', 'Cosmic Entity', 'Blue', 'Black', 'Abraxas', 'Within Eternity', 'Fantastic Four Annual #2001', 'Dimensional destroyer', 88, 63, 83, 100, 100, 55)
;
