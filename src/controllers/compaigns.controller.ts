import { Request, Response } from "express";
import { Compaign } from "../models";
import CompaignModule from "../modules/compaign/CompaignModule";
export class CompaignController {
  static async GetAllCompaigns(req: Request, res: Response) {
    try {
      console.log(`compaigns.routes.get.AllCompaigns - attempting to get all compaigns`);
      const compaigns = await new CompaignModule().fetchAll();
      console.log(`compaigns.routes.get.AllCompaigns - attempting to get all compaigns status:200`);
      return res.status(200).json({
        success: true,
        response: compaigns.map((compaign) => {
          return { ...compaign, options: compaign.options[0] };
        }),
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        response: err,
      });
    }
  }

  static async CreateCompaign(req: Request, res: Response) {
    try {
      console.log(
        `compaign.routes.create.compaign - attempting to create a new compaign (title: ${req.body.title})`
      );
      const { title, description, organizer, rounds, options } = req.body;

      if (!title || !description || !organizer || !rounds) {
        console.log(
          `compaign.routes.create.compaign - attempting to create a new compaign (title: ${req.body.title}) status:400`
        );
        return res.status(400).json({
          success: false,
          response: "Invalid Request",
        });
      }
      const compaign = { title, description, organizer, rounds, options } as Compaign;
      const compaignAdded = await new CompaignModule().add(compaign);
      console.log(
        `compaign.routes.create.compaign - attempting to create a new compaign (title: ${req.body.title}) status:200`
      );
      return res.status(200).json({
        success: true,
        response: { ...compaignAdded, options: compaignAdded.options[0] },
      });
    } catch (err) {
      console.log(
        `compaign.routes.create.compaign - attempting to create a new compaign (title: ${req.body.title}) status:500`
      );
      return res.status(500).json({
        success: false,
        response: err,
      });
    }
  }
  static async UpdateCompaign(req: Request, res: Response) {
    try {
      console.log(`compaign.routes.update.compaign - attempting to update a compaign (id: ${req.params.id})`);
      const { id } = req.params;
      const { title, description, organizer, rounds, options } = req.body;

      if (!title && !description && !organizer && !rounds && !options) {
        return res.status(400).json({
          success: false,
          response: "Invalid Request",
        });
      }
      const compaign = { title, description, organizer, rounds, options } as Partial<Compaign>;

      const updatedCompaign = await new CompaignModule().update(parseInt(id), compaign);
      console.log(
        `compaign.routes.update.compaign - attempting to update a compaign (id: ${req.params.id}) status:200`
      );
      return res.status(200).json({
        success: true,
        response: { ...updatedCompaign, options: updatedCompaign.options[0] },
      });
    } catch (err) {
      return res.status(500).json({
        success: false,
        response: err,
      });
    }
  }
}
