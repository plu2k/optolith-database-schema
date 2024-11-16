//
//  _ImprovementCost.swift
//  OptolithDatabaseSchema
//

import DiscriminatedEnum

public enum ImprovementCost: String, EntitySubtype {
    case a = "A"
    case b = "B"
    case c = "C"
    case d = "D"
}
