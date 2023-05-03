CREATE TABLE img (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  product_id INTEGER NOT NULL,
  FOREIGN KEY (product_id) REFERENCES products (id),
  show BOOLEAN DEFAULT true,
  size BYTEA,
  created_at TIMESTAMP NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMP NOT NULL DEFAULT NOW()
)
