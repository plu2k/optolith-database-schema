/**
 * @main Stationary
 */

import { TypeConfig } from "../../../typeConfig.js"
import { todo } from "../../../validation/builders/integrity.js"
import { validateEntityFileName } from "../../../validation/builders/naming.js"
import { createSchemaValidator } from "../../../validation/builders/schema.js"
import { getFilenamePrefixAsNumericId } from "../../../validation/filename.js"
import { DefaultItem } from "./_Item.js"

export type Stationary = DefaultItem

export const config: TypeConfig<Stationary> = {
  name: "Stationary",
  id: getFilenamePrefixAsNumericId,
  integrityValidator: todo("Stationary"),
  schemaValidator: createSchemaValidator(import.meta.url),
  fileNameValidator: validateEntityFileName,
}
