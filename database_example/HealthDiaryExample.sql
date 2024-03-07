DROP DATABASE IF EXISTS HealthDiary;
CREATE DATABASE HealthDiary;
USE HealthDiary;

CREATE TABLE Users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    user_level VARCHAR(10) NOT NULL DEFAULT 'regular'
);

-- Create a table for diary entries
CREATE TABLE DiaryEntries (
    entry_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    entry_date DATE NOT NULL,
    mood VARCHAR(50),
    weight DECIMAL(5,2),
    sleep_hours INT,
    notes TEXT,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

CREATE TABLE Comments (
  comment_id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES Users(user_id),
  username VARCHAR(50) NOT NULL,
  post_id INT NOT NULL UNIQUE,
  comment_text VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE ExerciseEntries (
    exercise_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    entry_date DATE NOT NULL,
    exercise_type VARCHAR(50) NOT NULL,
    duration_minutes INT,
    calories_burned DECIMAL(5,2),
    notes TEXT,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
);

INSERT INTO ExerciseEntries (user_id, entry_date, exercise_type, duration_minutes, calories_burned, notes)
VALUES
    (1, '2024-02-05', 'Sali', 30, 300.50, 'Haba penkki vatsat'),
    (2, '2024-02-05', 'Paini', 45, 400.75, '60 min painia')
    ;

INSERT INTO Comments (user_id, username, post_id, comment_text) VALUES
  (3,'mikesmith', 123, 'Toimiiko tämä?!')
  (1,'johndoe', 124, 'TTämä toimii!')
;

-- INSERT USER SAMPLE DATA
INSERT INTO Users (username, password, email, user_level) VALUES
  ('johndoe', 'temp-pw-1', 'johndoe@example.com', 'regular'),
  ('janedoe', 'temp-pw-2', 'janedoe@example.com', 'admin'),
  ('mike_smith', 'temp-pw-3', 'mike@example.com', 'moderator');

INSERT INTO DiaryEntries (user_id, entry_date, mood, weight, sleep_hours, notes, created_at) VALUES
  (1, '2024-01-10', 'Happy', 70.5, 8, 'Had a great day, felt energetic', '2014-01-10 20:00:00'),
  (1, '2024-01-11', 'Tired', 70.2, 6, 'Long day at work, need rest', '2002-01-11 20:00:00'),
  (2, '2024-01-10', 'Stressed', 65.0, 7, 'Busy day, a bit stressed out', '2024-01-10 21:00:00');
