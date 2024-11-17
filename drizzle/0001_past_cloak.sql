CREATE TABLE IF NOT EXISTS "tilmelding" (
	"værelsesnummer" varchar(255) PRIMARY KEY NOT NULL,
	"tilmelding" jsonb
);
