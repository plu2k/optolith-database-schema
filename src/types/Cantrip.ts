/**
 * @main Spell
 */

import { Errata } from "./source/_Erratum"
import { PublicationRefs } from "./source/_PublicationRef"
import { Duration, Effect, TargetCategory } from "./_ActivatableSkill"
import { Enhancements } from "./_Enhancements"
import { ImprovementCost } from "./_ImprovementCost"

/**
 * @title Spell
 */
export type Spell = {
  /**
   * The spell's identifier. An unique, increasing integer.
   * @integer
   * @minimum 1
   */
  id: number

  /**
   * Measurable parameters of a spell.
   */
  parameters: PerformanceParameters

  /**
   * The target category – the kind of creature or object – the skill affects.
   */
  target: TargetCategory.T

  /**
   * The property's identifier.
   * @integer
   * @minimum 1
   */
  property_id: number

  /**
   * States which column is used to improve the skill.
   */
  improvement_cost: ImprovementCost

  /**
   * A note specifying the dissemination of the cantrip in different traditions.
   * Sometimes a cantrip is exclusively available to one or more specific
   * traditions, but usually one the academies and traditions are listed the
   * cantrip is most commonly teached in.
   */
  note:
    | {
      tag: "Exclusive"

      /**
       * The traditions the cantrip is exclusively available to.
       * @minItems 1
       * @uniqueItems
       */
      traditions: {
        /**
         * The magical tradition's identifier.
         * @integer
         * @minimum 2
         */
        id: number
      }[]
    }
    | {
      tag: "Common"

      /**
       * The academies and traditions the cantrip is commonly teached in.
       * @minItems 1
       * @uniqueItems
       */
      list: CommonNote[]
    }

  src: PublicationRefs

  /**
   * All translations for the entry, identified by IETF language tag (BCP47).
   * @minProperties 1
   */
  translations: {
    /**
     * @patternProperties ^[a-z]{2}-[A-Z]{2}$
     */
    [localeId: string]: {
      /**
       * The name of the spell.
       * @minLength 1
       */
      name: string

      /**
       * The effect description may be either a plain text or a text that is
       * divided by a list of effects for each quality level. It may also be a
       * list for each two quality levels.
       */
      effect: Effect.T

      /**
       * @deprecated
       */
      casting_time: { full: string; abbr: string }

      /**
       * @deprecated
       */
      cost: { full: string; abbr: string }

      /**
       * @deprecated
       */
      range: { full: string; abbr: string }

      /**
       * @deprecated
       */
      duration: { full: string; abbr: string }

      /**
       * @deprecated
       */
      target: string

      errata?: Errata
    }
  }

  enhancements?: Enhancements
}

/**
 * Measurable parameters of a blessing.
 */
type PerformanceParameters = {
  range:
    | { tag: "Self" }
    | { tag: "Touch" }
    | {
      tag: "Fixed"

      /**
       * The range in steps/m.
       * @integer
       * @minimum 1
       */
      value: number

      /**
       * If `true`, the range is a radius.
       */
      is_radius?: true
    }

  duration:
    | { tag: "Immediate" }
    | {
      tag: "Fixed"

      /**
       * If `true`, the duration is a maximum duration.
       */
      is_maximum?: true

      /**
       * The (unitless) duration.
       * @integer
       * @minimum 1
       */
      value: number

      /**
       * The duration unit.
       */
      unit: Duration.Unit
    }
    | {
      tag: "DuringLovemaking"

      /**
       * The duration in rounds.
       * @integer
       * @minimum 1
       */
      value: number
    }
    | {
      tag: "Indefinite"

      /**
       * All translations for the entry, identified by IETF language tag (BCP47).
       * @minProperties 1
       */
      translations: {
        /**
         * @patternProperties ^[a-z]{2}-[A-Z]{2}$
         */
        [localeId: string]: {
          /**
           * A description of the duration.
           */
          description: {
            /**
             * The full description of the duration.
             * @minLength 1
             */
            default: string

            /**
             * A compressed description of the duration for use in small areas
             * (e.g. on character sheet).
             * @minLength 1
             */
            compressed: string
          }
        }
      }
    }
}

export type CommonNote =
  | {
    tag: "Academy"

    /**
     * The academy's curriculum identifier.
     * @integer
     * @minimum 1
     */
    id: number
  }
  | {
    tag: "Tradition"

    /**
     * The magical tradition's identifier.
     * @integer
     * @minimum 2
     */
    id: number
  }
