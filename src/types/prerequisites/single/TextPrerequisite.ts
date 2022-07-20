import { LocaleMap } from "../../_LocaleMap"
import { NonEmptyMarkdown } from "../../_NonEmptyString"

/**
 * A prerequisite that is either not verifyable in general – e.g. roleplay or
 * background information – or the referenced entities were not made available
 * for use yet – e.g. races –, but which should be displayed, because it is part
 * of the prerequisite string from the sources.
 * @title Text Prerequisite
 */
export type TextPrerequisite = {
  /**
   * The method how the prerequisite should be verified. Either is passes all
   * verification text or it denies all verification tests. The latter results
   * in the associated entry to never be available for purchase.
   */
  verification: TextVerificationRule

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   * @minProperties 1
   */
  translations: LocaleMap<TextVerificationRule>
}

export type TextVerificationRule =
  | { tag: "Pass" }
  | { tag: "Deny" }

export type TextPrerequisiteTranslation = NonEmptyMarkdown
