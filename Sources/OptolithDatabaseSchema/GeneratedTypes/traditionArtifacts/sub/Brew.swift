//
//  Brew.swift
//  OptolithDatabase
//
//  Generated on 16.11.2024
//

import DiscriminatedEnum

public struct Brew: LocalizableEntity {
    /// The brew's identifier. An unique, increasing integer.
    public let id: Int
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<BrewTranslation>
}

public struct BrewTranslation: EntitySubtype {
    /// The brew name.
    public let name: NonEmptyString
}
