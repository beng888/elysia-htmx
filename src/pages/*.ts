import Elysia from "elysia";
import index from ".";
import { authGroup } from "./(auth)/*";

export const pages = new Elysia().use(index).use(authGroup);
