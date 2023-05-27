/**
 * @main TravelGearOrTool
 */

import { TypeConfig } from "../../../typeConfig.js"
import { todo } from "../../../validation/builders/integrity.js"
import { createSchemaValidator } from "../../../validation/builders/schema.js"
import { getFIlenamePrefixAsNumericId } from "../../../validation/filename.js"
import { DefaultItem } from "./_Item.js"

export type TravelGearOrTool = DefaultItem

export const config: TypeConfig<TravelGearOrTool> = {
  name: "TravelGearOrTool",
  id: getFIlenamePrefixAsNumericId,
  integrityValidator: todo("TravelGearOrTool"),
  schemaValidator: createSchemaValidator(import.meta.url),
}
