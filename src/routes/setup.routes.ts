import { Router } from "express";
import db from "../knex";
import { DatabaseError } from "../errors/general.errors";
import { Request, Response } from "express";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    await db.raw(`
    CREATE TABLE compaigns (
      id serial NOT NULL PRIMARY KEY,
      options jsonb,
      title TEXT,
      organizer TEXT,
      description TEXT,
      rounds TEXT
    );
      `);
    return res.status(200).json({
      success: true,
      response: "TABLES CREATED",
    });
  } catch (err) {
    console.log("error", err);
    throw new DatabaseError();
  }
});

export default router;
