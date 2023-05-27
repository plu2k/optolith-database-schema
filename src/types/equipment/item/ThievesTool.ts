/**
 * @main ThievesTool
 */

import { TypeConfig } from "../../../typeConfig.js"
import { todo } from "../../../validation/builders/integrity.js"
import { createSchemaValidator } from "../../../validation/builders/schema.js"
import { getFIlenamePrefixAsNumericId } from "../../../validation/filename.js"
import { DefaultItem } from "./_Item.js"

export type ThievesTool = DefaultItem

export const config: TypeConfig<ThievesTool> = {
  name: "ThievesTool",
  id: getFIlenamePrefixAsNumericId,
  integrityValidator: todo("ThievesTool"),
  schemaValidator: createSchemaValidator(import.meta.url),
}
