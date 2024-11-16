//
//  FocusRule.swift
//  OptolithDatabase
//
//  Generated on 16.11.2024
//

import DiscriminatedEnum

public struct FocusRule: LocalizableEntity {
    /// The focus rule's identifier. An unique, increasing integer.
    public let id: Int
    
    /// The associated subject.
    public let subject: FocusRuleSubjectReference
    
    /// The focus rule's level.
    public let level: Int
    
    /// Has the focus rule not been implemented in Optolith yet? This is also true if the focus rule does not (currently) apply to any Optolith feature.
    public let isMissingImplementation: Bool
    
    public let src: PublicationRefs
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<FocusRuleTranslation>    
    
    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case subject = "subject"
        case level = "level"
        case isMissingImplementation = "is_missing_implementation"
        case src = "src"
        case translations = "translations"
    }
}

public struct FocusRuleTranslation: EntitySubtype {
    /// The name of the focus rule.
    public let name: NonEmptyString
    
    /// The description of the focus rule.
    public let description: NonEmptyMarkdown
    
    public let errata: Errata?
}
