/**
 * @main BlessedTradition
 */

import { TypeConfig } from "../../typeConfig.js"
import { todo } from "../../validation/builders/integrity.js"
import { validateEntityFileName } from "../../validation/builders/naming.js"
import { createSchemaValidator } from "../../validation/builders/schema.js"
import { getFilenamePrefixAsNumericId } from "../../validation/filename.js"
import * as Activatable from "../_Activatable.js"
import { LocaleMap } from "../_LocaleMap.js"
import { GeneralPrerequisites } from "../_Prerequisite.js"
import {
  AspectReference,
  AttributeReference,
  BlessingReference,
  CombatTechniqueReference,
  SkillReference,
} from "../_SimpleReferences.js"
import { Errata } from "../source/_Erratum.js"
import { PublicationRefs } from "../source/_PublicationRef.js"
import { SpecialRule } from "./_Tradition.js"

/**
 * @title Blessed Tradition
 */
export type BlessedTradition = {
  id: Activatable.Id

  select_options?: Activatable.SelectOptions

  skill_applications?: Activatable.SkillApplications

  skill_uses?: Activatable.SkillUses

  /**
   * The tradition's primary attribute. Leave empty if the tradition does not have one.
   */
  primary?: AttributeReference

  /**
   * The tradition's aspects, if any.
   * @minItems 2
   * @maxItems 2
   */
  aspects?: AspectReference[]

  /**
   * If a tradition restricts the possible blessings, the blessings that are
   * **not** allowed.
   */
  restricted_blessings?: RestrictedBlessings

  /**
   * A list of favored combat techniques.
   */
  favored_combat_techniques?: FavoredCombatTechniques

  /**
   * A list of favored skills.
   * @minItems 1
   */
  favored_skills: SkillReference[]

  /**
   * On activation of the tradition, a specific number of skills from a list of skills must be selected as being favored.
   */
  favored_skills_selection?: FavoredSkillsSelection

  /**
   * The type of the tradition. May be either church or shamanistic.
   */
  type: BlessedTraditionType

  /**
   * The select option's identifier of the disadvantage *Principles* that represent this tradition's code, if any.
   */
  associated_principles_id?: number

  prerequisites?: GeneralPrerequisites

  ap_value: Activatable.AdventurePointsValue

  src: PublicationRefs

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   */
  translations: LocaleMap<BlessedTraditionTranslation>
}

/**
 * If a tradition restricts the possible blessings, the blessings that are
 * **not** allowed.
 */
export type RestrictedBlessings =
  | { tag: "Three"; three: ThreeRestrictedBlessings }
  | { tag: "Six"; six: SixRestrictedBlessings }

/**
 * @uniqueItems
 * @minItems 3
 * @maxItems 3
 */
export type ThreeRestrictedBlessings = BlessingReference[]

/**
 * @uniqueItems
 * @minItems 6
 * @maxItems 6
 */
export type SixRestrictedBlessings = BlessingReference[]

export type FavoredCombatTechniques =
  | { tag: "All"; all: {} }
  | { tag: "AllClose"; all_close: {} }
  | { tag: "AllUsedInHunting"; all_used_in_hunting: {} }
  | { tag: "Specific"; specific: SpecificFavoredCombatTechniques }

export type SpecificFavoredCombatTechniques = {
  /**
   * A list of specific favored combat techniques.
   * @minItems 1
   * @uniqueItems
   */
  list: CombatTechniqueReference[]
}

export type FavoredSkillsSelection = {
  /**
   * The number of skills that can be selected.
   * @integer
   * @minimum 1
   */
  number: number

  /**
   * The possible set of skills.
   * @minItems 2
   * @uniqueItems
   */
  options: SkillReference[]
}

/**
 * The type of the tradition. May be either church or shamanistic.
 */
export type BlessedTraditionType =
  | { tag: "Church"; church: {} }
  | { tag: "Shamanistic"; shamanistic: ShamanisticBlessedTradition }

/**
 * Additional rules for shamanistic traditions.
 */
export type ShamanisticBlessedTradition = {
  can_use_bone_mace_as_ceremonial_item: boolean
}

export type BlessedTraditionTranslation = {
  name: Activatable.Name

  /**
   * A shorter name of the tradition's name, used in liturgical chant descriptions.
   * @minLength 1
   */
  name_compressed?: string

  name_in_library?: Activatable.NameInLibrary

  // input?: Activatable.Input

  /**
   * The special rules of the tradition. They should be sorted like they are in the book.
   * @minItems 1
   */
  special_rules: SpecialRule[]

  errata?: Errata
}

export const config: TypeConfig<BlessedTradition, BlessedTradition["id"], "BlessedTradition"> = {
  name: "BlessedTradition",
  id: getFilenamePrefixAsNumericId,
  integrityValidator: todo("BlessedTradition"),
  schemaValidator: createSchemaValidator(import.meta.url),
  fileNameValidator: validateEntityFileName,
}
