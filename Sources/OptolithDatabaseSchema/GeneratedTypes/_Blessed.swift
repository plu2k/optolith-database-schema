//
//  _Blessed.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

@DiscriminatedEnum
public enum SkillTradition: EntitySubtype {
    case generalAspect(AspectReference)
    case tradition(SkillTraditionWithAspects)
}

public struct SkillTraditionWithAspects: EntitySubtype {
    /// The blessed tradition.
    public let tradition: BlessedTraditionReference
    
    /// The aspect(s) from the tradition the ceremony belongs to. Note that not all traditions have aspects. Traditions with aspects must have at least one aspect specified.
    public let aspects: [AspectReference]?

    public init(tradition: BlessedTraditionReference, aspects: [AspectReference]? = nil) {
        self.tradition = tradition
        self.aspects = aspects
    }
}
