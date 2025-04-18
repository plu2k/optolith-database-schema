/**
 * @main Locale
 */

import { TypeConfig } from "../typeConfig.js"
import { validateLanguageFileName } from "../validation/builders/naming.js"
import { createSchemaValidator } from "../validation/builders/schema.js"
import { getFilenameAsStringId } from "../validation/filename.js"

/**
 * @title Supported locale
 */
export type Locale = {
  /**
   * The locale's identifier. An IETF language tag (BCP47).
   * @pattern ^[a-z]{2}-[A-Z]{2}$
   */
  id: string

  /**
   * Name of the language in it's language.
   * @minLength 1
   * @example "Deutsch"
   * @example "English"
   * @example "Nederlands"
   */
  name: string

  /**
   * Region in which the language is spoken in it's language.
   * @minLength 1
   * @example "Deutschland"
   * @example "United States"
   * @example "België"
   */
  region: string

  /**
   * The language is not (fully) implemented and thus needs to be excluded from stable releases.
   */
  is_missing_implementation?: true
}

export const config: TypeConfig<Locale, string, "Locale"> = {
  name: "Locale",
  id: getFilenameAsStringId,
  integrityValidator: () => ({ tag: "Ok", value: undefined }),
  schemaValidator: createSchemaValidator(import.meta.url, { ignoreFileNamePattern: true }),
  fileNameValidator: validateLanguageFileName,
}
