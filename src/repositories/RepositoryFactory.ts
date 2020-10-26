import BaseEntity from "../models/BaseEntity";
import IGenericRepository from "./IGenericRepository";
import GenericRepository from "./GenericRepository";
import { Compaign } from "../models";

function buildRepository<T extends BaseEntity>(tableName: string): IGenericRepository<T> {
  return new GenericRepository<T>(tableName);
}

export default {
  buildCompaignRepository: () => buildRepository<Compaign>("compaigns"),
};
