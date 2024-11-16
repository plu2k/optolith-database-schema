//
//  ArmorType.swift
//  OptolithDatabase
//
//  Generated on 16.11.2024
//

import DiscriminatedEnum

public struct ArmorType: LocalizableEntity {
    /// The armor type's identifier. An unique, increasing integer.
    public let id: Int
    
    /// An armor type can have a *sturdiness rating*. The higher the rating, the
    /// more durable the armor. Rolling higher than this rating during a sturdiness
    /// check means the armor receives one level of the new condition *Wear*.
    public let sturdinessRating: Int?
    
    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<ArmorTypeTranslation>    
    
    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case sturdinessRating = "sturdiness_rating"
        case translations = "translations"
    }
}

public struct ArmorTypeTranslation: EntitySubtype {
    /// The name of the armor type.
    public let name: NonEmptyString
}
