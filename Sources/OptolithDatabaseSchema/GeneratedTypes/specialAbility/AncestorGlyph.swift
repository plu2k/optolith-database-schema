//
//  AncestorGlyph.swift
//  OptolithDatabaseSchema
//

public struct AncestorGlyph: LocalizableEntity {
    public let id: Id

    public let levels: Levels?

    public let selectOptions: SelectOptions?

    public let maximum: Maximum?

    public let prerequisites: GeneralPrerequisites?

    /// The AE cost of the ancestor glyph.
    public let aeCost: Int

    public let apValue: AdventurePointsValue

    public let src: PublicationRefs

    /// All translations for the entry, identified by IETF language tag (BCP47).
    public let translations: LocaleMap<AncestorGlyphTranslation>

    public init(id: Id, levels: Levels? = nil, selectOptions: SelectOptions? = nil, maximum: Maximum? = nil, prerequisites: GeneralPrerequisites? = nil, aeCost: Int, apValue: AdventurePointsValue, src: PublicationRefs, translations: LocaleMap<AncestorGlyphTranslation>) {
        self.id = id
        self.levels = levels
        self.selectOptions = selectOptions
        self.maximum = maximum
        self.prerequisites = prerequisites
        self.aeCost = aeCost
        self.apValue = apValue
        self.src = src
        self.translations = translations
    }

    private enum CodingKeys: String, CodingKey {
        case id = "id"
        case levels = "levels"
        case selectOptions = "select_options"
        case maximum = "maximum"
        case prerequisites = "prerequisites"
        case aeCost = "ae_cost"
        case apValue = "ap_value"
        case src = "src"
        case translations = "translations"
    }
}

public struct AncestorGlyphTranslation: EntitySubtype {
    public let name: Name

    public let nameInLibrary: NameInLibrary?

    public let rules: Rules

    public let errata: Errata?

    public init(name: Name, nameInLibrary: NameInLibrary? = nil, rules: Rules, errata: Errata? = nil) {
        self.name = name
        self.nameInLibrary = nameInLibrary
        self.rules = rules
        self.errata = errata
    }

    private enum CodingKeys: String, CodingKey {
        case name = "name"
        case nameInLibrary = "name_in_library"
        case rules = "rules"
        case errata = "errata"
    }
}
