/**
 * @main ArcaneBardTradition
 */

import { TypeConfig } from "../typeConfig.js"
import { todo } from "../validation/builders/integrity.js"
import { createSchemaValidator } from "../validation/builders/schema.js"
import { getFIlenamePrefixAsNumericId } from "../validation/filename.js"
import { ArcaneTradition } from "./_ArcaneTradition.js"

/**
 * @title Arcane Bard Tradition
 */
export type ArcaneBardTradition = ArcaneTradition

export const config: TypeConfig<ArcaneBardTradition> = {
  name: "ArcaneBardTradition",
  id: getFIlenamePrefixAsNumericId,
  integrityValidator: todo("ArcaneBardTradition"),
  schemaValidator: createSchemaValidator(import.meta.url),
}
